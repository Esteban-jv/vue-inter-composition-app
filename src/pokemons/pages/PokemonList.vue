<script setup lang="ts">
    import pokemonApi from '../api/pokemonApi'
    import type { PokemonItemResponse } from '../interfaces/pokemon-item-response'

    const getPokemons = async () => {
        const { data } = await pokemonApi.get<PokemonItemResponse>('/pokemon?limit=10')
        console.log(data.results)
    }

    getPokemons()
</script>

<template>
    <div>
        Pokemon List
    </div>
</template>