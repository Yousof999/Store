import './cartCard.css'

export default function CartCard(props) {
    return(
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 img">
                        <img src={props.product.thumbnail} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="cart-card card-body">
                            <h2 className="card-title mb-5">{props.product.title}</h2>
                            <p className="card-text c-content">{props.product.description}</p>
                            <p className="price">{props.product.price}$</p>
                            <button onClick={()=> {
                                props.Splice()
                            }} className="btn btn-danger">delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}