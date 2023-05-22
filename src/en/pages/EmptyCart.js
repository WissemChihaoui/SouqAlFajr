import React from 'react'
import Background from "../../assets/img/background.png";
import Cart from "../../assets/img/cart.png";
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
const EmptyCart = () => {
  return (
    <div>
        <div className="page">
    <Navbar />
    <div className="cart">
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
    </div>
      
    <Footer />
    </div>
  </div>
  )
}

export default EmptyCart