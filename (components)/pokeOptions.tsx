type pokeOptionsProp = {
    filter: string,
    range: number,
    index: number,
    onChangeFilter: (value: string) => void,
    onChangeRange: (value: number) => void,
    onChangeIndex: (value: number) => void
}

export default function pokeOptions({filter, range, index, onChangeFilter, onChangeRange, onChangeIndex}: pokeOptionsProp){
    return (
        <div>
            <input
            className=""
            placeholder="Insira o index da pokedex..."
            value={index}
            onChange={e => onChangeIndex(Number(e.target.value))}
            />

            <select
            className=""
            value={filter}
            onChange={e => onChangeFilter(e.target.value)}>
                <option value="fire">Fogo</option>
                <option value="water">Água</option>
                <option value="grass">Grama</option>
            </select>
            
            <select
            className=""
            value={range}
            onChange={e => onChangeRange(Number(e.target.value))}>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
        </div>
    )
}