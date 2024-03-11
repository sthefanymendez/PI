import React from "react"
import "./card.css"

const typeImages = {
    normal: '//archives.bulbagarden.net/media/upload/thumb/a/ae/Normal_icon.png/20px-Normal_icon.png',
    
    fire: '//archives.bulbagarden.net/media/upload/thumb/5/5e/Fire_icon.png/20px-Fire_icon.png',
    
    fighting: '//archives.bulbagarden.net/media/upload/thumb/7/7d/Fighting_icon.png/20px-Fighting_icon.png',
    
    water: '//archives.bulbagarden.net/media/upload/thumb/7/7f/Water_icon.png/20px-Water_icon.png',
    
    flying: '///archives.bulbagarden.net/media/upload/thumb/f/f0/Flying_icon.png/20px-Flying_icon.png',
    
    grass: '//archives.bulbagarden.net/media/upload/thumb/c/cb/Grass_icon.png/20px-Grass_icon.png',
    
    poison: '//archives.bulbagarden.net/media/upload/thumb/8/84/Poison_icon.png/20px-Poison_icon.png',
    
    electric: '//archives.bulbagarden.net/media/upload/thumb/a/af/Electric_icon.png/20px-Electric_icon.png',
    
    ground: '//archives.bulbagarden.net/media/upload/thumb/5/58/Ground_icon.png/20px-Ground_icon.png',
    
    psychic: '//archives.bulbagarden.net/media/upload/thumb/a/a6/Psychic_icon.png/20px-Psychic_icon.png',
    
    rock: '//archives.bulbagarden.net/media/upload/thumb/f/ff/Rock_icon.png/20px-Rock_icon.png',
    
    ice: '//archives.bulbagarden.net/media/upload/thumb/8/83/Ice_icon.png/20px-Ice_icon.png',
    
    bug: '//archives.bulbagarden.net/media/upload/thumb/7/79/Bug_icon.png/20px-Bug_icon.png',
    
    dragon: '//archives.bulbagarden.net/media/upload/thumb/9/91/Dragon_icon.png/20px-Dragon_icon.png',
    
    ghost: '//archives.bulbagarden.net/media/upload/thumb/8/82/Ghost_icon.png/20px-Ghost_icon.png',
    
    dark: '//archives.bulbagarden.net/media/upload/thumb/3/33/Dark_icon.png/20px-Dark_icon.png',

    steel: '//archives.bulbagarden.net/media/upload/thumb/b/b8/Steel_icon.png/20px-Steel_icon.png',
    
    fairy: '//archives.bulbagarden.net/media/upload/thumb/5/5a/Fairy_icon.png/20px-Fairy_icon.png',
    
    stellar: '//archives.bulbagarden.net/media/upload/thumb/9/9f/Stellar_icon.png/20px-Stellar_icon.png',
    
    others: '//archives.bulbagarden.net/media/upload/e/e3/None.png',
}

const Card = ({ pokemon }) => {
    return (
        <div className="card">
            <img src={pokemon.image} alt="not found" width="100px" />
            <span>{pokemon.name}  </span>
            <div>
                <p>{pokemon.attack}</p>
            </div>
            
            <div className="card_types">
                {pokemon.types.map((type, index) => <img src={typeImages[type.name]} alt="not found" key={index} />)}
            </div>
            
        </div>
    )
}

export default Card