import React from "react";
import { Link } from "react-router-dom";

import Cards from "./cards/Cards";
import Search from "./Search";
import Pager from "./Pager";
import Orders from "./Orders";
import Filters from "./Filters";

const Home = (props) => {
    console.log(props)
    
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-around" }}>
            <Search />
            <Link to='/add'>
                <button>
                    Add Pokemon
                </button>
            </Link>
            <Orders />
            <div style={{ display: "flex", width: "95%" }}>
                <Filters />
                <Cards />
            </div>
            <Pager />
        </div>
    );
};

export default Home
