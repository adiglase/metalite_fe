<template>
  <article class="user-detail column items-center">
    <q-avatar size="80px">
      <img src="~assets/dummy_profile_image.svg" />
    </q-avatar>
    <div class="user-name font-extrabold q-mt-sm">{{ userData.full_name }}</div>
    <div class="username font-semibold">@{{ userData.username }}</div>
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
import { useCurrentUser } from 'src/stores/currentUser.js'
const { userData } = useCurrentUser()


</script>
<style lang="scss" scoped>
.user-name {
  font-size: 18px;
}

.username {
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
