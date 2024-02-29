import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getDetail } from "../redux/actions"
import "./detail.css";

const Detail = (props) => {
    const idPokemon = props.match.params.idPokemon

    const dispatch = useDispatch()

    const detail = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(getDetail(idPokemon))
    }, [dispatch, idPokemon])

    return (
        <div>
            <img src={detail.image} alt="not found" />
            <h2>{detail.name}</h2>
            <div className="detail">
                <p><strong>Attack:</strong> {detail.attack}</p>
                <p><strong>HP:</strong> {detail.hp}</p>
                <p><strong>Defense:</strong> {detail.defense}</p>
                <p><strong>Speed:</strong> {detail.speed}</p>
                <p><strong>Weight:</strong> {detail.weight}</p>
                <p><strong>Height:</strong> {detail.height}</p>
            </div>
            <div className="detail">
                <strong>Types:</strong>
                {
                    detail?.types?.map((type, index) => (
                        <p key={index}>&#9679; {type.name}</p>
                    ))
                }
            </div>
        </div>
    );
};

export default Detail;

//     return (
//         <div>
//             <img src={detail.image} alt="not found" />
//             <p>{detail.name}</p>
//             <p>{detail.attack}</p>
//             <p>{detail.hp}</p>
//             <p>{detail.defense}</p>
//             <p>{detail.speed}</p>
//             <p>{detail.weight}</p>
//             <p>{detail.height}</p>
//             {
//                 detail?.types?.map((type, index) => {
//                     return (
//                         <p key={index}>{type.name}</p>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Detail
// return (
//     <card>
//         {detail.name ? (
//             <card className={style.card}>
//                 <h1>{id}</h1>
//                 <h1>{detail.name}</h1>
//                 <img src={detail.image} alt="not found" />
//                 <p>{detail.name}</p>
//                 <p>{detail.attack}</p>
//                 <p>{detail.hp}</p>
//                 <p>{detail.defense}</p>
//                 <p>{detail.speed}</p>
//                 <p>{detail.weight}</p>
//                 <p>{detail.height}</p>
//             </card>) : <h1>cargando</h1>
//         }
//     </card>
// )
// }