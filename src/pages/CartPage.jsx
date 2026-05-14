import { useContext } from 'react'

import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'

function CartPage() {
    const { cart, removeFromCart } =
        useContext(CartContext)

    return (
        <div>
            <h1 className="mb-4">Carrello</h1>

            {cart.length === 0 ? (
                <p>Il carrello è vuoto</p>
            ) : (
                cart.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        removeFromCart={removeFromCart}
                    />
                ))
            )}
        </div>
    )
}

export default CartPage