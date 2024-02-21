import React from "react"
import { useSelector } from "react-redux"

import Card from "./Card";

const Cards = () => {
    const pokemons = useSelector(state => state.pokemons)
    
    return (
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", height: "85%", alignItems: "center", justifyContent: "center"}}>
            {
                pokemons ?
                pokemons.map((pokemon, index) => <Card pokemon={pokemon} key={index} />) :
                <p>Loading...</p>
            }
        </div>
    )
}

export default Cards;
