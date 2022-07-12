<template>
  <q-list>
    <SectionHeaderTitle label="Yang mungkin anda kenal"></SectionHeaderTitle>
    <q-spinner v-if="isFetchingSuggestionList" class="block q-mx-auto" color="primary" size="3em"></q-spinner>

    <q-item @click="onUserClickHandler(user.id)" v-for="user in suggestionList" :key="user.id" class="q-mb-sm"
      clickable>
      <UserListItem @reFetchSuggestionList="fetchSuggestionList" :userData="user"></UserListItem>
    </q-item>
  </q-list>
</template>
<script setup>
import { onMounted, ref } from "vue";
import SectionHeaderTitle from "./SectionHeaderTitle.vue";
import axios from 'axios'
import { useRouter } from 'vue-router'
import UserListItem from 'src/components/UserListItem.vue'

const isFetchingSuggestionList = ref(false)
const suggestionList = ref([])

const router = useRouter()

onMounted(() => {
  fetchSuggestionList()
})

const fetchSuggestionList = async () => {
  isFetchingSuggestionList.value = true
  suggestionList.value = []
  try {
    const response = await axios.get(`api/v1/user/people_user_may_know/`)
    suggestionList.value = response.data
  } catch (error) {
    console.log(error)
  }
  isFetchingSuggestionList.value = false
}

const onUserClickHandler = (userId) => {
  router.push({ name: 'profile', params: { userId: userId } })
}
</script>
<style scoped>
.follow-btn {
  cursor: pointer;
}
</style>