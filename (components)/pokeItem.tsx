import { PokemonProp } from '@/(types)/pokeType'

type PokeItemProp = {
    pokemon: PokemonProp
}

export default function PokeItem({pokemon}: PokeItemProp){
    return (
        <div>
            <h3>Pokeindex: {pokemon.id}</h3>
            
            <h4>{pokemon.name}</h4>

            <img src={pokemon.sprite} alt={pokemon.name} />

            <p>{pokemon.types}</p>

            <span>
                <p>{pokemon.weight}</p>

                <p>{pokemon.stats.map((s: any) => `${s.name}: ${s.value}`).join(', ')}</p>
            </span>
        </div>
    )
}