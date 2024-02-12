import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Url = ({ list }) => {
    const location = useLocation()
    const history = useHistory()

    const params = new URLSearchParams(location.search)
    const filters = params.get('filters')

    const change = event => {
        console.log(filters)
        // if (location.search.length === 0) return history.push(location.pathname + '?filters=' + event.target.name)

        // if (location.search.includes(event.target.name)) {
        //     if (location.search.includes(',' + event.target.name)) return history.push(location.pathname + location.search.replace(',' + event.target.name, ''))
        //     if (!location.search.includes('=' + event.target.name + ',')) return history.push(location.pathname)
        //     return history.push(location.pathname + location.search.replace(event.target.name + ',', ''))
        // }

        // if (location.search === '?filters=') return history.push(location.pathname + location.search + event.target.name)
        
        // if (location.search.includes('?filters=')) return history.push(location.pathname + location.search + ',' + event.target.name)
    }
    

    return (
        <ul style={{ listStyle: "none" }}>
            <button onClick={() => console.log(list)}>consultar</button>
            {
                list.map(({ name, state }, index) => {
                    return (
                        <li key={index}>
                            <label>
                                <input type="checkbox" name={name} onChange={change} checked={true} />
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
