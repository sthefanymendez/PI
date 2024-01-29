import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getPokemons } from "../../redux/actions";
import Card from "./Card"
import Option from "./Option";
import  { arrange }  from "./orders";
import { filterPokemons } from "./filters";

const Cards = () => {
    const dispatch = useDispatch()

    let pokemons = useSelector(state => state.pokemons)
    const page = useSelector(state => state.page)
    const order = useSelector(state => state.order)
    const filter = useSelector(state => state.filter)

    useEffect(() => {
        dispatch(getPokemons(page))
    }, [dispatch, page])

    if (order) pokemons = arrange(order, pokemons)
    if (filter) pokemons = filterPokemons(filter, pokemons)

    return (
        <div style={{ display: "flex", width: "100%", height: "85%", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: "0 8%", gap: "6px" }}>
                <Option name="Order" />
                <Option name="Filters" />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                {
                    pokemons.length > 0 ?
                        pokemons.map((pokemon, index) => <Card pokemon={pokemon} key={index} />) :
                        <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default Cards;