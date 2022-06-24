<template>
  <q-page>
    <article class="index-container">
      <HeaderActionBox @toggleRightDrawer="$emit('toggleRightDrawer')" @toggleLeftDrawer="$emit('toggleLeftDrawer')">
      </HeaderActionBox>
      <FeedListBox :postList="postList"></FeedListBox>
    </article>
  </q-page>
</template>
<script setup>
import HeaderActionBox from "../components/HeaderActionBox.vue"
import FeedListBox from "../components/FeedListBox.vue"
import { onMounted, ref } from "vue"
import axios from 'axios'

const postList = ref([])

onMounted(async () => {
  await fetchPosts()
})

const fetchPosts = async () => {
  try {
    const response = await axios.get("/api/v1/posts/")
    postList.value = response.data
  } catch (error) {
    console.log(JSON.stringify(error))
    // if (error.response) {
    //   for (const property in error.response.data) {
    //     errors.value.push(`${property}: ${error.response.data[property]}`);
    //   }
    // } else if (error.message) {
    //   console.error(error.message);
    //   errors.value.push(error.message);
    // }
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