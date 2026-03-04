'use client'
import { useState } from "react"
import type { PokemonProp } from "@/(types)/pokeType"
import PokeOptions from "@/(components)/pokeOptions"
import PokeList from "@/(components)/pokeList"

export default function MainPage(){
  const [pokeArray, setPokeArray] = useState<PokemonProp[]>([])

  const [filter, setFilter] = useState<string>('none')
  const [range, setRange] = useState<number>(20)
  const [poke, setPoke] = useState<string | number>('')

  async function updatePokeArray(){
    const url = "https://pokeapi.co/api/v2/pokemon/"

    const responseArr = await fetch(url + `?limit=${range}`)
    const dataArr = await responseArr.json()

    console.log(dataArr)

    const response = await Promise.all(dataArr.results.map(async (data: any) =>{
    const pokemonData = await fetch(data.url).then( res => res.json())

    return {
        id: pokemonData.id,
        name: pokemonData.name,
        sprite: pokemonData.sprites.front_default,
        sprite_shiny: pokemonData.sprites.front_shiny,
        weight: pokemonData.weight,
        types: pokemonData.types.map((t: any) => t.type.name),
        stats: pokemonData.stats.map((s: any) => ({
          name: s.stat.name,
          value: s.base_stat
        })
        )
      }
    }))

    setPokeArray(response)
  }

  return (
    <div>
      <PokeOptions
      filter={filter}
      range={range}
      index={poke}
      onChangeFilter={setFilter}
      onChangeRange={setRange}
      onChangeIndex={setPoke}
      onClickSearch={updatePokeArray}
      />
      <PokeList
      pokemon={pokeArray}
      filter={filter}
      />
    </div>
  )
}