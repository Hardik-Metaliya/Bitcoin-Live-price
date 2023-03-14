import React from "react";
// "USD": {
//     "code": "USD",
//     "symbol": "&#36;",
//     "rate": "24,193.3232",
//     "description": "United States Dollar",
//     "rate_float": 24193.3232
//   },

function Card({ currency, sym }) {
  return (
    <div className="card">
      <h4>{currency.code}</h4>
      <div className="details">
        <h3 className="rate">
          {" "}
          1 BTC = {sym}
          {currency.rate}
        </h3>
      </div>
    </div>
  );
}

export default Card;
