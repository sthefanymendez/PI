import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch()
  const pokemonsLoad = useSelector(state => state.pokemonsLoad)
  
  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  console.log(pokemonsLoad)

  return (
    <div>
      {
        pokemonsLoad.length > 0 ?
        pokemonsLoad.map(pokemon => {
          return (
            <div>
              <img src={pokemon.image} alt="not found"/>
              <span>{pokemon.name}</span>
              {
                pokemon.types.map((type, index) => (<span key={index}>{type}</span>))
              }
            </div>
          )
        }) :
        <p>cargando</p>
      }
    </div>
  );
};
  
export default Home
