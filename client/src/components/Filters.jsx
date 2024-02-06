import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../redux/actions";
import Url from "./Url";

const Filters = () => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    return (
        <div>
            <div>
                <h3>Pokemon types</h3>
                <Url list={types} />
            </div>
            <div></div>
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