import CartCard from "../../components/CartCard/cartCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import './cart.css'

export default function Cart(props) {
    const [showConfirmation, setShowConfirmation] = useState(false)
    const total = props.Cart.reduce((sum, product) => sum + product.price, 0)

    function placeOrder() {
        props.clearCart()
        setShowConfirmation(true)
    }

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
                            <button onClick={placeOrder} className="place-order">Place order <span aria-hidden="true">&#8594;</span></button>
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
            {showConfirmation && (
                <div className="confirmation-backdrop" role="presentation" onClick={() => setShowConfirmation(false)}>
                    <section className="confirmation-dialog" role="dialog" aria-modal="true" aria-labelledby="confirmation-title" onClick={(event) => event.stopPropagation()}>
                        <button className="confirmation-close" onClick={() => setShowConfirmation(false)} aria-label="Close confirmation">&#215;</button>
                        <span className="confirmation-mark" aria-hidden="true">&#10003;</span>
                        <p className="eyebrow">Order confirmed</p>
                        <h2 id="confirmation-title">Thank you for your order.</h2>
                        <p className="confirmation-copy">Your selection is on its way. We hope it finds a beautiful place in your home.</p>
                        <button className="place-order confirmation-action" onClick={() => setShowConfirmation(false)}>Continue shopping <span aria-hidden="true">&#8594;</span></button>
                    </section>
                </div>
            )}
        </main>
    )
}