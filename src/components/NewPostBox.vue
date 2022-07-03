<template>
  <q-dialog :model-value="isShow" persistent>
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

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup></q-btn>
        <q-btn flat label="Submit" @click="onSubmit"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script setup>
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios'

defineProps({
  isShow: Boolean
})

const $q = useQuasar()
const router = useRouter();

const image = ref(null)
const description = ref("")

const onRejected = (rejectedEntries) => {
  console.log(rejectedEntries)
  $q.notify({
    type: 'negative',
    message: 'File tidak valid/ melebihi batas max ukuran (10MB)'
  })
}

const onSubmit = async () => {
  const formData = new FormData()
  formData.set("image", image.value)
  formData.set("description", description.value)

  try {
    const response = await axios.post("/api/v1/posts/", formData)
    router.push("/")
  } catch (error) {
    console.log(error)
    // if (error.response) {
    //   for (const property in error.response.data) {
    //     errors.value.push(`${property}: ${error.response.data[property]}`);
    //   }
    // } else if (error.message) {
    //   console.error(error.message);
    //   errors.value.push(error.message);
    // }
  }
}
</script>