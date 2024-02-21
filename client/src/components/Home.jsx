import React from "react";
import { Link } from "react-router-dom"

import Order from "./Order";
import Cards from "./cards/Cards";
import Search from "./Search";
import Page from "./Page";
import Filters from "./Filters";
import Url from "./Url";

const Home = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-between" }}>
            <Url />
            <Search />
            <Order />
            <Link to='/add'>
                <button>
                    Add game
                </button>
            </Link>
            <div style={{ display: 'flex' }}>
                <Filters />
                <Cards />
            </div>
            <Page />
        </div>
    );
};

export default Home