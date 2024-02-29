import React from "react"
import "../card.css"

const Card = ({ pokemon }) => {
    return (
        <div className="card">
            <p>{pokemon.attack}</p>
            <img src={pokemon.image} alt="not found" width="100px" />
            <span>{pokemon.name}</span>
            {
                pokemon.types.map((type, index) => <span key={index}>{type.name}</span>)
            }
        </div>
    )
}

export default Card