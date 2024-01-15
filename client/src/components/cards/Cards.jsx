import React from "react"
import { useSelector } from "react-redux"

import Card from "./Card"

const Cards = () => {
    const pokemons = useSelector(state => state.pokemons)

    return (
        <div>
            {
                pokemons.length > 0 ?
                pokemons?.map((pokemon, index) => <Card pokemon={pokemon} key={index} />) :
                <p>Cargando...</p>
            }
        </div>
    )
}

export default Cards