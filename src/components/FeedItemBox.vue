<template>
  <article class="q-my-lg">
    <q-card flat class="col">
      <q-item class="user-detail">
        <q-item-section avatar>
          <q-avatar>
            <img :src="postItem.user_image">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <router-link style="text-decoration: none; color: inherit;"
            :to="{ name: 'profile', params: { userId: postItem.user_id } }">
            <q-item-label class="user-full-name font-bold">{{ postItem.user_full_name }}</q-item-label>
            <q-item-label class="username" caption>
              @{{ postItem.user_username }}
            </q-item-label>
          </router-link>
        </q-item-section>
        <q-item-section v-if="userData.id === postItem.user_id" side>
          <q-btn :loading="isDeleting" flat>
            <q-icon name="more_horiz" class="feed-option" color="primary-font"></q-icon>
            <q-menu>
              <q-list>
                <q-item clickable v-close-popup @click="onDeletePostHandler(postItem.id)">
                  <q-item-section>Delete Post</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </q-item-section>
      </q-item>

      <q-separator></q-separator>

      <q-img :src="postItem.image" alt=""></q-img>

      <q-card-section
        class="feed-description font-semibold text-justify border-radius-inherit q-mt-sm q-px-none q-py-xs">
        {{ postItem.description }}
      </q-card-section>

      <q-card-actions class="q-my-xs q-pa-none">
        <q-btn flat :color="postItem.is_liked ? 'negative' : 'sub-action'" @click="onLikeHandler(postItem.id)"
          padding="0" :icon="postItem.is_liked ? 'favorite' : 'favorite_outline'" :loading="isLoading"
          :label="postItem.total_likes" class="q-mr-md"></q-btn>
        <q-btn @click="onClickCommentHandler(postItem.id)" flat color="sub-action" padding="0"
          icon="chat_bubble_outline" :label="postItem.total_comments"></q-btn>
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
import { useRouter } from 'vue-router';
import { useCurrentUser } from 'src/stores/currentUser.js'
import { storeToRefs } from 'pinia';

const router = useRouter()
const currentUserStore = useCurrentUser()
const { userData } = storeToRefs(currentUserStore)
const emit = defineEmits(["updatePostItem"])
defineProps({
  postItem: Object
})

const isLoading = ref(false)
const isDeleting = ref(false)

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

function onClickCommentHandler(id) {
  router.push({
    name: 'postDetail', params: {
      postId: id
    }
  })
}

async function onDeletePostHandler(postId) {
  isDeleting.value = true
  try {
    const response = await axios.delete(`/api/v1/posts/${postId}/`)
    location.reload()
  } catch (error) {
    console.log(error)
  }
  isDeleting.value = false
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