<template>
  <article class="q-mt-lg">
    <div class="header">
      <p class="font-extrabold">Feeds</p>
      <q-btn rounded padding="12px 24px" class="q-ml-auto" size="md" color="action" no-caps label="Latest"></q-btn>
    </div>

    <div class="list-container">
      <FeedItemBox v-for="post in postList" :key="post.id" :postItem="post"></FeedItemBox>
    </div>
  </article>
</template>
<script setup>
import FeedItemBox from "../components/FeedItemBox.vue"

defineProps({
  postList: Array
})

</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;

  p {
    font-size: 24px;
    margin: 0;
  }
}
</style>