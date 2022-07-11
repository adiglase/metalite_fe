<template>
  <div class="container column items-center q-pa-lg">
    <q-icon class="login-icon" name="app_registration"></q-icon>
    <h3 class="block q-mx-auto text-center">Ayo bergabung!</h3>
    <q-form @submit="onSubmit" class="q-gutter-y-md full-width">
      <q-file rounded outlined :rules="[val => !!val || 'Field is required']" @rejected="onRejected" clearable
        color="orange" bottom-slots v-model="input.image" label="Profile Image" counter max-file-size="10485760"
        accept=".jpg, image/*">
        <template v-slot:append>
          <q-icon name="image"></q-icon>
        </template>
      </q-file>

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

      <q-btn :loading="isLoading" rounded class="full-width" size="18px" label="Submit" type="submit" color="primary">
      </q-btn>
      <router-link class="link block q-my-sm font-bold" :to="{ name: 'login' }">Sudah punya akun? Log in disini
      </router-link>

    </q-form>
  </div>
</template>
<script setup>
import MessageBox from "components/MessageBox.vue";
import { ref } from "vue";
import AuthService from "src/services/AuthService.js";
import { useErrors } from "src/stores/errors.js";

const { signUp } = AuthService()
const { errors } = useErrors()

const isPwd = ref(true);
const input = ref({
  image: null,
  fullName: "",
  userName: "",
  email: "",
  password: "",
  password2: "",
  gender: "m"
});
const isLoading = ref(false)

const onRejected = (rejectedEntries) => {
  $q.notify({
    type: 'negative',
    message: 'File tidak valid/ melebihi batas max ukuran (10MB)'
  })
}

const onSubmit = () => {
  isLoading.value = true
  const formData = new FormData()
  formData.set("image", input.value.image)
  formData.set("full_name", input.value.fullName)
  formData.set("username", input.value.userName)
  formData.set("email", input.value.email)
  formData.set("gender", input.value.gender)
  formData.set("password", input.value.password)
  formData.set("re_password", input.value.password2)

  signUp(formData)
  isLoading.value = false
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