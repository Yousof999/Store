import { Link } from "react-router-dom";
import './navbar.css'
import { use, useEffect, useState } from "react";

export default function NavBar(props) {
    const[category, setCategory] = useState([])
    useEffect(()=> {
        fetch('https://dummyjson.com/products/category-list')
        .then(res => res.json())
        .then(data =>{
        setCategory(data)
        });

        let List = document.querySelector("ul")
        List.style.top = "-1500px"
        console.log(props)
    },[])
    return(
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="btn btn-primary" onClick={()=> {
                    let List = document.querySelector("ul")
                    if(List.style.top == "-1500px") {
                        List.style.top = "60px"
                    } else {
                        List.style.top = "-1500px"
                    }                    
                }}>Categories</button>
                <ul>
                    {
                        category.map((category)=>{
                            return(
                                <li><Link onClick={()=> {
let List = document.querySelector("ul")
                                    List.style.top = "-1500px"
                                }} to={`/category/${category}`} class=" category text-decoration-none">{category}</Link></li>
                            )
                        })
                    }
                </ul>
                <Link id="Cart-btn" className="nav-link" to="/cart">Cart {props.Cart}</Link>
            </div>                                    
        </nav>
    )
}