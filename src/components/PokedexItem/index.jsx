import React from 'react'
import { useContext } from 'react'
import { PokedexContext } from '../../common/context/Context'
export function PokedexItem(){
    const {pokedex}=useContext(PokedexContext)
    console.log(pokedex)
  return (
    <>
    {pokedex.map(pokeItem=>(
    <div>
        <p>{pokeItem.data.name}</p>

    </div>
    ))}
    
    </>
  )
}
