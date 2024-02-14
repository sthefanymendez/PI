import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getTypes, setFilter } from "../redux/actions";

const Url = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    const types = useSelector(state => state.types)

    const params = new URLSearchParams(location.search)
    const filters = params.get('filters')?.split(',')

    const change = event => {
        if (location.search.length === 0) return history.push(location.pathname + '?filters=' + event.target.name)

        if (location.search.includes(event.target.name)) {
            if (location.search.includes(',' + event.target.name)) return history.push(location.pathname + location.search.replace(',' + event.target.name, ''))
            if (!location.search.includes('=' + event.target.name + ',')) return history.push(location.pathname)
            return history.push(location.pathname + location.search.replace(event.target.name + ',', ''))
        }

        if (location.search === '?filters=') return history.push(location.pathname + location.search + event.target.name)
        
        if (location.search.includes('?filters=')) return history.push(location.pathname + location.search + ',' + event.target.name)
    }

    if (filters) {
        for (const type of types) {
            type.state = filters.includes(type.name)
        }

        dispatch(setFilter(types))
    } else {
        for (const type of types) {
            type.state = false
        }

        dispatch(setFilter(types))
    }
    
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    return (
        <ul style={{ listStyle: "none" }}>
            <button onClick={() => console.log(types)}>consultar</button>
            {
                types.map(({ name, state }, index) => {
                    return (
                        <li key={index}>
                            <label>
                                <input type="checkbox" name={name} onChange={change} checked={state} />
                                {name}
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Url
