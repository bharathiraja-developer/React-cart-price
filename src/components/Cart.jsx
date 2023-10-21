import React, { createContext, useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const TotalContext = createContext();

function Cart() {
  let { cartArray } = useContext(CartContext);
  let cartTotal = 0;
  let effect = useEffect(() => {
    for (let i = 1; i < cartArray.length + 1; i++) {
      cartArray[i - 1].newPrice = cartArray[i - 1].mrpPrice;
      cartTotal = cartTotal + cartArray[i - 1].mrpPrice;
    }
  }, []);
  for (let i = 1; i < cartArray.length + 1; i++) {
    cartTotal = cartTotal + cartArray[i - 1].mrpPrice;
  }
  const [Total, setTotal] = useState(cartTotal);

  const CalculateTotal = (value, id) => {
    let newValue = 0;
    for (let i = 1; i < cartArray.length + 1; i++) {
      let temporary = 0;
      if (Number(id) == cartArray[i - 1].id) {
        temporary = value * cartArray[i - 1].mrpPrice;
        cartArray[i - 1].newPrice = temporary;
      }
    }
    for (let i = 1; i < cartArray.length + 1; i++) {
      newValue = newValue + cartArray[i - 1].newPrice;
    }

    setTotal(newValue);
  };

  return (
    <TotalContext.Provider value={{ Total, setTotal, CalculateTotal }}>
      <div className="container-fluid mt-2 ms-2 me-2">
        {cartArray.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <CartTotal />
      </div>
    </TotalContext.Provider>
  );
}

export { Cart as default, TotalContext };
