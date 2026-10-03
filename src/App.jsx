import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/navbar/navbar'
import Home from './pages/home/home'
import { Route, Routes } from 'react-router-dom'
import Category from './pages/category/category'
import Cart from './pages/cart/cart'
import Details from './pages/details/details'
import Footer from './components/footer/footer'

function App() {
  const[cart , setCart] = useState([])

    function addToCart(product) {
        setCart([...cart, product])
    }

    function removeFromCart(index) {
      setCart(cart.filter((_, productIndex) => productIndex !== index))
    }

    function clearCart() {
      setCart([])
    }
  return (
    <>
    <div className="app">
      <NavBar Cart={`${cart.length}`}/>
      <Routes>
        <Route element={<Home addToCart={addToCart}/>} path="/"></Route>
        <Route element={<Category addToCart={addToCart}/>} path="/category/:categoryName"></Route>
        <Route element={<Cart Cart={cart} removeFromCart={removeFromCart} clearCart={clearCart}/>} path="/cart"></Route>
        <Route element={<Details addToCart={addToCart} />} path="/details/:id"></Route>
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App
