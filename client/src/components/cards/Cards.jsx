import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";

import { getPokemons } from "../../redux/actions";
import Card from "./Card";
import { setOrder, setFilters } from "./options";

const Cards = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const params = new URLSearchParams(location.search)
    const filters = params.get('filters')?.split(',')
    const order = params.get('order')

    let pokemons = useSelector(state => state.pokemons)
    const page = useSelector(state => state.page)

    useEffect(() => {
        dispatch(getPokemons(page))
    }, [dispatch, page])

    if (order) pokemons = setOrder(order, pokemons)
    if (filters) pokemons = setFilters(filters, pokemons)

    return (
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%", height: "85%", alignItems: "center", justifyContent: "center"}}>
            {
                pokemons?
                pokemons.map((pokemon, index) => <Card pokemon={pokemon} key={index} />) :
                <p>Loading...</p>
            }
        </div>
    )
}

export default Cards;