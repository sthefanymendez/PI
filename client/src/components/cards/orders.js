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
        return b.attack - a.attack
    })
}

const Desc = (pokemons) => {
    return pokemons.sort((a, b) => {
        return a.attack - b.attack
    })
}

const functions = {
    'A-Z':A_Z,
    'Z-A':Z_A,
    'Attack: Max-Min': Asc,
    'Attack: Min-Max': Desc
}

export const arrange = (order, pokemons) => {
    return functions[order](pokemons)
}
