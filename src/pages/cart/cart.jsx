import CartCard from "../../components/CartCard/cartCard";
import { Link } from "react-router-dom";
import './cart.css'

export default function Cart(props) {
    const total = props.Cart.reduce((sum, product) => sum + product.price, 0)

    return(
        <main className="cart-page">
            <div className="container">
                <header className="cart-header">
                    <div>
                        <p className="eyebrow">Your considered selection</p>
                        <h1>Shopping cart</h1>
                    </div>
                    <span>{props.Cart.length} {props.Cart.length === 1 ? 'item' : 'items'}</span>
                </header>
                {props.Cart.length ? (
                    <div className="cart-layout">
                        <section className="cart-items" aria-label="Cart items">
                            {props.Cart.map((product, index) => <CartCard key={`${product.id}-${index}`} product={product} onRemove={() => props.removeFromCart(index)} />)}
                        </section>
                        <aside className="order-summary">
                            <p className="eyebrow">Order summary</p>
                            <div className="summary-line"><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div>
                            <div className="summary-line"><span>Delivery</span><strong className="free">Free</strong></div>
                            <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
                            <button onClick={() => { props.clearCart(); alert("Your order has been placed") }} className="place-order">Place order <span aria-hidden="true">&#8594;</span></button>
                            <Link className="continue-shopping" to="/">Continue shopping</Link>
                        </aside>
                    </div>
                ) : (
                    <section className="empty-cart">
                        <span className="empty-mark">00</span>
                        <h2>Your cart is waiting.</h2>
                        <p>There is nothing here yet, but there is plenty to discover.</p>
                        <Link className="place-order empty-link" to="/">Explore the collection <span aria-hidden="true">&#8594;</span></Link>
                    </section>
                )}
            </div>
        </main>
    )
}