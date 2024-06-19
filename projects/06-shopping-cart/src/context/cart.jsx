import { createContext, useReducer } from "react";
import { cartReducer, cartiIitialState } from "../reducers/cart";

// 1. Crear el contexto, este lo tenemos que consumir, solo se crea una vez
export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartiIitialState);

  // dispatch a la acción de agregar al carrito
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  // dispatch a la acción de remover del carrito
  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  // dispatch a la acción de vaciar el carrito
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return { state, addToCart, removeFromCart, clearCart };
}

// 2. Crear el provider, para proveer el contexto
// la dependecia de usar React Context es MÍNIMA
// eslint-disable-next-line react/prop-types
export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
