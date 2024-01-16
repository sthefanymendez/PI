import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/actions";

const Pager = () => {
    const dispatch = useDispatch()

    const page = useSelector(state => state.page)

    const click = newPage => dispatch(changePage(newPage))

    return (
        <div>
            <button onClick={() => click(page - 1)} disabled={page === 1}>
                {"<"}
            </button>
            <button onClick={() => click(page - 1)} disabled={page === 1}>
                {page - 1}
            </button>
            <button>
                {page}
            </button>
            <button onClick={() => click(page + 1)} disabled={page === 4}>
                {page + 1}
            </button>
            <button onClick={() => click(page + 1)} disabled={page === 4}>
                {">"}
            </button>
        </div>
    )
}

export default Pager