import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getTypes } from "../redux/actions";

const Add = () => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)

    const [pokemon, setPokemon] = useState({
        name: "",
        types: []
    })

    const click = (type) => {
        if (!pokemon.types.includes(type)) return setPokemon({ types: [...pokemon.types, type] })
        setPokemon({ types: pokemon.types.filter(r => r !== type) })
    }

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <p> Add your pokemon </p>
                <br />
                <br />
                <label>Type</label>
                <div>
                    {
                        types?.map((type, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => click(type.name)}
                                >
                                    {type.name}
                                </button>
                            )
                        })
                    }
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <button onClick={() => console.log(pokemon.types)}>Consultar</button>
                {/* <form>
                Name:
                <input
                    type="text"
                    name="name"
                />
                Type:
                <input
                    type="text"
                    name="name"
                />
                Life:
                <input
                    type="text"
                    name="name"
                />
                Strength:
                <input
                    type="text"
                    name="name"
                />
                Defense:
                <input
                    type="text"
                    name="name"
                />
                Speed:
                <input
                    type="text"
                    name="name"
                />
                Height:
                <input
                    type="text"
                    name="name"
                />
                Weight:
                <input
                    type="text"
                    name="name"
                />
                <button type="submit">Create Pokemón</button>
            </form> */}
            </div>
            <div>
                Tipos agregados:
                {
                    pokemon?.types?.map((type, index) => {
                        return <p key={index}>{type}</p>
                    })
                }
            </div>
        </div>
    );
};


export default Add