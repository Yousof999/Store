import { Link } from "react-router-dom"
import Details from "../pages/details"
import './card.css'

export default function Card(props) {
    return (
        <div className="card main-Card mb-5">
            <div className="img"><img src={props.product.thumbnail} className="card-img-top" alt="..."/></div>
            <div className="card-body content">
                <h3 className="card-title mb-3">{props.product.title}</h3>
                <h4 className="card-text my-3">{props.product.price}$</h4>
                <Link to={`/details/${props.product.id}`}><button className="btn btn-primary">Details</button></Link>
                <button onClick={()=> {
                    props.addToCart(props.product)
                }} className="btn btn-info ms-5">add To Cart</button>
            </div>
        </div>
    )
}