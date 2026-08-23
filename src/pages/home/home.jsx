import { useEffect, useState } from "react"
import Card from "../../components/card";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home(props) {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        fetch('https://dummyjson.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data)=> {
            setProducts(data.products)
        });
    },[])

    const featuredProduct = products[0]
    const categoryLinks = [
        ["Tech", "laptops"],
        ["Home", "furniture"],
        ["Beauty", "beauty"],
        ["Accessories", "womens-jewellery"],
    ]

    return (
        <main className="home-page">
            <section className="home-hero container">
                <div className="hero-copy">
                    <h1>Good things,<br /><em>well chosen.</em></h1>
                    <p className="hero-intro">A considered collection of useful objects, quiet luxuries, and little upgrades for the way you live now.</p>
                    <a className="hero-link" href="#collection">Shop the collection <span aria-hidden="true">&#8594;</span></a>
                </div>
                <div className="hero-art" style={featuredProduct ? { backgroundImage: `url(${featuredProduct.thumbnail})` } : undefined}>
                    <span className="hero-stamp">New<br />arrivals</span>
                    <div className="hero-caption"><span>01</span> Objects with a point of view</div>
                </div>
            </section>

            <section className="category-strip container" aria-label="Browse categories">
                <span className="strip-label">Browse by mood</span>
                <div className="category-links">
                    {categoryLinks.map(([label, category]) => <Link key={category} to={`/category/${category}`}>{label}</Link>)}
                </div>
            </section>

            <section className="collection container" id="collection">
                <div className="section-heading">
                    <div>
                        <p className="eyebrow">Fresh on the shelves</p>
                        <h2>All products</h2>
                    </div>
                    <span className="product-count">{products.length ? `${products.length} pieces` : "Curating now"}</span>
                </div>
                <div className="product-grid">
                    {products.map((product) => <Card key={product.id} addToCart={props.addToCart} product={product} />)}
                </div>
            </section>
        </main>
    )
}