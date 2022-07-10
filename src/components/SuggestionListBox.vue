<template>
  <q-list>
    <SectionHeaderTitle label="People You May Know"></SectionHeaderTitle>

    <q-item class="q-mb-sm" v-ripple>
      <q-item-section avatar>
        <q-avatar>
          <img src="~assets/dummy_profile_image.svg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Khaby Lame</q-item-label>
        <q-item-label class="address" caption lines="1">Memphis, TN, US</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon name="o_person_add" color="primary"></q-icon>
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" v-ripple>
      <q-item-section avatar>
        <q-avatar>
          <img src="~assets/dummy_profile_image.svg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Khaby Lame</q-item-label>
        <q-item-label class="address" caption lines="1">Memphis, TN, US</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon name="o_person_add" color="primary"></q-icon>
      </q-item-section>
    </q-item>

    <q-item class="q-mb-sm" v-ripple>
      <q-item-section avatar>
        <q-avatar>
          <img src="~assets/dummy_profile_image.svg" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>Khaby Lame</q-item-label>
        <q-item-label class="address" caption lines="1">Memphis, TN, US</q-item-label>
      </q-item-section>

      <q-item-section side>
        <q-icon name="o_person_add" color="primary"></q-icon>
      </q-item-section>
    </q-item>
    <SectionActionBtn></SectionActionBtn>
  </q-list>
</template>
<script>
// Can't use script setup because bug of quasar if use it together with v-ripple
import SectionHeaderTitle from "./SectionHeaderTitle.vue";
import SectionActionBtn from "./SectionActionBtn.vue"

export default {
  components: {
    SectionHeaderTitle,
    SectionActionBtn
  }
}
</script>