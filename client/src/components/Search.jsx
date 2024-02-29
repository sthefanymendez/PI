import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { queryPokemon } from "../redux/actions"
import "./search.css"

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
        <div className="search">
            <input value={input} onChange={change} className="search_input" />
            <button onClick={click} className="search_button">
                Search
            </button>
        </div>
    )
}

export default Search;
