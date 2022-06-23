<template>
  <article class="user-detail column items-center">
    <q-avatar size="80px">
      <img src="~assets/khaby_avatar.jpg" />
    </q-avatar>
    <div class="user-name font-extrabold q-mt-sm">{{ fullName }}</div>
    <div class="user-address font-semibold">----------------</div>
    <div class="user-stats row q-ma-sm full-width text-center">
      <div class="stat-item col">
        <div class="stat-item-total font-bold text-center">0</div>
        <div class="stat-item-description font-semibold">Posts</div>
      </div>

      <div class="stat-item col">
        <div class="stat-item-total font-bold text-center">0</div>
        <div class="stat-item-description font-semibold">Followers</div>
      </div>

      <div class="stat-item col">
        <div class="stat-item-total font-bold text-center">0</div>
        <div class="stat-item-description font-semibold">Following</div>
      </div>
    </div>
  </article>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const fullName = ref("")


onMounted(async () => {
  const response = await axios.get("/api/v1/users/me");

  fullName.value = response.data.full_name
})
</script>
<style lang="scss" scoped>
.user-name {
  font-size: 18px;
}

.user-address {
  font-size: 12px;
  color: $secondary-font;
}

.stat-item {
  padding: 10px;
}

.stat-item-total {
  font-size: 18px;
}

.stat-item-description {
  font-size: 12px;
  color: $secondary-font;
}
</style>
