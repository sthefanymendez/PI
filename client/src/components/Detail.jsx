import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getDetail } from "../redux/actions"


const Detail = (props) => {
    const idPokemon = props.match.params.idPokemon

    const dispatch = useDispatch()

    const detail = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(getDetail(idPokemon))
    }, [dispatch, idPokemon])

    return (
        <div>{detail ? (
            <div>
                <img src={detail.image} alt="not found" />
                <h2>{detail.name}</h2>

                <ul>
                    <strong>Attack:</strong> {detail.attack}
                </ul>
                <ul>
                    <strong>HP:</strong> {detail.hp}
                </ul>
                <ul>
                    <strong>Defense:</strong> {detail.defense}
                </ul>
                <ul>
                    <strong>Speed:</strong> {detail.speed}
                </ul>
                <ul>
                    <strong>Weight:</strong> {detail.weight}
                </ul>
                <ul>
                    <strong>Height:</strong> {detail.height}
                </ul>

                <ul>
                    <strong>Types:</strong>
                    <ul>
                        {detail.types.map((type, index) => (
                            <li key={index}>{type.name}</li>
                        ))}
                    </ul>
                </ul>
            </div>
            ) : (
                <p>Loading...</p>
            )}
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