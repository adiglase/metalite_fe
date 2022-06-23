<template>
  <q-layout view="lHr lpR lfr">
    <q-drawer bordered v-model="leftDrawerOpen" side="left" :width="300" class="left-side">
      <LeftColumnPage></LeftColumnPage>
    </q-drawer>

    <q-drawer bordered v-model="rightDrawerOpen" :width="300" side="right">
      <RightColumnPage></RightColumnPage>
    </q-drawer>
    <q-page-container>
      <router-view @toggleRightDrawer="toggleRightDrawer" @toggleLeftDrawer="toggleLeftDrawer" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";
import LeftColumnPage from "../pages/LeftColumnPage.vue";
import RightColumnPage from "../pages/RightColumnPage.vue";

const $q = useQuasar()
const windowWidth = ref($q.screen.width)
const leftDrawerOpen = ref(windowWidth.value > 1023);
const rightDrawerOpen = ref(windowWidth.value > 1023);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
function toggleRightDrawer() {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}
</script>
<style lang="scss" scoped>
.q-layout {
  color: $primary-font;
}

.drawer-container {
  padding: 40px 0;
}

ul {
  list-style: none;
}

.contacts {
  font-size: 16px;
}

.contact-container {
  padding: 0 40px;
}

.contact-item {
  padding: 14px 0;
}

.contact-avatar {
  margin-right: 14px;
}

.contact-detail-address {
  font-size: 12px;
}
</style>
