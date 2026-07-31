import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/navbar/navbar'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom'
import Category from './pages/category'
import Cart from './pages/cart'
import Details from './pages/details'

function App() {
  const [count, setCount] = useState(0)

  const[cart , setCart] = useState([])

    function addToCart(product) {
        setCart([...cart, product])
    }
  return (
    <>
    <div className="app">
      <NavBar Cart={`${cart.length}`}/>
      <Routes>
        <Route element={<Home addToCart={addToCart}/>} path="/"></Route>
        <Route element={<Category addToCart={addToCart}/>} path="/category/:categoryName"></Route>
        <Route element={<Cart Cart={cart}/>} path="/cart"></Route>
        <Route element={<Details />} path="/details/:id"></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
