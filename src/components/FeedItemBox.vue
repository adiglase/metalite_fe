<template>
  <article class="q-my-lg">
    <q-card flat class="col">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="user-full-name font-bold">Khaby Lame</q-item-label>
          <q-item-label class="username" caption>
            @khaby_001
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="more_horiz" class="feed-option" color="primary-font"></q-icon>
        </q-item-section>
      </q-item>

      <q-separator></q-separator>

      <q-img
        src="https://images.unsplash.com/photo-1654255502816-aaf46d417767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="" :ratio="4 / 3"></q-img>

      <q-card-section
        class="feed-description font-semibold text-justify border-radius-inherit q-mt-sm q-px-none q-py-xs">
        While Corfu give us the ability to shoot by the sea with amazing blue background full of light of the sky,
        Florina give us its gentle side. The humble atmosphere and Light of Florina which comes... read more
      </q-card-section>

      <q-card-actions class="q-my-xs q-pa-none">
        <q-btn flat color="sub-action" padding="0" icon="favorite_outline" label="873" class="q-mr-md"></q-btn>
        <q-btn flat color="sub-action" padding="0" icon="chat_bubble_outline" label="0"></q-btn>
      </q-card-actions>

      <q-card-section class="feed-time font-semibold border-radius-inherit q-px-none q-py-xs" color="">
        02/30/2021
      </q-card-section>

    </q-card>
  </article>

</template>
<style lang="scss" scoped>
.feed-description {
  font-size: 14px;
  color: #4A4754;
}

.feed-time {
  font-size: 12px;
  color: $secondary-font;
}
</style>