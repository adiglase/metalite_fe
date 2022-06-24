<template>
  <div class="action-container q-mb-lg">
    <q-btn flat icon="menu" padding="10px 0" @click="$emit('toggleLeftDrawer')"></q-btn>
    <q-btn flat icon="menu" padding="10px 0" @click="$emit('toggleRightDrawer')"></q-btn>
  </div>
  <div class="action-container">
    <div class="search-box q-pr-sm q-mb-md">
      <q-input rounded outlined v-model="searchText" label="Search" class="full-width">
        <template v-slot:prepend>
          <q-icon name="o_search"></q-icon>
        </template>
      </q-input>
    </div>
    <div class="new-post-box">
      <q-btn @click="isShowNewPostBox = true" rounded padding="16px 24px" class="q-ml-auto" size="md" color="special"
        no-caps>
        <q-icon class="q-mr-sm" name="add"></q-icon>
        New Post
      </q-btn>
    </div>
    <NewPostBox :isShow="isShowNewPostBox"></NewPostBox>
  </div>
</template>
<script setup>
import { ref } from "vue";
import NewPostBox from "./NewPostBox.vue";

const searchText = ref("");
const emit = defineEmits(["toggleLeftDrawer", "toggleRightDrawer"]);
const isShowNewPostBox = ref(false);

</script>
<style lang="scss" scoped>
.action-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .q-btn {
    font-size: 20px;
  }

  .search-box {
    flex-basis: 320px;
  }
}
</style>