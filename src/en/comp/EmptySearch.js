import React from "react";
import Background from "../../assets/img/background.png";
import Cart from "../../assets/img/cart.png";
const EmptySearch = () => {
  return (
    <div className="emptySearch">
      <img src={Background} className="background" />
      <div className="container">
        <img src={Cart} />
        <div>
          <h2>No product for specific options</h2>
          <button>Find Other Products</button>
        </div>
      </div>
    </div>
  );
};

export default EmptySearch;
