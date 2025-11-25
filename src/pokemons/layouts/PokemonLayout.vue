<script setup lang="ts">
    import NavBar from '@/shared/components/NavBar.vue';
    import { pokemonRoute } from '../router';
    import type { RouterLink } from '@/router/list-routes';

    const routes: RouterLink[] = pokemonRoute.children?.map(({name, path, props}) => {

        return {
            name: name?.toString() ?? '',
            path: path ?? '',
            title: (props as { title: string }).title as string
        }
    }) || [];

</script>

<template>
    <NavBar :links="routes" :is-secondary="true" />

    <!-- <Suspense> -->
    <RouterView />

    <!-- loading state via #fallback slot -->
    <!-- <template #fallback>
      Loading...
    </template>
  </Suspense> -->
</template>