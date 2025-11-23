<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from '@/shared/components/NavBar.vue'
  import { routerLinks } from '@/router/list-routes'
</script>

<template>
  <header>
    <NavBar :links="routerLinks" />
  </header>

  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped></style>
