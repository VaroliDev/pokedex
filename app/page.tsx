'user client'
import { useState } from "react"
import type { PokemonProp } from "@/(types)/pokeType"
import PokeOptions from "@/(components)/pokeOptions"
import PokeList from "@/(components)/pokeList"

export default function MainPage(){
  const [pokeArray, setPokeArray] = useState<PokemonProp[]>([])

  const [filter, setFilter] = useState('none')
  const [range, setRange] = useState(20)
  const [pokeId, setPokeId] = useState(0)

  async function updatePokeArray(){
    if(pokeId == 0){
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
      const data = await response.json()
      return setPokeArray([data])
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${range}`)
    const data = await response.json()
    return setPokeArray(data)
  }

  updatePokeArray()

  return (
    <div>
      <PokeOptions
      filter={filter}
      range={range}
      index={pokeId}
      onChangeFilter={setFilter}
      onChangeRange={setRange}
      onChangeIndex={setPokeId}
      />
      <PokeList
      pokemon={pokeArray}
      filter={filter}
      />
    </div>
  )
}