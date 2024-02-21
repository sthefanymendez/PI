import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from "react-redux"

const Filters = () => {
    const location = useLocation();
    const history = useHistory();
    const types = useSelector(state => state.types)

    const [filters, setFilters] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const currentFilters = searchParams.get('filters');
        setFilters(currentFilters ? currentFilters.split(',') : []);

        // Realizar alguna acción con los filtros, por ejemplo, aplicarlos a los datos.
    }, [location.search]);

    const handleFilterChange = (filterName, isChecked) => {
        const updatedFilters = isChecked
            ? [...filters, filterName.toLowerCase()]
            : filters.filter((filter) => filter !== filterName.toLowerCase());

        setFilters(updatedFilters);

        const searchParams = new URLSearchParams(location.search);
        if (updatedFilters.length > 0) {
            searchParams.set('filters', updatedFilters.join(','));
        } else {
            searchParams.delete('filters');
        }

        history.push({ search: searchParams.toString().replace(/%2C/g, ',') });
    };

    return (
        <div>
            <p>Filters Component</p>
            {
                types.map((filter) => (
                    <div key={filter.name}>
                        <input
                            type="checkbox"
                            id={filter.name}
                            checked={filters.includes(filter.name.toLowerCase())}
                            onChange={(e) => handleFilterChange(filter.name, e.target.checked)}
                        />
                        <label htmlFor={filter.name}>{filter.name}</label>
                    </div>
                ))
            }
        </div>
    );
};

export default Filters;