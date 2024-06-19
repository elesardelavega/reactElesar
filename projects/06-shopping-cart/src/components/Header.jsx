import { Filters } from "./Filters.jsx"
// obtenemos los filtros

// componente de encabezado
export function Header() {
    return (
        <header>
            <h1>React Shop</h1>
            <Filters />
        </header>
    )
}