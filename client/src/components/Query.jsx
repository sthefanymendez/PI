// import React, { useState } from 'react';
// import Orders from './Orders';
// import Filters from './Filters';
// import { useDispatch } from 'react-redux';
// // import { setURL } from '../redux/actions';

// function Query({ queryFilter, queryOrder, queryPage }) {
//     const dispatch = useDispatch()
//     const [filters, setFilters] = useState([]);
//     const [order, setOrder] = useState([]);
//     const [page, setPage] = useState(1);

//     const handleCheckboxChange = (queryType, value) => {
//         switch (queryType) {
//             case 'filters':
//                 handleFiltersChange(value);
//                 break;
//             case 'order':
//                 handleOrderChange(value);
//                 break;
//             default:
//                 break;
//         }
//     };

//     const handleFiltersChange = (filter) => {
//         const index = filters.indexOf(filter);
//         if (index === -1) {
//             setFilters([...filters, filter]);
//         } else {
//             const newFilters = [...filters];
//             newFilters.splice(index, 1);
//             setFilters(newFilters);
//         }
//     };

//     const handleOrderChange = (orderValue) => {
//         if (order === orderValue) {
//             // Si es el mismo orden, lo eliminamos
//             setOrder([]);
//         } else {
//             setOrder(orderValue);
//         }
//     };

//     const handlePageChange = (newPage) => {
//         setPage(newPage);
//     };

//     const generateQuery = () => {
//         const queries = [];
//         if (filters.length > 0) {
//             queries.push(`filters=${filters.join(',')}`);
//         }
//         if (order.length > 0) {
//             queries.push(`order=${order}`);
//         }
//         if (page > 0) {
//             queries.push(`page=${page}`);
//         }
//         const query = queries.length > 0 ? `?${queries.join('&')}` : '';

//         console.log(query)
//         // dispatch(setURL('/home' + query))
//     };

//     generateQuery()

//     return (
//         <>
//             {
//                 queryFilter && <Filters change={handleCheckboxChange} />
//             }
//             {
//                 queryOrder && <Orders change={handleCheckboxChange} />
//             }
//             {
//                 queryPage &&
//                 <button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Página Anterior</button>
//             }
//         </>
//     );
// }

// export default Query;
