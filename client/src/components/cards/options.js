export const setOrder = (order, pokemons) => {
    if (order === 'a-z') {
        return pokemons.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
    }
    
    if (order === 'z-a') {
        return pokemons.sort((a, b) => {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
            return 0;
        })
    }
    
    if (order === 'attack:asc-desc') {
        return pokemons.sort((a, b) => {
            return b.attack - a.attack
        })
    }
    
    if (order === 'attack:desc-asc') {
        return pokemons.sort((a, b) => {
            return a.attack - b.attack
        })
    }

    // switch (order) {
        // case 'A - Z':
            // return pokemons.sort((a, b) => {
            //     if (a.name < b.name) {
            //         return -1;
            //     }
            //     if (a.name > b.name) {
            //         return 1;
            //     }
            //     return 0;
            // })
        // case 'Z - A':
        //     return pokemons.sort((a, b) => {
        //         if (a.name > b.name) {
        //             return -1;
        //         }
        //         if (a.name < b.name) {
        //             return 1;
        //         }
        //         return 0;
        //     })
    //     case 'rating:asc-desc':
            // return pokemons.sort((a, b) => {
            //     return b.attack - a.attack
            // })
    //     case 'rating:desc-asc':
    //         return pokemons.sort((a, b) => {
    //             return a.attack - b.attack
    //         })
    //     default: break;
    // }
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
