import React from "react"

const Card = ({ pokemon }) => {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            <img src={pokemon.image} alt="not found" width="100px" />
            <span>{pokemon.name}</span>
            {
                pokemon.types.map((type, index) => <span key={index}>{type.name}</span>)
            }
        </div>
    )
}

export default Card