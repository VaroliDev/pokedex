'use client'
import { useState, useEffect } from "react"
import type { PokemonProp } from "@/(types)/pokeType"
import PokeOptions from "@/(components)/pokeOptions"
import PokeList from "@/(components)/pokeList"

export default function MainPage(){
  const [pokeArray, setPokeArray] = useState<PokemonProp[]>([])

  const [filter, setFilter] = useState<string>('none')
  const [page, setPage] = useState<number>(0)
  const [range, setRange] = useState<number>(20)
  const [pokeName, setPokeName] = useState<string>('')

  useEffect(() => {
    updatePokeArray()
  }, [])

  async function getPokeDataArray(){
    const url = "https://pokeapi.co/api/v2/pokemon/"

    if(pokeName !== ""){
      return await fetch(url + pokeName).then(res => res.json())
    }

    return await fetch(url + `?offset=0&?limit=${range}`).then(res => res.json())
  }

  function getPokeData(pokeData: any){
    return {
          id: pokeData.id,
          name: pokeData.name,
          sprite: pokeData.sprites.front_default,
          sprite_shiny: pokeData.sprites.front_shiny,
          weight: pokeData.weight,
          types: pokeData.types.map((t: any) => t.type.name),
          stats: pokeData.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat
          }))
        }
  }
  
  async function updatePokeArray(){
    const data = await getPokeDataArray()

    let pokemonData
    
    if(data.results){
      pokemonData = await Promise.all(data.results.map(async (poke: any) => {
        const pokeData = await fetch(poke.url).then(res => res.json())
        return getPokeData(pokeData)
      }))
    } else {
      pokemonData = [getPokeData(data)]
    }
    setPokeArray(pokemonData)
  }

  return (
    <div className="flex flex-col justify-center content-center">
      <PokeOptions
      filter={filter}
      range={range}
      search={pokeName}
      onChangeFilter={setFilter}
      onChangeRange={setRange}
      onChangeSearch={setPokeName}
      onClickSearch={updatePokeArray}
      />
      <PokeList
      pokemon={pokeArray}
      filter={filter}
      />
    </div>
  )
}