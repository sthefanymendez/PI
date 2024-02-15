// import React, { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"
// import { getTypes, setFilter } from "../redux/actions";

// const Url = () => {
//     const dispatch = useDispatch()
//     const location = useLocation()
//     const history = useHistory()

    // const types = useSelector(state => state.types)
    
//     const [filters, setFilters] = useState([]);

//     const handleCheckboxChange = (filter) => {
//         const index = filters.indexOf(filter);
//         if (index === -1) {
//             setFilters([...filters, filter]);
//         } else {
//             const newFilters = [...filters];
//             newFilters.splice(index, 1);
//             setFilters(newFilters);
//         }
//     };

//     const query = filters.length > 0 ? `?filters=${filters.join(',')}` : '';

    // useEffect(() => {
    //     dispatch(getTypes())
    // }, [dispatch])

//     return (
        // <ul style={{ listStyle: "none" }}>
        //     {
        //         types.map(({ name, state }, index) => {
        //             return (
        //                 <li key={index}>
        //                     <label>
        //                         <input type="checkbox" name={name} onChange={() => handleCheckboxChange(name)} checked={state} />
        //                         {name}
        //                     </label>
        //                 </li>
        //             )
        //         })
        //     }
        // </ul>
//     )
// }

// export default Url
