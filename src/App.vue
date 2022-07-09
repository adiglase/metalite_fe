<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useCurrentUser } from 'src/stores/currentUser.js'
import axios from 'axios'


export default defineComponent({
  name: 'App',
  async mounted() {
    const { userData, setUserData } = useCurrentUser()

    const response = await axios.get("/api/v1/users/me");
    setUserData(response.data)
  }
})
</script>
<style scoped>
</style>