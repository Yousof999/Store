import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Card from "../../components/card"
import './category.css'

export default function Category(props) {

    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const params = useParams()

    useEffect(() => {
        let isActive = true
        async function loadProducts() {
            setError(null)
            try {
                const response = await fetch(`https://dummyjson.com/products/category/${params.categoryName}`)
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`)
                }
                const data = await response.json()
                if (isActive) {
                    setProducts(data.products)
                }
            } catch (error) {
                if (isActive) {
                    setError(error instanceof Error ? error.message : 'An unexpected error occurred')
                }
            }
        }
        loadProducts()
        return () => {
            isActive = false
        }
    },[params.categoryName])

    const categoryName = params.categoryName.replaceAll('-', ' ')

    return (
        <main className="category-page">
            <div className="container">
                <Link className="category-back" to="/">&#8592; All products</Link>
                <header className="category-header">
                    <div>
                        <p className="eyebrow">A considered selection</p>
                        <h1>{categoryName}</h1>
                    </div>
                    <p className="category-description">Objects chosen for their function, feel, and ability to make the everyday a little better.</p>
                </header>
                <div className="category-toolbar">
                    <span>{products.length ? `${products.length} pieces` : 'Curating selection'}</span>
                    <span className="toolbar-rule"></span>
                    <span>Shop / {categoryName}</span>
                </div>
                <div className="category-grid">
                    {error
                        ? <p role="alert">Unable to load products: {error}</p>
                        : products.map((product) => <Card key={product.id} addToCart={props.addToCart} product={product} />)}
                </div>
            </div>
        </main>
    )
}