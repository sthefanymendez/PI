import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setOrder } from "../redux/actions"

const Orders = () => {
    const dispatch = useDispatch()

    const pokemons = useSelector(state => state.pokemons)

    const change = async event => {
        event.preventDefault()
        const option = event.target.value
        
        dispatch(setOrder(option, pokemons))
    }

    return (
        <div>
            <select onChange={change}>
                <option value="Default">Default</option>
                <option value="A - Z">A - Z</option>
                <option value="Z - A">Z - A</option>
                <option value="Attack: Asc - Desc">Attack: Asc - Desc</option>
                <option value="Attack: Desc - Asc">Attack: Desc - Asc</option>
            </select>
        </div>
    )
}

export default Orders
