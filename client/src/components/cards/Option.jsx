import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux"
import { setOrder, setFilter } from "../../redux/actions"

const Option = ({ name }) => {
    const dispatch = useDispatch()

    const options = {
        Order: [
            { name: 'A-Z', action: setOrder },
            { name: 'Z-A', action: setOrder },
            { name: 'Attack: Max-Min', action: setOrder },
            { name: 'Attack: Min-Max', action: setOrder },
        ],
        Filters: [
            { name: 'fire', action: setFilter },
            { name: 'Existings', action: setFilter },
            { name: 'Aggregates', action: setFilter },
        ]
    }

    const [active, setActive] = useState(false)

    const ref = useRef(null)

    const click = state => setActive(state)

    const clickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) setActive(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", clickOutside)

        return () => document.removeEventListener("mousedown", clickOutside)
    })

    return (
        <div style={{ position: "relative" }}>
            <button onClick={() => click(!active)}>
                {name}
            </button>
            {
                active &&
                <div ref={ref} style={{ width: "53px", height: "60px", background: "red", position: "absolute", top: "21px" }}>
                    {
                        options[name].map(({ name, action }, index) => {
                            return (
                                <button key={index}  onClick={() => dispatch(action(name))}>
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

export default Option

