<template>
  <q-dialog :model-value="modelValue" persistent>
    <q-card style="width: 500px; min-width: 350px">

      <q-card-section>
        <div class="text-h6">New Post</div>
      </q-card-section>

      <q-card-section>
        <q-form class="q-gutter-lg">
          <q-file @rejected="onRejected" dense clearable color="orange" bottom-slots v-model="image" label="Image"
            counter max-file-size="1048576" accept=".jpg, image/*">
            <template v-slot:prepend>
              <q-icon name="image"></q-icon>
            </template>
          </q-file>

          <q-input dense type="textarea" label="Description" outlined v-model="description" maxlength="1000" counter>
          </q-input>
        </q-form>
      </q-card-section>

      <q-card-section>
        <MessageBox v-if="errors.length" :message="String(errors)" type="danger"></MessageBox>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" @click="onCancel"></q-btn>
        <q-btn flat label="Submit" :loading="isLoading" @click="onSubmit"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import MessageBox from "components/MessageBox.vue"
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';
import { useErrors } from "src/stores/errors.js";
import axios from 'axios'

defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue', 'fetchPosts'])

const isLoading = ref(false)
const $q = useQuasar()
const router = useRouter();
const image = ref(null)
const description = ref("")

const { errors, setErrors } = useErrors()

onMounted(() => {
  console.log('on mountedddddd')
})
onUnmounted(() => {
  console.log('on onmounteddd')
})

const onRejected = (rejectedEntries) => {
  $q.notify({
    type: 'negative',
    message: 'File tidak valid/ melebihi batas max ukuran (10MB)'
  })
}

const onSubmit = async () => {
  isLoading.value = true
  const formData = new FormData()
  formData.set("image", image.value)
  formData.set("description", description.value)

  try {
    await axios.post("/api/v1/posts/", formData)
    emit('fetchPosts')
    router.push("/")
  } catch (error) {
    setErrors(error.message)
  }

  isLoading.value = false

  // reset state
  image.value = null
  description.value = ""
  emit('update:modelValue', false)
}

const onCancel = () => {
  // reset state
  image.value = null
  description.value = ""

  emit('update:modelValue', false)
}
</script>