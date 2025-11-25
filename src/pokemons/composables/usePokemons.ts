import { ref, computed, onMounted } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import type { Pokemon } from '../interfaces/pokemon-interface';
import { getPokemons } from '../helpers/get-pokemons';

const { isLoading, data:pokemons } = useQuery({
  queryKey: ['pokemons'],
  queryFn: getPokemons,
})
// export const usePokemons = () => {
    
    

//     return {
//         pokemons,
//         isLoading,
//         count,
//     };
// };