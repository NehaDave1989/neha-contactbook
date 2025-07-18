<template>
  <el-form @submit.prevent="submitForm">
    <el-form-item label="First Name">
      <el-input v-model="model.fname" required />
    </el-form-item>
    <el-form-item label="Last Name">
      <el-input v-model="model.lname" required />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="model.email" required type="email" />
    </el-form-item>
    <el-form-item label="State">
      <el-input v-model="model.state" required type="text" />
    </el-form-item>
    <el-form-item label="Country">
      <el-input v-model="model.country" required type="text" />
    </el-form-item>

    <el-button type="primary" native-type="submit">
      {{ isEdit ? 'Update' : 'Create' }}
    </el-button>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loadContacts, saveContacts } from '../modules/contactStore'

const props = defineProps({
  initialData: Object,
  isEdit: Boolean
})

const model = ref({ ...props.initialData })
const router = useRouter()

function submitForm() {
  const list = loadContacts()

  if (props.isEdit) {
    const index = list.findIndex(p => p.id === model.value.id)
    list[index] = model.value
  } else {
    list.push(model.value)
  }

  saveContacts(list)
  router.push(`/contact/${model.value.id}`)
}
</script>
