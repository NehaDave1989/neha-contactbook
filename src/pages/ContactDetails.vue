<template>
  <el-card v-if="userData" class="box-card">
    <el-table :data="[userData]" style="width: 100%">
      <el-table-column prop="fname" label="First Name" />
      <el-table-column prop="lname" label="Last Name" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="state" label="State" />
      <el-table-column prop="country" label="Country" />
    </el-table>

    <div class="button-group mt-4">
      <el-button type="primary" @click="navigateToEdit">
        <el-icon><Edit /></el-icon> Edit
      </el-button>
      <el-button type="danger" @click="handleDelete">
        <el-icon><Delete /></el-icon> Delete
      </el-button>
      <el-button type="info" @click="goBack">
        <el-icon><ArrowLeft /></el-icon> Back
      </el-button>
    </div>
  </el-card>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getContactById, loadContacts, saveContacts } from '../modules/contactStore'
import { ElMessageBox, ElMessage } from 'element-plus'
import { Edit, Delete, ArrowLeft } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const userData = ref(null)

onMounted(() => {
  const id = route.params.cid
  userData.value = getContactById(id)
  console.log("safas",userData.value)
})

const navigateToEdit = () => {
  router.push(`/modify/${userData.value.id}`)
}

const handleDelete = () => {
  ElMessageBox.confirm(
    'Are you sure you want to delete this contact?',
    'Warning',
    {
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      const all = loadContacts().filter(p => p.id !== userData.value.id)
      saveContacts(all)
      ElMessage.success('Contact removed successfully.')
      router.push('/')
    })
    .catch(() => {
      ElMessage.info('Deletion cancelled.')
    })
}

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.button-group {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  justify-content: start;
}
</style>
