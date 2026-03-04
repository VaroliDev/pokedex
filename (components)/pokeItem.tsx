import { PokemonProp } from '@/(types)/pokeType'

type PokeItemProp = {
    pokemon: PokemonProp
}

export default function PokeItem({pokemon}: PokeItemProp){
    return (
        <div className='m-10 flex justify-center content-center flex-col bg-gray-500 border rounded-md'>
            <h3>Index: {pokemon.id}</h3>
            
            <h4>Nome: {pokemon.name}</h4>

            <img src={pokemon.sprite} alt={pokemon.name} />

            <p>Tipos: {pokemon.types.map(t => t.concat(" "))}</p>

            <span>
                <p>Peso: {pokemon.weight} kg</p>

                <p>{pokemon.stats.map((s: any) => `${s.name}: ${s.value}`).join(', ')}</p>
            </span>
        </div>
    )
}