import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import "./Cart.css";

// eslint-disable-next-line react/prop-types
function CardItem({ thumbnail, title, price, quantity, addToCart, removeFromCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - {price}€
      </div>

      <footer>
        <small>Qty: {quantity}</small>
              <button onClick={addToCart}>+</button>
              <button onClick={removeFromCart}>-</button>
      </footer>
    </li>
  );
}

export function Cart() {
  // creamos el id del checkbox
  const cartCheckboxId = useId();

  // traemos el carrito y limpiar carrito
  const { cart, clearCart, addToCart, removeFromCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input
        type="checkbox"
        id={cartCheckboxId}
        className="cart-checkbox"
        hidden
      />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CardItem
              key={product.id}
                  {...product}
              removeFromCart={() => removeFromCart(product)}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
