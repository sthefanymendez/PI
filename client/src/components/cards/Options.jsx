import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { setOrder, setFilter, getTypes } from "../../redux/actions"

const Options = ({ name }) => {
    const dispatch = useDispatch()

    const types = useSelector(state => state.types)
    const pokemons = useSelector(state => state.pokemons)

    const options = {
        Order: [
            { name: 'A-Z', action: setOrder },
            { name: 'Z-A', action: setOrder },
            { name: 'Attack: Max-Min', action: setOrder },
            { name: 'Attack: Min-Max', action: setOrder },
        ],
        Filters: [
            ...types.map(r => {
                return {
                    name: r.name,
                    action: setFilter
                }
            }),
            { name: 'Existings', action: setFilter },
            { name: 'Aggregates', action: setFilter },
        ]
    }
    
    const [active, setActive] = useState(false)
    
    const ref = useRef(null)

    const click = state => setActive(state)

    const clickOutside = event => {
        if (ref.current && !ref.current.contains(event.target))
            setActive(false)
    }

    useEffect(() => {
        dispatch(getTypes())
        
        document.addEventListener("mousedown", clickOutside)
        return () => document.removeEventListener("mousedown", clickOutside)
    }, [dispatch])

    return (
        <div style={{ position: "relative" }}>
            {
                ["Order", "Filters"].map(element => {
                    return (
                        <button onClick={() => click(!active)}>
                            {element}
                        </button>
                    )
                })
            }
            {
                active &&
                <div ref={ref} style={{ width: "53px", height: "60px", background: "red", position: "absolute", top: "21px" }}>
                    {
                        options[name].map(({ name, action }, index) => {
                            return (
                                <button key={index} onClick={() => dispatch(action(name, pokemons))}>
                                    {name}
                                </button>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Options
