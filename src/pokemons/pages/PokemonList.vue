<script setup lang="ts">
  import { usePokemons } from '../composables/usePokemons';

  const { isLoading, pokemons, count } = usePokemons();
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
