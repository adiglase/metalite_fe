<template>
  <div class="q-pa-lg">
    <UserDetailBox></UserDetailBox>
    <SectionSeparatorLine></SectionSeparatorLine>
    <NavLinkList></NavLinkList>
    <SectionSeparatorLine></SectionSeparatorLine>
    <ContactItemList></ContactItemList>
  </div>
</template>
<script setup>
import UserDetailBox from "../components/UserDetailBox.vue";
import NavLinkList from "../components/NavLinkList.vue";
import SectionSeparatorLine from "../components/SectionSeparatorLine.vue";
import ContactItemList from "../components/ContactItemList.vue";
</script>
<style lang="scss" scoped>
</style>
