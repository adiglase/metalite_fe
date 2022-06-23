<template>
  <q-list>
    <q-item-label class="q-mb-md list-header" header>Contacts</q-item-label>
    <q-item class="q-mb-sm" clickable v-ripple>
      <q-item-section avatar>
        <q-avatar>
          <img src="~assets/khaby_avatar.jpg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Khaby Lame</q-item-label>
        <q-item-label class="address" caption lines="1">Memphis, TN, US</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon name="o_chat" color="primary"></q-icon>
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple>
      <q-item-section avatar>
        <q-avatar>
          <img src="~assets/khaby_avatar.jpg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Khaby Lame</q-item-label>
        <q-item-label class="address" caption lines="1">Memphis, TN, US</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon name="o_chat" color="primary"></q-icon>
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" clickable v-ripple>
      <q-item-section avatar>
        <q-avatar>
          <img src="~assets/khaby_avatar.jpg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Khaby Lame</q-item-label>
        <q-item-label class="address" caption lines="1">Memphis, TN, US</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon name="o_chat" color="primary"></q-icon>
      </q-item-section>
    </q-item>
    <SectionActionBtn></SectionActionBtn>
  </q-list>
</template>
<script>
// Can't use script setup because bug of quasar if use it together with v-ripple
import SectionActionBtn from "./SectionActionBtn.vue";

export default {
  components: {
    SectionActionBtn
  }
}
</script>
<style lang="scss" scoped>
.list-header {
  padding: 0;
  font-family: "Nunito Bold";
  color: inherit;
  font-size: 16px !important;
}

.q-item__label {
  font-family: "Nunito Bold";
  font-size: 14px;

  &.address {
    font-family: "Nunito SemiBold";
    font-size: 12px;
    color: $secondary-font;
  }
}

.list-action {
  color: $primary;
  font-family: "Nunito Bold";
  text-decoration: none;
  text-align: center;
  display: block;
}
</style>
