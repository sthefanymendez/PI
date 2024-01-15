import React from "react"

const Card = ({ pokemon }) => {
    return (
        <div>
            <img src={pokemon.image} alt="not found" />
            <span>{pokemon.name}</span>
            {
                pokemon.types.map((type, index) => <span key={index}>{type.name}</span>)
            }
        </div>
    )
}

export default Card