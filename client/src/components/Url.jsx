import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPokemons, getTypes } from "../redux/actions";

const Url = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons(1))
        dispatch(getTypes())
    }, [
        dispatch
    ])

    return <></>
}

export default Url