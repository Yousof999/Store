import './cartCard.css'

export default function CartCard(props) {
    return(
        <article className="cart-item">
            <div className="cart-item-image"><img src={props.product.thumbnail} alt={props.product.title}/></div>
            <div className="cart-item-content">
                <div>
                    <p className="cart-item-category">{props.product.category}</p>
                    <h2>{props.product.title}</h2>
                    <p className="c-content">{props.product.description}</p>
                </div>
                <div className="cart-item-footer">
                    <strong>${props.product.price.toFixed(2)}</strong>
                    <button onClick={props.onRemove} className="remove-item">Remove</button>
                </div>
            </div>
        </article>
    )
}