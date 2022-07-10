<template>
  <div class="adi">
    <SectionHeaderTitle label="Notifications"></SectionHeaderTitle>
    <q-list>
      <q-item class="q-mb-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="~assets/dummy_profile_image.svg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <span class="corresponding-user-name font-bold">Khaby</span>
            <span class="action-description font-semibold"> started following you</span>
          </q-item-label>
          <q-item-label>
            <span class="time font-semibold">
              12/12/2022 01:32:32
            </span>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item class="q-mb-sm" clickable v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="~assets/dummy_profile_image.svg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            <span class="corresponding-user-name font-bold">Khaby</span>
            <span class="action-description font-semibold"> likes your post</span>
          </q-item-label>
          <q-item-label>
            <span class="time font-semibold">
              12/12/2022 01:32:32
            </span>
          </q-item-label>
        </q-item-section>
      </q-item>
      <SectionActionBtn></SectionActionBtn>
    </q-list>
  </div>
</template>
<script>
// Can't use script setup because bug of quasar if use it together with v-ripple
import SectionHeaderTitle from "../components/SectionHeaderTitle.vue";
import SectionActionBtn from "./SectionActionBtn.vue";

export default {
  components: {
    SectionHeaderTitle,
    SectionActionBtn
  }
}
</script>
<style lang="scss" scoped>
.follower-name {
  color: $primary-font;
}

.action-description,
.time {
  color: $sub-action;
}

.time {
  font-size: 10px;
}
</style>