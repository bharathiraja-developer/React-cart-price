import React, { createContext } from "react";
import Star from "./Star";
import Button from "./Button";

const ValueContext = createContext();

function Products({
  id,
  mobileName,
  mobileDescription,
  mrpPrice,
  starRating,
  src,
  state,
}) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={src} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{mobileName}</h5>
            <Star rating={starRating} />${mrpPrice}
          </div>
        </div>
        <ValueContext.Provider
          value={{
            id,
            mobileName,
            mobileDescription,
            mrpPrice,
            starRating,
            src,
            state,
          }}
        >
          <Button />
        </ValueContext.Provider>
      </div>
    </div>
  );
}

export { Products as default, ValueContext };
