// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"

// import { addPokemon, getTypes } from "../redux/actions";

// const Add = () => {
//     const dispatch = useDispatch()

//     const types = useSelector(state => state.types)

//     const [pokemon, setPokemon] = useState({
//         name: "",
//         hp: 0,
//         strength: 0,
//         defense: 0,
//         speed: 0,
//         height: 0,
//         weight: 0,
//         attack: 0,
//         types: []
//     })

//     const click = (type) => {
//         if (!pokemon.types.includes(type)) return setPokemon({
//             ...pokemon,
//             types: [...pokemon.types, type]
//         })

//         setPokemon({
//             ...pokemon,
//             types: pokemon.types.filter(r => r !== type)
//         })
//     }

//     const change = (input) => {
//         return setPokemon({
//             ...pokemon,
//             [input.target.name]: input.target.value
//         })
//     }

//     const add = async (pokemon) => {
//         await dispatch(addPokemon(pokemon))
//     }

//     useEffect(() => {
//         dispatch(getTypes())
//     }, [dispatch])

//     return (
//         <div style={{ textAlign: 'center' }}>
//             <p> Add your pokemon </p>
//             Name:
//             <input type="text" name="name" value={pokemon.name} onChange={change} />
//             <br />
//             Life:
//             <input type="number" name="hp" value={pokemon.hp} onChange={change} min={0} max={1000} />
//             <br />
//             Strength:
//             <input type="number" name="strength" value={pokemon.strength} onChange={change} min={0} max={1000} />
//             <br />
//             Defense:
//             <input type="number" name="defense" value={pokemon.defense} onChange={change} min={0} max={1000} />
//             <br />
//             Speed:
//             <input type="number" name="speed" value={pokemon.speed} onChange={change} min={0} max={1000} />
//             <br />
//             Height:
//             <input type="number" name="height" value={pokemon.height} onChange={change} min={0} max={1000} />
//             <br />
//             Weight:
//             <input type="number" name="weight" value={pokemon.weight} onChange={change} min={0} max={1000} />
//             <br />
//             Attack:
//             <input type="number" name="attack" value={pokemon.attack} onChange={change} min={0} max={1000} />
//             <br />
//             <br />
//             <br />
//             Types:
//             <br />
//             <br />
//             <div>
//                 {
//                     types?.map((type, index) => {
//                         return (
//                             <button
//                                 key={index}
//                                 onClick={() => click(type.name)}
//                             >
//                                 {type.name}
//                             </button>
//                         )
//                     })
//                 }
//             </div>
//             <br />
//             <br />
//             <br />
//             <button onClick={() => console.log(pokemon)}>Consultar</button>
//             <br />
//             <br />
//             <button onClick={() => add(pokemon)}>
//                 Crear
//             </button>
//         </div>
//     );
// };


// export default Add