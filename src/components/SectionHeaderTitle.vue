<template>
  <div class="title font-bold q-mb-sm">
    {{ label }}
  </div>
</template>
<script setup>
defineProps({
  label: String
})
</script>
<style scoped>
.title {
  font-size: 18px;
}
</style>