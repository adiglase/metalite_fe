<template>
  <q-page>
    <article class="index-container">
      <div class="user-detail column items-center">
        <q-avatar size="100px">
          <img :src="profileData.image" />
        </q-avatar>
        <div class="user-name font-extrabold q-mt-sm">{{ profileData.full_name }}</div>
        <div class="username font-semibold">@{{ profileData.username }}</div>

        <q-btn v-if="!profileData.is_current_user" @click="onFollowHandler(profileData.id)" :loading="isLoading" rounded
          padding="12px 24px" class="q-mt-md" size="md" color="action" no-caps
          :label="profileData.is_followed ? 'Unfollow' : 'Follow'"></q-btn>

        <div class="user-stats row q-ma-sm full-width text-center">
          <div class="stat-item col">
            <div class="stat-item-total font-bold text-center">{{ profileData.total_posts }}</div>
            <div class="stat-item-description font-semibold">Posts</div>
          </div>

          <div class="stat-item col">
            <div class="stat-item-total font-bold text-center">{{ profileData.total_followers }}</div>
            <div class="stat-item-description font-semibold">Followers</div>
          </div>

          <div class="stat-item col">
            <div class="stat-item-total font-bold text-center">{{ profileData.total_following }}</div>
            <div class="stat-item-description font-semibold">Following</div>
          </div>
        </div>
      </div>

      <div class="user-posts">
        <div class="row">
          <div v-for="item in profileData.posts" :key="item.id" class="col-xs-12 col-sm-6 col-md-4 post-item"
            @click="onClickPostHandler(item.id)">
            <q-card square class="my-card">
              <q-img :ratio="1 / 1" :src="item.image">
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </article>
  </q-page>
</template>
<script setup>

import { useErrors } from 'src/stores/errors';
import axios from 'axios'
import { onBeforeUnmount, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCurrentUser } from 'src/stores/currentUser.js'

const isLoading = ref(false)

const errors = useErrors()
const route = useRoute()
const router = useRouter()
const { setUserData } = useCurrentUser()

const profileData = ref({})

const fetchProfileData = async (userId) => {
  const errorList = []
  try {
    const response = await axios.get(`/api/v1/user/${userId}/`);
    console.log(response.data)
    profileData.value = response.data
  } catch (error) {
    if (error.response) {
      for (const property in error.response.data) {
        errorList.push(`${property}: ${error.response.data[property]}`);
      }
    } else if (error.message) {
      errorList.push(error.message);
    }
  }

  errors.setErrors(errorList)
}

onMounted(async () => {
  await fetchProfileData(route.params.userId)
})

const watcher = watch(
  () => route.params.userId,
  (newVal, oldVal) => {
    if (route.name == 'profile') fetchProfileData(newVal)
  }
)

onBeforeUnmount(() => {
  watcher()
})

const onClickPostHandler = (postId) => {
  router.push({ name: 'postDetail', params: { postId: postId } })
}

const onFollowHandler = async (userId) => {
  isLoading.value = true
  try {
    const response = await axios.post(`/api/v1/follows/`, { following: userId })
    fetchProfileData(route.params.userId)
    fetchUserData()
  } catch (error) {
    console.log(error)
  }
  isLoading.value = false
}

const fetchUserData = async () => {
  try {
    const response = await axios.get("/api/v1/users/me");
    setUserData(response.data)
  } catch (error) {
    console.log(error)
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  margin: auto;
  padding: 40px;
  max-width: 900px;
}

.user-detail {
  .user-name {
    font-size: 22px;
  }

  .username {
    font-size: 16px;
    color: $secondary-font;
  }

  .stat-item {
    padding: 10px;
  }

  .stat-item-total {
    font-size: 16px;
  }

  .stat-item-description {
    font-size: 12px;
    color: $secondary-font;
  }
}

.post-item {
  cursor: pointer;
  transition: all .8s;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
}
</style>