import { Link } from "react-router-dom";
import './navbar.css'
import { useEffect, useState } from "react";

export default function NavBar(props) {
    const [category, setCategory] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    useEffect(()=> {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(data =>{
        setCategory(data)
        });
    },[])
    return(
        <nav className="site-nav">
            <div className="nav-inner container">
                <Link className="nav-brand" to="/" onClick={() => setIsOpen(false)}><span>O</span>rdinary<br /><i>objects.</i></Link>
                <div className="nav-actions">
                    <button className={isOpen ? "category-toggle open" : "category-toggle"} onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="category-menu">
                        <span className="toggle-icon"><i></i><i></i></span> Browse categories
                    </button>
                    <Link className="cart-link" to="/cart"><span>Cart</span><b>{props.Cart}</b></Link>
                </div>
                <ul id="category-menu" className={isOpen ? "category-menu open" : "category-menu"}>
                    {
                        category.map((category)=>{
                            return(
                                <li key={category}><Link onClick={() => setIsOpen(false)} to={`/category/${category}`} className="category">{category.replaceAll('-', ' ')}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}