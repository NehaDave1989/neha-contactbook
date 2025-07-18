<template>
  <el-form @submit.prevent="saveContact">
    <el-form-item label="First Name">
      <el-input v-model="form.fname" required />
    </el-form-item>
    <el-form-item label="Last Name">
      <el-input v-model="form.lname" required />
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="form.email" type="email" required />
    </el-form-item>
    <el-form-item label="State">
      <el-input v-model="form.state" type="text" required />
    </el-form-item>
    <el-form-item label="Country">
      <el-input v-model="form.country" type="text" required />
    </el-form-item>

    <el-button type="success" native-type="submit">Add Contact</el-button>
    <el-button @click="$router.push('/')">Cancel</el-button>
  </el-form>
</template>

<script setup>
import { ref } from 'vue'
import { loadContacts, saveContacts } from '../modules/contactStore'
import { useRouter } from 'vue-router'

const form = ref({
  id: Date.now().toString(),
  fname: '',
  lname: '',
  email: ''
})

const router = useRouter()

function saveContact() {
  const existing = loadContacts()
  existing.push(form.value)
  saveContacts(existing)
  router.push(`/contact/${form.value.id}`)
}
</script>
