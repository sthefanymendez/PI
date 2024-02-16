import React from "react";

const Orders = ({ change }) => {
    const handleChange = event => {
        change('order', event.target.value)
    }

    return (
        <div>
            <select onChange={handleChange}>
                <option value="">Default</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
                <option value="attack:asc-desc">Attack: Asc - Desc</option>
                <option value="attack:desc-asc">Attack: Desc - Asc</option>
            </select>
        </div>
    )
}

export default Orders
