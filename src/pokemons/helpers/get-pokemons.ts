import axios from 'axios'
import pokemonApi from '../api/pokemonApi'
import type { Pokemon, PokemonItemResponse, PokemonResponse } from '../interfaces'
import { sleep } from './sleep'

/**
 * Get and cast a list of Pokemons into own Pokemon interface
 * @returns clean pokemon list
 */
export const getPokemons = async (): Promise<Pokemon[]> => {

    await sleep(2) // Simulate delay
    
    const pokemonPromises: Promise<Pokemon>[] = []
    const { data } = await pokemonApi.get<PokemonItemResponse>('/pokemon?limit=5')

    for (const { url } of data.results) {

        // Fetch each pokemon data into PokemonResponse and map it to Pokemon interface
        const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
            return {
                id:           data.id,
                name:         data.name,
                frontSprites: data.sprites.front_default,
            }
        })

        pokemonPromises.push(pokemonPromise)
    }

    // Await all promises to resolve
    const pokemons = await Promise.all(pokemonPromises)

    return pokemons
}
    