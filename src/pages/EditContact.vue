<template>
  <CreateEditForm :initialData="targetPerson" isEdit />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { getContactById } from '../modules/contactStore'
import CreateEditForm from '../components/CreateEditForm.vue'

const route = useRoute()
const targetPerson = getContactById(route.params.cid)
</script>
