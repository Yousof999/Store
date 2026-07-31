import { useEffect, useState } from "react"
import Card from "../components/card";
import { data, Link } from "react-router-dom";

export default function Home(props) {
    let [Data, setData] = useState([])
    useEffect(()=> {
        fetch('https://dummyjson.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data)=> {
            setData(data.products)
        });
    },[])
    
    return (
            <div className="container">
                <h1>Products</h1>
                <div className="row">
                    {
                        Data.map((product) => {
                            return(
                                <div className="col-lg-4">
                                    <Card addToCart={props.addToCart} product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}