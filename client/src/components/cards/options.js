export const setSort = (sort, pokemons) => {
    switch (sort) {
        case 'A - Z':
            return pokemons.sort((a, b) => {
                return a.name.localCompare(b.name);
            })
        case 'Z - A':
            return pokemons.sort((a, b) => {
                return b.name.localCompare(a.name);
            })
        case 'Rating: Asc - Desc':
            return pokemons.sort((a, b) => {
                return b.attack - a.attack
            })
        case 'Rating: Desc - Asc':
            return pokemons.sort((a, b) => {
                return a.attack - b.attack
            })
        default: break;
    }
}

export const setFilters = (filters, pokemons) => {
    const data = []
    
    for (const pokemon of pokemons) {
        for (const type of pokemon.types) {
            if (filters.includes(type.name) && !data.includes(pokemon)) data.push(pokemon)
        }
    }

    return data
}
