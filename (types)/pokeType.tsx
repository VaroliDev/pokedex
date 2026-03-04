export type PokemonProp = {
    id: number,
    name: string,
    sprite: string,
    sprite_shiny: string,
    weight: number,
    types: string[],
    stats: {
        name: string,
        value: number
    }[]
}