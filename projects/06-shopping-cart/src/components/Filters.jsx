import { useFilters } from "../hooks/useFilters.js";
import "./Filters.css";
import { useId } from "react";

// creamos la funcion de filtrado
export function Filters() {
  const { filters, setFilters } = useFilters();

  //creamos la variable de estado de precio
  // MAL: const [minPrice, setMinPrice] = useState(0); // estado local

  // creamos el id de los filtros
  const minPriceFilterId = useId();
  const CategoryFilterId = useId();

  // actualizar precio minimo (del input range)
  const handlePriceChange = (event) => {
    // medio mal
    // mal: setMinPrice(event.target.value);
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    // medio mal
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio mínimo: </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handlePriceChange}
          value={filters.minPrice}
        />
        <span>{filters.minPrice} €</span>
      </div>
      <div>
        <label htmlFor="category">Categoría:</label>
        <select id={CategoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todo</option>
          <option value="beauty">Beauty</option>
          <option value="groceries">Groceries</option>
          <option value="furniture">Furniture</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>
    </section>
  );
}
