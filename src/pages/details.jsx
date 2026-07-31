import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './details.css'

export default function Details(props) {
    const[data, setData] = useState([])
    const params = useParams()
    useEffect(()=> {
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res => res.json())
        .then((data)=>{
            setData([data])
        });
    },[])
    console.log(data)

    return (
        <>
        <div className="container">
            <h1>Details</h1>
            {
                data.map((product)=> {
                    return(
                        <div className="card mt-4 mb-3 text-center">
                        <div className="row g-0">
                            <div className="col-md-4 img">
                                <img src={product.thumbnail} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body details-card">
                                    <h2 className="card-title">{product.title}</h2>
                                    <p className="details-description">{product.description}</p>
                                    <p className="price">{product.price}$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
        }
    </div>
        </>
    )
}