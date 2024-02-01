import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getPokemons } from "../../redux/actions";
import Card from "./Card"

const Cards = () => {
    const dispatch = useDispatch()

    const pokemons = useSelector(state => state.pokemons)
    const page = useSelector(state => state.page)

    useEffect(() => {
        dispatch(getPokemons(page))
    }, [dispatch, page])

    return (
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", height: "85%", alignItems: "center", justifyContent: "center"}}>
            {
                pokemons?.length > 0 ?
                pokemons.map((pokemon, index) => <Card pokemon={pokemon} key={index} />) :
                <p>Loading...</p>
            }
        </div>
    )
}

export default Cards;