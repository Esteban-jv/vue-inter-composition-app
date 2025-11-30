<script setup lang="ts">
  import PokemonCardList from '../components/PokemonCardList.vue';
import { usePokemons } from '../composables/usePokemons';

  const { isLoading, pokemons, count, isError, error } = usePokemons();
</script>

<template>
    <div>
        <h2 v-if="isLoading">Is loading</h2>
        <div v-else-if="isError">
          <span>{{ error }}</span>
        </div>
        <div v-else>
          <h3>Pokemons ({{ count }})</h3>

          <PokemonCardList :pokemons="pokemons ?? []" />
        </div>
    </div>
</template>
