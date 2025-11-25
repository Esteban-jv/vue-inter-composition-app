import { ref, computed, onMounted } from 'vue';
import type { Pokemon } from '../interfaces/pokemon-interface';
import { getPokemons } from '../helpers/get-pokemons';

export const usePokemons = () => {
    
    const pokemons = ref<Pokemon[]>([]);
    const isLoading = ref(true);

    const count = computed(() => pokemons.value.length);

    onMounted(async () => {
        // if( pokemons.value.length === 0 )
        // {
        getPokemons().then((data) => {
            pokemons.value = data;
            isLoading.value = false;
        });
        // }
    });

    return {
        pokemons,
        isLoading,
        count,
    };
};