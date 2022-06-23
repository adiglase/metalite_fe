<template>
  <q-layout>
    <q-page-container class="row window-height">
      <div class="col-xs-12 col-md-6 gt-sm">
        <router-view class="bg-primary flex flex-center window-height" name="WelcomeSection"></router-view>
      </div>
      <div class="col-xs-12 col-md-6 column items-center justify-center window-height">
        <router-view name="SubmissionSection">
        </router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>
<style scoped lang="scss">
</style>