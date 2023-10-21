import React, { useContext, useState } from "react";
import { TotalContext } from "./Cart";
function CartItem({ item }) {
  const { Total, setTotal, CalculateTotal } = useContext(TotalContext);
  const perPrice = item.mrpPrice;
  const [perTotal, setPerTotal] = useState(perPrice);
  return (
    <div className="row mb-2">
      <div className="col-6 d-flex justify-content-start">
        <img style={{ width: "60%" }} src={item.src}></img>
        <div>
          <h4 className="ms-2">{item.mobileName}</h4>
          <p className="ms-2">{item.mobileDescription}</p>
        </div>
      </div>
      <div className="col-6">
        <p className="d-flex justify-content-end pe-4 mt-4">
          Price : $ {item.mrpPrice}
        </p>

        <div className="d-flex justify-content-end pe-4">
          <select
            onChange={(e) => {
              let newValue = e.target.value * perPrice;
              setPerTotal(e.target.value * perPrice);
              CalculateTotal(e.target.value, item.id);
            }}
            defaultValue="1"
            className="form-select text-center p-0 me-2"
            size="1"
            style={{ width: "70px", height: "30px" }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <p>$ {perTotal}</p>
        </div>
        <p className="d-flex justify-content-end pe-4 mt-4 text-danger">
          Remove
        </p>
      </div>
    </div>
  );
}

export default CartItem;
