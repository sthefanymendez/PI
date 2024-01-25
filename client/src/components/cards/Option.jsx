import React, { useEffect, useRef, useState } from "react";

const Option = ({ name }) => {
    const options = {
        'Order for': ['A-Z', 'Z-A', 'Major-Minor', 'Minor-Major'],
        'Filters': ['Types', 'Existings', 'Aggregates']
    }

    const [active, setActive] = useState(false)

    const ref = useRef(null)

    const click = state => setActive(state)

    const clickOutside = event => {
        if (ref.current && !ref.current.contains(event.target))
            setActive(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", clickOutside)
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
                        options[name].map((option, index) => {
                            return (
                                <button key={index}>
                                    {option}
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

