import { useEffect, useState } from "react"
import { data, useParams } from "react-router-dom"
import Card from "../components/card"

export default function Category(props) {

    const [data, setData] = useState([])
    const params = useParams()

    useEffect(()=> {
        fetch(`https://dummyjson.com/products/category/${params.categoryName}`)
        .then(res => res.json())
        .then((data)=> {
            setData(data.products)
        });
    },[])

    return (
        <>
            <div className="container">
                <h1 className="my-4">Category {params.categoryName}</h1>
                <div className="row">
                    {
                        data.map((product) => {
                            return(
                                <div className="col-lg-4">
                                    <Card addToCart={props.addToCart} Category={params.categoryName} product={product} />
                                </div>
                            )
                        })
                    }
                </div>  
            </div>
        </>
    )
}