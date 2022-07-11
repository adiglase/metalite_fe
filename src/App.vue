<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useCurrentUser } from 'src/stores/currentUser.js'
import axios from 'axios'
import { useAuth } from "src/stores/auth.js";
import { mapState } from 'pinia';


export default defineComponent({
  name: 'App',
  async mounted() {
    const loggedIn = !!localStorage.getItem("token")

    if (loggedIn) {
      await this.fetchUserData()
    }

  },
  methods: {
    async fetchUserData() {
      const { userData, setUserData } = useCurrentUser()

      const response = await axios.get("/api/v1/users/me");
      setUserData(response.data)
    }
  },
  computed: {
    ...mapState(useAuth, ['token'])
  },
  watch: {
    token(newVal) {
      const { setUserData } = useCurrentUser()

      if (newVal) this.fetchUserData()
      else setUserData(null)
    }
  }
})
</script>
<style scoped>
</style>