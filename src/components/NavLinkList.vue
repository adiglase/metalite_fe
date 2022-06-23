<template>
  <article>
    <q-list>
      <q-item active-class="active-nav" active clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar size="40px" icon="o_cottage" class="nav-icon font-extrabold"></q-avatar>
        </q-item-section>
        <q-item-section>Feed</q-item-section>
      </q-item>

      <q-item active-class="active-nav" clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar size="40px" icon="o_widgets" class="nav-icon font-extrabold"></q-avatar>
        </q-item-section>
        <q-item-section>Explore</q-item-section>
      </q-item>

      <q-item active-class="active-nav" clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar size="40px" icon="o_chat" class="nav-icon font-extrabold"></q-avatar>
        </q-item-section>
        <q-item-section>Direct</q-item-section>
      </q-item>

      <q-item active-class="active-nav" clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar size="40px" icon="o_account_circle" class="nav-icon font-extrabold"></q-avatar>
        </q-item-section>
        <q-item-section>Profile</q-item-section>
      </q-item>

      <q-item active-class="active-nav" @click="logout" clickable v-ripple>
        <q-item-section avatar top>
          <q-avatar size="40px" icon="o_logout" class="nav-icon font-extrabold"></q-avatar>
        </q-item-section>
        <q-item-section>Logout</q-item-section>
      </q-item>

    </q-list>
  </article>
</template>
<script>
import useAuth from 'src/stores/auth'

export default {
  setup() {
    const { logout } = useAuth()
    return {
      logout
    }
  }
}
</script>
<style scoped lang="scss">
.q-item {
  font-family: "Nunito Bold";
  font-size: 14px;
  padding-left: 0px;
  padding-right: 0px;
}

.nav-icon {
  color: #a5a3a9;
}

.active-nav {
  color: $primary;

  .nav-icon {
    color: $primary;
  }
}
</style>
