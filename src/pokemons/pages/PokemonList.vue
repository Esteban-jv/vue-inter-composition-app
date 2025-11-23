<script setup lang="ts">
    import { getPokemons } from '../helpers/get-pokemons'

    getPokemons().then( console.log )
</script>

<template>
    <div>
        Pokemon List
    </div>
</template>