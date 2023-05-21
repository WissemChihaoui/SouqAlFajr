import React, { useState } from "react";
import onion from "../../assets/img/onion.jpg";
const ShopCard = ({ openModal }) => {
  const handleClick = () => {
    // Invoke the openModal function passed from Component B
    openModal(true);
  };
  return (
    <div className="shopCard">
      <div className="imageContent">
        <img src={onion} />
        <div className="productBadge availableProduct">Available</div>
      </div>
      <div className="details">
        <div className="detailsInfo">
          <div className="detailTitle">Red Onion High Quality</div>
          <div className="detailWeight">
            10<small>Kg</small>
          </div>
          <div className="detailDelivery">
            <span>Al Dammam</span>
            <div className="Price importantText">
              2.99 SAR
              <small>/Kg</small>
            </div>
          </div>
        </div>
        <div className="shopBtn">
          <button onClick={handleClick}>
            <label>Auction Price</label>
            <span>
              2.99 SAR<small>/Kg</small>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
