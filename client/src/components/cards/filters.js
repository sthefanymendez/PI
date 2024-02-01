export const setFilter = (filter, pokemons) => {
    return pokemons.filter(pokemon => {
        return pokemon.types.some(type => type.name === filter)
    })
}
