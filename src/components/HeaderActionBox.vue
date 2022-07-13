<template>
  <div class="action-container q-mb-lg">
    <q-btn flat icon="menu" padding="10px 0" @click="$emit('toggleLeftDrawer')"></q-btn>
    <q-btn flat icon="menu" padding="10px 0" @click="$emit('toggleRightDrawer')"></q-btn>
  </div>
  <div class="action-container">
    <div class="search-box q-pr-sm q-mb-md">
      <q-select class="full-width" :options="options" rounded outlined v-model="model" use-input hide-selected
        input-debounce="0" label="Search user" @filter="filterFn">
        <template v-slot:append>
          <q-icon name="o_search"></q-icon>
        </template>
        <template v-slot:no-option>
          <q-item rounded>
            <q-item-section class="text-italic text-grey">
              Tidak ditemukan
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:option="scope">
          <q-item @click="onUserItemClick(scope.opt.id)" v-bind="scope.itemProps">
            <q-item-section avatar>
              <q-img :src="scope.opt.image"></q-img>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ scope.opt.full_name }}</q-item-label>
              <q-item-label caption>{{ scope.opt.username }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
    <div class="new-post-box">
      <q-btn @click="isShowNewPostBox = true" rounded padding="16px 24px" class="q-ml-auto" size="md" color="special"
        no-caps>
        <q-icon class="q-mr-sm" name="add"></q-icon>
        New Post
      </q-btn>
    </div>
    <NewPostBox v-model="isShowNewPostBox" @fetchPosts="$emit('fetchPosts')"></NewPostBox>
  </div>
</template>
<script setup>
import { ref } from "vue";
import NewPostBox from "./NewPostBox.vue";
import axios from 'axios'
import { useRouter } from "vue-router";

const emit = defineEmits(["toggleLeftDrawer", "toggleRightDrawer", "fetchPosts"]);
const router = useRouter()

const options = ref(null)
const model = ref(null)
const isShowNewPostBox = ref(false);


const filterFn = async (val, update, abort) => {
  if (val) {
    update(async () => {
      if (val) {
        const response = await axios.post('/api/v1/user/search/', { userIdentity: val })
        console.log(response.data)
        options.value = response.data
      }
    })
  } else {
    update(() => {
      options.value = []
    })
  }
}

const onUserItemClick = (userId) => {
  router.push({ name: 'profile', params: { userId: userId } })
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