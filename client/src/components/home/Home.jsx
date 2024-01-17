import React from "react";

import Cards from "../cards/Cards";
import Search from "../search/Search";
import Pager from "../Pager";
import Add from "../Add";

const Home = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Search />
      <Cards />
      <Pager />
      <Add />
    </div>
  );
};
  
export default Home
