<template>
  <div :class="{ 'bg-negative': type === 'danger' }" class="text-white q-pa-md rounded-borders">{{ message }}</div>
</template>
<script setup>
defineProps({
  message: String,
  type: {
    validator(value) {
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
})
</script>