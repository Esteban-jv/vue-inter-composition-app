import { computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { getPokemons } from '../helpers/get-pokemons';

export const usePokemons = () => {

    const { isLoading, data:pokemons = [], isError, error } = useQuery({
      queryKey: ['pokemons'],
      queryFn: getPokemons,
    })

    const count = computed(() => pokemons.value?.length || 0 );

    return {
        pokemons,
        isLoading,
        count,
        isError,
        error,
    };
};
