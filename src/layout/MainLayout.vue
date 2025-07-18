<template>
  <div>
    <NavBar />
    <main class="p-4">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>
