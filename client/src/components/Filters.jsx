import React, { useEffect } from "react";
import Query from "./Query";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../redux/actions";
// import Url from "./Url";

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
                <Query queryFilter={true} props={types} />
            </div>
        </div>
    )
}

export default Filters