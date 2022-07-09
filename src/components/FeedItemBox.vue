<template>
  <article class="q-my-lg">
    <q-card flat class="col">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="user-full-name font-bold">{{ postItem.created_by.full_name }}</q-item-label>
          <q-item-label class="username" caption>
            @{{ postItem.created_by.username }}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="more_horiz" class="feed-option" color="primary-font"></q-icon>
        </q-item-section>
      </q-item>

      <q-separator></q-separator>

      <q-img :src="postItem.image" alt="" :ratio="4 / 3"></q-img>

      <q-card-section
        class="feed-description font-semibold text-justify border-radius-inherit q-mt-sm q-px-none q-py-xs">
        {{ postItem.description }}
      </q-card-section>

      <q-card-actions class="q-my-xs q-pa-none">
        <q-btn flat :color="postItem.is_liked ? 'negative' : 'sub-action'" @click="onLikeHandler(postItem.id)"
          padding="0" :icon="postItem.is_liked ? 'favorite' : 'favorite_outline'" :loading="isLoading"
          :label="postItem.total_likes" class="q-mr-md"></q-btn>
        <q-btn flat color="sub-action" padding="0" icon="chat_bubble_outline" label="0"></q-btn>
      </q-card-actions>

      <q-card-section class="feed-time font-semibold border-radius-inherit q-px-none q-py-xs" color="">
        {{ formattedCreatedAt(postItem.created_at) }}
      </q-card-section>

    </q-card>
  </article>

</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const emit = defineEmits(["updatePostItem"])
defineProps({
  postItem: Object
})

const isLoading = ref(false)

async function onLikeHandler(postId) {
  isLoading.value = true
  try {
    const response = await axios.post(`/api/v1/likes/`, { post: postId })
    emit('updatePostItem', response.data)
  } catch (error) {
    console.log(error)
  }
  isLoading.value = false
}

function formattedCreatedAt(createdAt) {
  const parsedDate = new Date(createdAt)

  return `${parsedDate.toLocaleDateString()} ${parsedDate.toLocaleTimeString()}`
}
</script>
<style lang="scss" scoped>
.feed-description {
  font-size: 14px;
  color: #4A4754;
}

.feed-time {
  font-size: 12px;
  color: $secondary-font;
}
</style>