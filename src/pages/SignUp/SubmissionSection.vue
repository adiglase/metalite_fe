<template>
  <div class="container column items-center q-pa-lg">
    <q-icon class="login-icon" name="app_registration"></q-icon>
    <h3 class="block q-mx-auto text-center">Ayo bergabung!</h3>
    <q-form @submit="onSubmit" class="q-gutter-y-md full-width">
      <q-input rounded v-model="input.fullName" type="text" label="Full Name" :autofocus="true" outlined>
        <template v-slot:append>
          <q-icon name="badge"></q-icon>
        </template>
      </q-input>

      <q-input rounded v-model="input.userName" type="text" label="Username" outlined>
        <template v-slot:append>
          <q-icon name="person"></q-icon>
        </template>
      </q-input>

      <q-input rounded v-model="input.email" type="email" label="Email" outlined>
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

      <q-input rounded v-model="input.password2" :type="isPwd ? 'password' : 'text'" label="Confirm Password" outlined>
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd">
          </q-icon>
        </template>
      </q-input>

      <div class="q-gutter-sm">
        <q-radio v-model="input.gender" val="m" label="Male"></q-radio>
        <q-radio v-model="input.gender" val="f" label="Female"></q-radio>
      </div>

      <MessageBox v-if="errors.length" :message="String(errors)" type="danger"></MessageBox>

      <q-btn rounded class="full-width" size="18px" label="Submit" type="submit" color="primary"></q-btn>
      <router-link class="link block q-my-sm font-bold" :to="{ name: 'login' }">Sudah punya akun? Log in disini
      </router-link>

    </q-form>
  </div>
</template>
<script setup>
import MessageBox from "components/MessageBox.vue";

import { ref } from "vue";
import useAuth from "stores/auth.js";

const { signUp, errors } = useAuth()

const isPwd = ref(true);
const input = ref({
  fullName: "",
  userName: "",
  email: "",
  password: "",
  password2: "",
  gender: "m"
});

const onSubmit = () => {
  const formData = {
    full_name: input.value.fullName,
    username: input.value.userName,
    email: input.value.email,
    gender: input.value.gender,
    password: input.value.password,
    re_password: input.value.password2
  }

  signUp(formData)
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