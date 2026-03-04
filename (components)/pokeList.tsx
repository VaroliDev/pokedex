import type { PokemonProp } from '@/(types)/pokeType'
import PokeItem  from '@/(components)/pokeItem'

type PokeListType = {
    pokemon: PokemonProp[],
    filter: string
}

export default function PokeList({pokemon, filter}: PokeListType){

    const filteredPoke = pokemon.filter(poke => {
        return filter === "none"
        ?  true
        :  poke.types.includes(filter)
    })

    return(
        <div className='grid'>
            {filteredPoke.map((poke) => (
                <PokeItem
                key={poke.id}
                pokemon={poke}
                />
            ))}
        </div>
    )
}