import React from "react";

import Search from "./Search";
// import Order from "./Order";
// import Cards from "./cards/Cards";
// import Redirect from "./Redirect";
// import Page from "./Page";
// import Filters from "./Filters";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <header>
                <Search />
            </header>
            {/* <div className="home_head">
                <Search />
                <Redirect />
            </div> */}
                {/* <Order /> */}
            {/* <div className="home_body"> */}
                {/* <Filters /> */}
                {/* <Cards /> */}
            {/* </div> */}
            {/* <Page /> */}
        </div>
    );
};

export default Home