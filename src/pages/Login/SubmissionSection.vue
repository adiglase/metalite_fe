<template>
  <div class="container column items-center q-pa-lg">
    <q-icon class="login-icon" name="login"></q-icon>
    <h3 class="block q-mx-auto text-center">Selamat Datang kembali!</h3>
    <q-form @submit="onSubmit" class="q-gutter-y-md full-width">
      <q-input rounded v-model="input.email" type="email" label="Email" :autofocus="true" outlined>
        <template v-slot:append>
          <q-icon name="alternate_email"></q-icon>
        </template>
      </q-input>

      <q-input rounded v-model="input.password" :type="isPwd ? 'password' : 'text'" label="Password" outlined>
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd">
          </q-icon>
        </template>
      </q-input>

      <MessageBox v-if="errors.length" :message="String(errors)" type="danger"></MessageBox>

      <q-btn :loading="isLoading" rounded class="full-width" size="18px" label="Submit" type="submit" color="primary">
      </q-btn>

      <router-link class="link block q-my-sm font-bold" :to="{ name: 'signup' }">Belum punya akun? Daftar disini
      </router-link>
    </q-form>
  </div>
</template>
<script setup>
import MessageBox from "components/MessageBox.vue"

import { ref } from "vue"
import AuthService from "src/services/AuthService.js"
import { useErrors } from "src/stores/errors.js";

const isPwd = ref(true)
const isLoading = ref(false)
const input = ref({
  email: "",
  password: "",
});

const { errors } = useErrors()

function onSubmit() {
  const formData = {
    email: input.value.email,
    password: input.value.password
  }

  const { login } = AuthService()

  login(formData)
}
</script>
<style lang="scss" scoped>
.container {
  width: 85%;

  @media (max-width: $breakpoint-xs-max) {
    width: 100%;
  }

}

h3 {
  font-size: 40px;
}

.login-icon {
  font-size: 60px;
}

.link {
  text-decoration: none;
  font-size: 14px;
}
</style>