const Types = (pokemons, types) => {
    return pokemons.filter(pokemon => {
        return pokemon.types.some(type => types.includes(type.name.toLowerCase()));
    });
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
    'fire': Types,
    'Existings': Existings,
    'Aggregates': Aggregates
}

export const filterPokemons = (filter, pokemons) => {
    return functions[filter](pokemons)
}