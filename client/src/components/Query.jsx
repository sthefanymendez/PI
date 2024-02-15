import React, { useState } from 'react';

function Query({ queryFilter, queryOrder, queryPage, props }) {
    const [filters, setFilters] = useState([]);
    const [order, setOrder] = useState([]);
    const [page, setPage] = useState(1);

    const handleCheckboxChange = (queryType, value) => {
        switch (queryType) {
            case 'filters':
                handleFiltersChange(value);
                break;
            case 'order':
                handleOrderChange(value);
                break;
            default:
                break;
        }
    };

    const handleFiltersChange = (filter) => {
        const index = filters.indexOf(filter);
        if (index === -1) {
            setFilters([...filters, filter]);
        } else {
            const newFilters = [...filters];
            newFilters.splice(index, 1);
            setFilters(newFilters);
        }
    };

    const handleOrderChange = (orderValue) => {
        if (order === orderValue) {
            // Si es el mismo orden, lo eliminamos
            setOrder([]);
        } else {
            setOrder(orderValue);
        }
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const generateQuery = () => {
        const queries = [];
        if (filters.length > 0) {
            queries.push(`filters=${filters.join(',')}`);
        }
        if (order.length > 0) {
            queries.push(`order=${order}`);
        }
        if (page > 0) {
            queries.push(`page=${page}`);
        }
        return queries.length > 0 ? `?${queries.join('&')}` : '';
    };

    const query = generateQuery();

    return (
        <>
            <p>{query}</p>
            {
                queryFilter &&
                <ul style={{ listStyle: "none" }}>
                    {
                        props.map(({ name, state }, index) => {
                            return (
                                <li key={index}>
                                    <label>
                                        <input type="checkbox" onChange={() => handleCheckboxChange('filters', name)} checked={state} />
                                        {name}
                                    </label>
                                </li>
                            )
                        })
                    }
                </ul>
            }
            {
                queryOrder &&
                <button onClick={() => handleCheckboxChange('order', 'asc')}>Ascendente</button>
            }
            {
                queryPage &&
                <button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Página Anterior</button>
            }
        </>
    );
}

export default Query;
