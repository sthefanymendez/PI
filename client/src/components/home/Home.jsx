import React from "react";
import { Link } from "react-router-dom";

import Cards from "../cards/Cards";
import Search from "../search/Search";
import Pager from "../Pager";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-around" }}>
      <Search />
      <Link to='/add'>
        <button>
          Add Pokemon
        </button>
      </Link>
      <Cards />
      <Pager />
    </div>
  );
};

export default Home
