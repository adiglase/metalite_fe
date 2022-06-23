<template>
  <div class="action-container q-mb-lg">
    <q-btn
      flat
      icon="menu"
      padding="10px 0"
      @click="$emit('toggleLeftDrawer')"
    ></q-btn>
    <q-btn
      flat
      icon="menu"
      padding="10px 0"
      @click="$emit('toggleRightDrawer')"
    ></q-btn>
  </div>
  <div class="action-container">
    <div class="search-box q-pr-sm q-mb-md">
      <q-input
        rounded
        outlined
        v-model="searchText"
        label="Search"
        class="full-width"
      >
        <template v-slot:prepend>
          <q-icon name="o_search"></q-icon>
        </template>
      </q-input>
    </div>
    <div class="new-post-box">
      <q-btn
        @click="newPostHandler"
        rounded
        padding="16px 24px"
        class="q-ml-auto"
        size="md"
        color="special"
        no-caps
      >
        <q-icon class="q-mr-sm" name="add"></q-icon>
        New Post
      </q-btn>
    </div>
    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6">New Post</div>
        </q-card-section>

        <q-separator></q-separator>

        <q-card-section style="max-height: 50vh" class="scroll">
          <q-form @submit="onSubmit" class="q-gutter-y-md full-width">
            <q-input
              rounded
              v-model="description"
              type="email"
              label="Email"
              :autofocus="true"
              outlined
            >
              <template v-slot:append>
                <q-icon name="alternate_email"></q-icon>
              </template>
            </q-input>

            <q-btn
              :loading="isLoading"
              rounded
              class="full-width"
              size="18px"
              label="Submit"
              type="submit"
              color="primary"
            >
            </q-btn>
          </q-form>
        </q-card-section>

        <q-separator></q-separator>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup></q-btn>
          <q-btn flat label="Submit" color="primary" v-close-popup></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref } from "vue";

const searchText = ref("");
const emit = defineEmits(["toggleLeftDrawer", "toggleRightDrawer"]);
const fixed = ref(false);

function newPostHandler() {
  fixed.value = true;
}
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