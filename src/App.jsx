import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const cardPokemonsingle = [name, id, type]
export const cardPokemonModel = [cardPokemonsingle]

export default function Home(){
    const [pokemon, setPokemon] = useState(cardPokemonModel) 
    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then((data) =>{
            setPokemon(data)
            console.log(data)
        }).catch((error) => console.error(error))
    }, [])

    const getPokemon = pokemon.map((Pokemon) =>{
        <li key={Pokemon.id}>{Pokemon.name}</li>
    })

    return(
        <div>
            <h1>Lista de Publicaciones</h1>
            <ul>
                {getPokemon}
            </ul>
        </div>
    )
}