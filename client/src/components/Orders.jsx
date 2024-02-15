import React from "react";
import Query from "./Query";

import { useHistory, useLocation } from "react-router-dom";

const Orders = () => {
    const location = useLocation()
    const history = useHistory()

    // const params = new URLSearchParams(location.search)
    // const order = params.get('order')?.split(',')

    const change = event => {
        history.push(location.pathname + event.target.value)
    }

    return (
        <div>
             <Query queryFilter={true} props={location} />
            <select onChange={change}>
                <option value="">Default</option>
                <option value="?order=a-z">A - Z</option>
                <option value="?order=z-a">Z - A</option>
                <option value="?order=attack:asc-desc">Attack: Asc - Desc</option>
                <option value="?order=attack:desc-asc">Attack: Desc - Asc</option>
            </select>
        </div>
    )
}

export default Orders
