import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../redux/actions";

const Filters = ({ change }) => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    return (
        <div>
            <h3>Pokemon types</h3>
            <ul style={{ listStyle: "none" }}>
                {
                    types.map(({ name, state }, index) => {
                        return (
                            <li key={index}>
                                <label>
                                    <input type="checkbox" onChange={() => change('filters', name)} checked={state} />
                                    {name}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Filters