import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

// renderiza los productos
export function Products({ products }) {
    // anadir al carrito
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }   
    
    return (
        <main className='products'>
            <ul>
                {
                    products.slice(0, 10).map(product => {
                        const isProductInCart = checkProductInCart(product)

                        return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - {product.price}€
                            </div>
                            <div>
                                    <button style={{backgroundColor: isProductInCart ? 'red' : '#09f'}} onClick={() => { isProductInCart ? removeFromCart(product) : addToCart(product) }}>
                                        { 
                                            isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon /> 
                                        }
                                </button>
                            </div>
                        </li>
                    )})
                }
            </ul>
        </main>
    )
}
