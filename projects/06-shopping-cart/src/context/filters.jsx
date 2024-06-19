import { createContext, useState } from "react";

// 1. Crear el contexto, este lo tenemos que consumir, solo se crea una vez
export const FiltersContext = createContext();

// 2. Crear el provider, para proveer el contexto
export function FiltersProvider({ children }) {

  // Crear el estado de los filtros
  const [filters, setFilters] = useState({
     category: "all",
     minPrice: 0,
  });  
  
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
