<template>
  <q-page>
    <article class="index-container">
      <HeaderActionBox @toggleRightDrawer="$emit('toggleRightDrawer')" @toggleLeftDrawer="$emit('toggleLeftDrawer')">
      </HeaderActionBox>
      <FeedListBox></FeedListBox>
    </article>
  </q-page>
</template>
<script setup>
import HeaderActionBox from "../components/HeaderActionBox.vue"
import FeedListBox from "../components/FeedListBox.vue"

</script>
<style scoped>
.index-container {
  margin: auto;
  padding: 40px;
  max-width: 900px;
}
</style>