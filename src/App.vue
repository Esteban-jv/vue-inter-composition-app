<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavBar from '@/shared/components/NavBar.vue'
  import { routerLinks } from '@/router/list-routes'
</script>

<template>
  <header>
    <NavBar :links="routerLinks" />
  </header>

  <Suspense>
    <RouterView />

    <!-- loading state via #fallback slot -->
    <template #fallback>
      Loading... <!-- Esto funciona cuando quiere -->
    </template>
  </Suspense>
</template>

<style scoped></style>
