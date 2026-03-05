type pokeOptionsProp = {
    filter: string,
    range: number,
    search: string,
    onChangeFilter: (value: string) => void,
    onChangeRange: (value: number) => void,
    onChangeSearch: (value: string) => void,
    onClickSearch: () => void
}

export default function PokeOptions({filter, range, search, onChangeFilter, onChangeRange, onChangeSearch, onClickSearch}: pokeOptionsProp){
    return (
        <div className="min-w-lg m-sm flex flex-row justify-around content-center">
            <button onClick={() => onClickSearch()}>Buscar</button>

            <input
            className=""
            placeholder="Insira o nome ou numero do pokemon..."
            value={search}
            onChange={e => onChangeSearch(e.target.value)}
            />

            <input
            className=""
            />

            <select
            className=""
            value={range}
            onChange={e => onChangeRange(Number(e.target.value))}>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>

            <select
            className=""
            value={filter}
            onChange={e => onChangeFilter(e.target.value)}>
                <option value="none">Todos</option>
                <option value="normal">Normal</option>
                <option value="fire">Fogo</option>
                <option value="water">Água</option>
                <option value="electric">Elétrico</option>
                <option value="grass">Grama</option>
                <option value="ice">Gelo</option>
                <option value="fighting">Lutador</option>
                <option value="poison">Veneno</option>
                <option value="ground">Terrestre</option>
                <option value="flying">Voador</option>
                <option value="psychic">Psíquico</option>
                <option value="bug">Inseto</option>
                <option value="rock">Pedra</option>
                <option value="ghost">Fantasma</option>
                <option value="dragon">Dragão</option>
                <option value="dark">Sombrio</option>
                <option value="steel">Aço</option>
                <option value="fairy">Fada</option>
            </select>
        </div>
    )
}