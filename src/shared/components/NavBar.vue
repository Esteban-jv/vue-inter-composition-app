<script setup lang="ts">
    import { routerLinks } from '@/router/list-routes';
    
    interface Props {
        title?: string;
    }

    withDefaults(defineProps<Props>(), {
        title: 'App'
    });

</script>

<template>
    <nav>
        <img src="https://th.bing.com/th/id/R.ddd5084dff8d7606019645f62c1712c6?rik=RJm8gtkd41am8Q&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpokemon-logo-png-pokemon-logo-png-2000.png&ehk=%2bFdpvqx7Vk1jcWsSaxVIqArQSByK89fRtNQoRFktAhY%3d&risl=&pid=ImgRaw&r=0" alt="Pokemon app logo" width="100" height="40">
        <span v-if="title">{{ title }}</span>
        <RouterLink v-for="router in routerLinks" :key="router.name" :to="router.path">{{ router.title }}</RouterLink>
    </nav>
</template>

<style scoped>
    nav {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 0 1rem;
        width: 100%;
    }

    img {
        margin-right: 1rem;
    }

    span {
        margin-right: 1rem;
    }

    a {
        margin-right: 1rem;
    }

    nav a.router-link-exact-active {
        font-weight: bold;
        text-decoration: underline;
    }

    nav a.router-link-exact-active:hover {
        background-color: transparent;
        color: inherit;
    }

    nav a {
        display: inline-block;
        padding: 0 1rem;
        border-left: 1px solid #ccc;
    }
</style>