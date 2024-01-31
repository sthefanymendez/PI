const Types = (filter, pokemons) => {
    return pokemons.filter(pokemon => {
        return pokemon.types.some(type => type.name === filter)
    })
}

const Existings = (pokemons) => {
    return pokemons.sort(
        (a, b) => a.existing.localeCompare(b.existing)
    );
}

const Aggregates = (pokemons) => {
    return pokemons.sort(
        (a, b) => a.add.localeCompare(b.add)
    );
}

const functions = {
    'Existings': Existings,
    'Aggregates': Aggregates
}

export const setFilter = (filter, pokemons) => {
    if (filter === 'Existings' || filter === 'Aggregates') return functions[filter](pokemons)
    return Types(filter, pokemons)
}