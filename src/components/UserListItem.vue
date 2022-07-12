<template>
  <q-item-section avatar>
    <q-avatar>
      <img :src="userData.image" />
    </q-avatar>
  </q-item-section>
  <q-item-section>
    <q-item-label lines="1">{{ userData.full_name }}</q-item-label>
    <q-item-label class="address" caption lines="1">@{{ userData.username }}</q-item-label>
  </q-item-section>

  <q-item-section side>
    <q-spinner v-if="isLoading" color="primary" size="1em"></q-spinner>
    <q-icon v-else :isLoading="isLoading" class="follow-btn" name="o_person_add" color="primary">
    </q-icon>
  </q-item-section>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router';

defineProps({
  userData: Object
})

const router = useRouter()
const emit = defineEmits(["reFetchSuggestionList"])

const isLoading = ref(false)


// const onFollowUserHandler = async (userId) => {
//   isLoading.value = true
//   try {
//     const response = await axios.post(`/api/v1/follows/`, { following: userId })
//     emit('reFetchSuggestionList')
//     router.push({ name: 'profile', params: { userId: userId } })
//   } catch (error) {
//     console.log(error)
//   }
//   isLoading.value = false
// }
</script>