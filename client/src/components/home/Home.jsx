import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

import Cards from "../cards/Cards";
import Search from "../search/Search";

const Home = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  return (
    <div>
      <Search />
      <Cards />
    </div>
  );
};
  
export default Home
