<script setup lang="ts">
import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import type { Pokemon } from '../interfaces/pokemon-interface';
import { getPokemons } from '../helpers/get-pokemons';

const { isLoading, data:pokemons } = useQuery({
  queryKey: ['pokemons'],
  queryFn: getPokemons,
})
    // import { usePokemons } from '../composables/usePokemons'

    // const { pokemons, isLoading, count } = usePokemons()

    const count = computed(() => pokemons.value?.length ?? 0);
</script>

<template>
    <div>
        <h3>Pokemons ({{ count }})</h3>
    
        <div v-if="isLoading" >Is Loading</div>
        <ul v-else>
            <li v-for="pokemon in pokemons" :key="pokemon.id">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>