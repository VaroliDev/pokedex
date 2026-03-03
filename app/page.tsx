'user client'
import { useState } from "react"
import type { PokemonProp } from "@/(types)/pokeType"
import pokeOptions from "@/(components)/pokeOptions"
import PokeList from "@/(components)/pokeList"

export default function MainPage(){
  const [pokeArray, setPokeArray] = useState<PokemonProp[]>([])

  const [filter, setFilter] = useState('none')
  const [range, setRange] = useState(20)
  const [pokeId, setPokeId] = useState()

    async function updatePokeArray(){
    if(pokeId){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
      const data = await response.json()
      return setPokeArray([data])
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${range}`)
    const data = await response.json()
    return setPokeArray(data)
  }
}