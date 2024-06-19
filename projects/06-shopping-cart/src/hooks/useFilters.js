
import { useContext } from "react";
import { FiltersContext } from "../context/filters.jsx";

export function useFilters() {
  // creamos el estado de los filtros, inicialmente vacíos
  // const [filters, setFilters] = useState({
  //   category: "all",
  //   minPrice: 0,
  // });

  // sacar filtros del contexto
  const {filters, setFilters} = useContext(FiltersContext);

  // función para filtrar los productos
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        // filtramos los productos por precio y categoría
        product.price >= filters.minPrice &&
        (filters.category === "all" || filters.category === product.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}