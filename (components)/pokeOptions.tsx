type pokeOptionsProp = {
    filter: string,
    range: number,
    index: string | number,
    onChangeFilter: (value: string) => void,
    onChangeRange: (value: number) => void,
    onChangeIndex: (value: string | number) => void,
    onClickSearch: () => void
}

export default function PokeOptions({filter, range, index, onChangeFilter, onChangeRange, onChangeIndex, onClickSearch}: pokeOptionsProp){
    return (
        <div>
            <button onClick={() => onClickSearch()}>Buscar</button>

            <input
            className=""
            placeholder="Insira o nome ou numero do pokemon..."
            value={index}
            onChange={e => onChangeIndex(e.target.value)}
            />

            <select
            className=""
            value={filter}
            onChange={e => onChangeFilter(e.target.value)}>
                <option value="none">Todos</option>
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