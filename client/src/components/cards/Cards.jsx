import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getPokemons } from "../../redux/actions";

import Card from "./Card"

const Cards = () => {
    const page = useSelector(state => state.page)

    const dispatch = useDispatch()
    
    useEffect(() => {
      dispatch(getPokemons(page))
    }, [dispatch, page])

    const pokemons = useSelector(state => state.pokemons)

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {
                pokemons.length > 0 ?
                pokemons?.map((pokemon, index) => <Card pokemon={pokemon} key={index} />) :
                <p>Loading...</p>
            }
        </div>
    )
}

export default Cards