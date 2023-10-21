import React, { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";

const CartContext = createContext();
let cartArray = [];

function App() {
  const [cart, setCart] = useState(0);

  const handleValue = (value, array) => {
    setCart(value);
    if (cart < value) {
      cartArray.push(array);
    } else {
      let index = cartArray
        .map(function (e) {
          if (e.id == array) {
            return cartArray.indexOf(e);
          }
        })
        .filter((point) => point >= 0);

      cartArray.splice(index[0], 1);
    }
  };
  return (
    <CartContext.Provider value={{ cart, handleValue, cartArray }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export { App as default, cartArray, CartContext };
