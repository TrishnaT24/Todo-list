import React, { useState } from 'react'
import Todo from './Todo'
import Menu from './Menu'
import Cards from './Cards'
import Cart from './Cart'
import Shop from './Shop'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
function App() {
  const [cart,setCart]=useState([]);

    const handleCart=(val)=>{
    setCart([...cart,val]);
    console.log(cart);
  }
  return (
    <div>
      {/* <Todo></Todo> */}
      {/* <Menu></Menu> */}
      {/* <Shop></Shop> */}
      {/* <button>Cart</button> */}
      <Router>
        <div>
          <Link to="/cart">
          <button>Cart</button>
          </Link>
        </div>
        <Routes>
        <Route path="/" element={<Shop handleChange={handleCart}/>}/>
  <Route path="/cart" element={<Cart items={cart} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App