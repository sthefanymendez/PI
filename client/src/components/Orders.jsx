import React from "react";
import { useDispatch } from "react-redux";

import { setSort } from "../redux/actions"

const Orders = () => {
    const dispatch = useDispatch()


    const change = event => {
        dispatch(setSort(event.target.value))
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
