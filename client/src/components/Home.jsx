import React from "react";
import { Link } from "react-router-dom"

import Order from "./Order";
import Cards from "./cards/Cards";
import Search from "./Search";
import Page from "./Page";
import Filters from "./Filters";
import Url from "./Url";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <Url />
            <Search />
            {/* <Order /> */}
            <Link to='/add'>
                <button>
                    Add game
                </button>
            </Link>
            <div className="home_filters">
                {/* <Filters /> */}
                <Cards />
            </div>
            <Page />
        </div>
    );
};

export default Home