import React, { useState, useContext } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";
import { ValueContext } from "./Products";

function Button() {
  const { cart, handleValue } = useContext(CartContext);
  const array = useContext(ValueContext);
  let id = array.id;
  const [state, setState] = useState(true);
  const increment = () => {
    handleValue(cart + 1, array);
    setState(false);
  };
  const decrement = (e) => {
    handleValue(cart - 1, e.target.id);
    setState(true);
  };
  if (state) {
    return (
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a onClick={increment} className="btn btn-outline-dark mt-auto">
            Add to cart
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a
            id={id}
            onClick={decrement}
            className="btn btn-outline-dark mt-auto"
          >
            Remove from cart
          </a>
          <Link to="/Cart">
            <button className="btn btn-outline-dark mt-2" type="submit">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Button;
