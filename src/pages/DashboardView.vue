<template>
  <div>
    <el-input v-model="search" placeholder="Search Contacts" clearable class="mb-4" />

    <el-empty description="No contacts available" v-if="filteredList.length === 0" />

    <el-table v-else :data="filteredList" style="width: 100%">
      <el-table-column prop="fname" label="First Name" />
      <el-table-column prop="lname" label="Last Name" />
      <el-table-column prop="email" label="Email" />
      <el-table-column label="Actions">
        <template #default="{ row }">
          <el-button size="small" type="primary" @click="$router.push(`/contact/${row.id}`)">View</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { loadContacts } from '../modules/contactStore'

const search = ref('')
const allRecords = ref(loadContacts())

const filteredList = computed(() => {
  return allRecords.value.filter(p =>
    (p.fname + p.lname).toLowerCase().includes(search.value.toLowerCase())
  ).sort((a, b) => a.lname.localeCompare(b.lname))
})
</script>
