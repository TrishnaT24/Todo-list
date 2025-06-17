import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import Menu from "./Menu";
import Cards from "./Cards";
import Cart from "./Cart";
import Shop from "./Shop";
import Weather from "./Weather";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
function App() {
  const [cart, setCart] = useState([]);

  const handleCart = (val) => {
    setCart([...cart, val]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]); // <- add empty brackets here

  return (
    <div>
      <Router>
        <div>
          <Link to="/cart">
            <button>Cart</button>
          </Link>
          <Link to="/todo">
            <button>TODO LIST</button>
          </Link>
          <Link to="/menu">
            <button>DROP DOWN LIST</button>
          </Link>
          <Link to="/weather">
            <button>Weather app</button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Shop handleChange={handleCart} />} />
          <Route path="/cart" element={<Cart items={cart} />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
