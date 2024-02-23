import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import Card from "./Card";
import { getPokemons } from "../../redux/actions"

const Cards = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    const pokemons = useSelector(state => state.pokemons)

    const searchParams = new URLSearchParams(location.search)
    const page = parseInt(searchParams.get('page')) || 1
    const filters = searchParams.get('filters')
    const order = searchParams.get('order')    

    useEffect(() => {
        dispatch(getPokemons({ page, filters, order }))
    }, [
        dispatch,
        page,
        filters,
        order
    ])
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
