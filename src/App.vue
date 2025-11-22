<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from '@/shared/components/NavBar.vue'
</script>

<template>
  <header>
    <NavBar title="App" />
  </header>

  <RouterView />
</template>

<style scoped></style>
