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
        :  poke.types == filter //poke.types.type.includes(filter) Possivel solução para o filtro, depois de arrumar o pokeType
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