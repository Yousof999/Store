import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import './details.css'

export default function Details(props) {
    const [product, setProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState("")
    const params = useParams()
    useEffect(()=> {
        fetch(`https://dummyjson.com/products/${params.id}`)
        .then(res => res.json())
        .then((data)=>{
            setProduct(data)
            setSelectedImage(data.thumbnail)
        });
    },[params.id])

    return (
        <main className="details-page">
            <div className="container">
                <Link className="back-link" to="/">&#8592; Back to collection</Link>
                {product ? (
                    <article className="product-detail">
                        <div className="product-gallery">
                            <div className="gallery-main">
                                <span className="gallery-label">Selected object</span>
                                <img src={selectedImage || product.thumbnail} alt={product.title} />
                            </div>
                            <div className="gallery-thumbs">
                                {(product.images || [product.thumbnail]).map((image) => (
                                    <button className={selectedImage === image ? "thumb active" : "thumb"} key={image} onClick={() => setSelectedImage(image)} aria-label={`View ${product.title}`}>
                                        <img src={image} alt="" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="product-info">
                            <p className="eyebrow">{product.category} / New arrival</p>
                            <h1>{product.title}</h1>
                            <div className="rating" aria-label={`${product.rating} out of 5 stars`}><span>★</span> {product.rating} <small>({product.reviews?.length || 0} reviews)</small></div>
                            <p className="details-description">{product.description}</p>
                            <div className="purchase-row">
                                <p className="price">${product.price}</p>
                                <span className="stock">{product.stock} in stock</span>
                            </div>
                            <button className="add-button" onClick={() => props.addToCart?.(product)}>Add to cart <span aria-hidden="true">&#8594;</span></button>
                            <div className="product-notes">
                                <div><strong>Free delivery</strong><span>On orders over $50</span></div>
                                <div><strong>Easy returns</strong><span>30 days to change your mind</span></div>
                            </div>
                        </div>
                    </article>
                ) : <p className="loading-state">Finding your object...</p>}
            </div>
        </main>
    )
}