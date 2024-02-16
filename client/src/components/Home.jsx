import React from "react";
import { Link } from "react-router-dom";

import Cards from "./cards/Cards";
import Search from "./Search";
import Pager from "./Pager";
import Query from "./Query";

const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-around" }}>
            {/* <Search /> */}
            {/* <Link to='/add'>
                <button>
                    Add Pokemon
                </button>
            </Link> */}
            <Query queryOrder={true} />
            <div style={{ display: "flex", width: "95%" }}>
                <Query queryFilter={true} />
                <Cards />
            </div>
            {/* <Pager /> */}
        </div>
    );
};

export default Home
