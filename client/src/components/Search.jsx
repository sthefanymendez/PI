import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { queryPokemon } from "../redux/actions"

const Search = () => {
    const dispatch = useDispatch()

    const [input, setInput] = useState('')

    const change = (input) => {
        input.preventDefault()
        setInput(input.target.value)
    }

    const click = async (search) => {
        search.preventDefault()
        await dispatch(queryPokemon(input))
    }

    return (
        <div>
            <input type="search" value={input} onChange={change} />
            <button onClick={click}>
                Search
            </button>
        </div>
    )
}

export default Search;
