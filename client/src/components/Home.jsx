import React from "react";
import { Link } from "react-router-dom";

import Cards from "./cards/Cards";
import Search from "./Search";
import Pager from "./Pager";
import Orders from "./Orders";
import Filters from "./Filters";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";

const Home = () => {
    const location = useLocation()
    const history = useHistory()

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "space-around" }}>
            <button onClick={() => history.push('&hola=hola')}>agregar</button>
            <button onClick={() => console.log({ location, history })}>agregar</button>
            <Search />
            <Link to='/add'>
                <button>
                    Add Pokemon
                </button>
            </Link>
            <Orders />
            <div style={{ display: "flex" }}>
                <Filters />
                <Cards />
            </div>
            <Pager />
        </div>
    );
};

export default Home
