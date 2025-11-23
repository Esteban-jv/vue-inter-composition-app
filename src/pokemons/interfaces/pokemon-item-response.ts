export interface PokemonItemResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonListResponse[];
}

export interface PokemonListResponse {
    name: string;
    url:  string;
}
