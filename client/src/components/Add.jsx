import React from "react";

const Add = () => {
    const addPokemon = []

    return (
        <div>
            <form>
                Name:
                <input
                    type="text"
                    name="name"
                    
                />
                Type:
                <input
                    type="text"
                    name="name"
                    
                />
                <button type="submit">Create Pokemón</button>
            </form>
        </div>
    );
};


export default Add