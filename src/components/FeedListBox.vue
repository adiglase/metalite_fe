<template>
  <article class="q-mt-lg">
    <div class="header">
      <p class="font-extrabold">Feeds</p>
      <q-btn rounded padding="12px 24px" class="q-ml-auto" size="md" color="action" no-caps label="Latest"></q-btn>
    </div>

    <div class="list-container">
      <q-spinner v-if="isLoading" class="block q-mx-auto" color="primary" size="3em"></q-spinner>
      <FeedItemBox v-for="post in postList" :key="post.id" :postItem="post"></FeedItemBox>
    </div>
  </article>
</template>
<script setup>
import FeedItemBox from "../components/FeedItemBox.vue"

defineProps({
  postList: Array,
  isLoading: Boolean
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