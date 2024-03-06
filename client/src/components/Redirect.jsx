import React from "react";
import { Link } from "react-router-dom"

import "./redirect.css"

const Redirect = () => {
    return (
        <div className="redirect">
            <h1>
                <Link to= '/add' className="redirect_link">
                    CreatePokemon
                </Link>
                <div className="redirect_line"></div>
            </h1>
        </div>
    )
}

export default Redirect;