import { useState } from "react"
import CartCard from "../components/CartCard/cartCard";

export default function Cart(props) {
    const[count, setCount] = useState(0)
    let CartBtn = document.getElementById("Cart-btn")
    CartBtn.innerText = `Cart ${props.Cart.length}`
    return(
        <>
            <div className="container">
                <h1>Cart</h1>
                {
                    props.Cart.map((product, index)=> {
                        function Splice() {
                            props.Cart.splice(index, 1)
                            setCount(count + 1)
                        }
                        return(
                            <CartCard cart={props.Cart.length} Splice={Splice} product={product} />
                        )
                    })
                }
            </div>
        </>
    )
}