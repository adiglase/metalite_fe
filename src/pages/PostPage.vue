<template>
  <q-page class="q-mt-md">
    <q-spinner v-if="isLoadingPostData" class="block q-mx-auto" color="primary" size="3em"></q-spinner>

    <FeedItemBox v-else-if="postData" :postItem="postData" @updatePostItem="fetchPostDetail">
    </FeedItemBox>

    <q-list class="rounded-borders">
      <q-item-label class="font-bold q-px-none q-py-sm" header>Comments</q-item-label>

      <q-form @submit="onSendCommentHandler" class="q-my-md">
        <q-input outlined bottom-slots v-model="inputComment" label="Comment" counter maxlength="500" dense>
          <template v-slot:before>
            <q-avatar>
              <img :src="userData.image">
            </q-avatar>
          </template>

          <template v-slot:append>
            <q-icon v-if="inputComment !== ''" name="close" @click="inputComment = ''" class="cursor-pointer"></q-icon>
            <!-- <q-icon name="textsms"></q-icon> -->
          </template>

          <!-- <template v-slot:hint>
            Field hint
          </template> -->

          <template v-slot:after>
            <q-btn @click="onSendCommentHandler" :loading="isSendingComment" round dense flat icon="send"></q-btn>
          </template>
        </q-input>
      </q-form>

      <q-spinner v-if="isLoadingComments" class="block q-mx-auto" color="primary" size="3em"></q-spinner>
      <div v-else>
        <q-item v-for="comment in commentsData" :key="comment.id" class="q-px-none q-py-sm">
          <q-item-section avatar>
            <q-avatar>
              <img :src="comment.user_detail.image">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label><span class="font-bold">{{ comment.user_detail.full_name }}</span> <span
                class="text-caption">@{{ comment.user_detail.username }}</span>
            </q-item-label>
            <q-item-label caption>{{ comment.description }}
            </q-item-label>
            <span class="q-mt-sm created-date">
              {{ formattedCreatedAt(comment.created_at) }}
            </span>
          </q-item-section>

        </q-item>
      </div>
    </q-list>
  </q-page>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import FeedItemBox from 'src/components/FeedItemBox.vue';
import { useCurrentUser } from 'src/stores/currentUser.js'
import { storeToRefs } from 'pinia';


const isLoadingPostData = ref(false)
const isLoadingComments = ref(false)
const isSendingComment = ref(false)
const postData = ref(null)
const commentsData = ref(null)
const inputComment = ref("")

const route = useRoute()
const postId = route.params.postId

const currentUserStore = useCurrentUser()
const { userData } = storeToRefs(currentUserStore)

onMounted(async () => {
  await fetchPostDetail()
  await fetchComments()
})

const fetchPostDetail = async () => {
  isLoadingPostData.value = true
  try {
    const response = await axios.get(`api/v1/posts/${postId}/`)
    console.log(response.data)
    postData.value = response.data
  } catch (error) {
    console.log(error)
  }
  isLoadingPostData.value = false
}

const fetchComments = async () => {
  isLoadingComments.value = true
  try {
    const response = await axios.get(`api/v1/posts/${postId}/comments/`)
    console.log(response.data, 'comments')
    commentsData.value = response.data
  } catch (error) {
    console.log(error)
  }
  isLoadingComments.value = false
}

const onSendCommentHandler = async () => {
  isSendingComment.value = true

  const commentFormData = {
    description: inputComment.value,
    post: postId
  }

  try {
    const response = await axios.post(`api/v1/comments/`, commentFormData)
    fetchComments()
  } catch (error) {
    console.log(error)
  }

  inputComment.value = ""
  isSendingComment.value = false
}

function formattedCreatedAt(createdAt) {
  const parsedDate = new Date(createdAt)

  return `${parsedDate.toLocaleDateString()} ${parsedDate.toLocaleTimeString()}`
}
</script>
<style lang="scss" scoped>
.created-date {
  font-size: 11px;
  color: $sub-action;
}
</style>