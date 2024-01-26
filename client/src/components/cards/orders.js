const A_Z = (pokemons) => {
    return pokemons.sort((a, b) => {
        return a.name.localeCompare(b.name);
    })
}

const Z_A = (pokemons) => {
    return pokemons.sort((a, b) => {
        return b.name.localeCompare(a.name);
    })
}

const Asc = (pokemons) => {
    return pokemons.sort((a, b) => {
        return b.rating - a.rating
    })
}

const Desc = (pokemons) => {
    return pokemons.sort((a, b) => {
        return a.rating - b.rating
    })
}

const functions = {
    'A-Z':A_Z,
    'Z-A':Z_A,
    'Rating: Major-Minor': Asc,
    'Rating: Minor-Major': Desc,
}

export const arrange = (order, pokemons) => {
    return functions[order](pokemons)
}
