<template>
  <q-page>
    <article class="index-container">
      <HeaderActionBox @toggleRightDrawer="$emit('toggleRightDrawer')" @toggleLeftDrawer="$emit('toggleLeftDrawer')">
      </HeaderActionBox>
      <MessageBox v-if="errors.length" :message="String(errors)" type="danger"></MessageBox>
      <FeedListBox :postList="postList"></FeedListBox>
    </article>
  </q-page>
</template>
<script setup>
import HeaderActionBox from "../components/HeaderActionBox.vue"
import FeedListBox from "../components/FeedListBox.vue"
import MessageBox from "components/MessageBox.vue"
import { onMounted, ref } from "vue"
import { useErrors } from "src/stores/errors.js";
import axios from 'axios'

const { errors, setErrors } = useErrors()
const postList = ref([])

onMounted(async () => {
  await fetchPosts()
})

const fetchPosts = async () => {
  try {
    const response = await axios.get("/api/v1/posts/")
    console.log('fetching post')
    postList.value = response.data
  } catch (error) {
    setErrors([error.message])
  }
}

</script>
<style scoped>
.index-container {
  margin: auto;
  padding: 40px;
  max-width: 900px;
}
</style>