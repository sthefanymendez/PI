// import React from "react"

// const Order = () => {
//     return (
//         <div>
//             <select >
// <option value="A - Z">A - Z</option>
// <option value="Z - A">Z - A</option>
// <option value="Rating: Asc - Desc">Rating: Asc - Desc</option>
// <option value="Rating: Desc - Asc">Rating: Desc - Asc</option>
//             </select>
//         </div>
//     )
// }

// export default Order
import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Order = () => {
    const location = useLocation();
    const history = useHistory();

    const [order, setOrder] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const currentOrder = searchParams.get('order');
        setOrder(currentOrder || '');

        // Realizar alguna acción con el orden, por ejemplo, ordenar los datos.
    }, [location.search]);

    const handleOrderChange = (newOrder) => {
        setOrder(newOrder);
        const searchParams = new URLSearchParams(location.search);

        if (newOrder === '') {
            // Si el nuevo orden es el valor por defecto, eliminamos la consulta de la URL.
            searchParams.delete('order');
        } else {
            searchParams.set('order', newOrder);
        }

        history.push({ search: searchParams.toString().replace(/%2C/g, ',') });
    };

    return (
        <div>
            <p>Order Component</p>
            <select value={order} onChange={(e) => handleOrderChange(e.target.value)}>
                <option value="">Default</option>
                <option value="a-z">A - Z</option>
                <option value="z-a">Z - A</option>
                <option value="rating-asc-desc">Rating: Asc - Desc</option>
                <option value="rating-desc-asc">Rating: Desc - Asc</option>
            </select>
        </div>
    );
};

export default Order;