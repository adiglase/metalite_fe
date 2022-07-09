<template>
  <q-page>
    <article class="index-container">
      <HeaderActionBox @toggleRightDrawer="$emit('toggleRightDrawer')" @toggleLeftDrawer="$emit('toggleLeftDrawer')"
        @fetchPosts="fetchPosts">
      </HeaderActionBox>
      <MessageBox v-if="errors.length" :message="String(errors)" type="danger"></MessageBox>
      <FeedListBox :isLoading="isLoading" :postList="postList" @updatePostItem="updatePostItem"></FeedListBox>
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
const isLoading = ref(false)

onMounted(async () => {
  await fetchPosts()
})

const fetchPosts = async () => {
  isLoading.value = true
  try {
    const response = await axios.get("/api/v1/posts/")
    postList.value = response.data
  } catch (error) {
    setErrors([error.message])
  }
  isLoading.value = false
}

const updatePostItem = (postData) => {
  const postItemIndex = postList.value.findIndex(item => {
    return item.id == postData.id
  })
  postList.value.splice(postItemIndex, 1, postData)
}

</script>
<style scoped>
.index-container {
  margin: auto;
  padding: 40px;
  max-width: 900px;
}
</style>