import React from "react";
import Url from "./Url";

const Filters = () => {
    return (
        <div>
            <div>
                <h3>Pokemon types</h3>
                <Url />
            </div>
            {/* <div>
                <h3>Filters</h3>
                <div>
                    <div>
                        <div>Types</div>
                        <ul>
                            {
                                types?.map((type, index) => {
                                    return (
                                        <li key={index}>
                                            {type.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>Existings</div>
                    <label class=''>
                        <input type="text" />
                        <span>
                            <span></span>
                            <span></span>
                        </span>
                    </label>
                    <div>Aggregates</div>
                    <label class='checkbox'>
                        <input type="text" />
                        <span>
                            <span></span>
                            <span></span>
                        </span>
                    </label>
                </div>
            </div> */}
        </div>
    )
}

export default Filters