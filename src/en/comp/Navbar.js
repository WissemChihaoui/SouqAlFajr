import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Login from "../popups/Login";

const Navbar = () => {
  const [menuActive, setmenuActive] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [signupDemand, setSignupDemand] = useState(false);
  const handleLoginPopup = (signup) => {
    setLoginPopup(true);
    if (signup) {
      setSignupDemand(true);
    } else {
      setSignupDemand(false);
    }
  };
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <a className="navbarLogo importantText" href="/">
          Souq Al Fajr
        </a>
        <div className="navbarItems">
          <div className="navbarItem">
            <a href="/about-us">About Us</a>
          </div>
          <div className="navbarItem">
            <a href="/cart">
              <Icon icon="ic:outline-shopping-cart" />
              <span>Cart</span>
            </a>
          </div>
          <div className="navbarItem">
            <a href="#" onClick={() => handleLoginPopup(true)}>
              <Icon icon="mdi:user-add-outline" />
              <span>Sign up</span>
            </a>
          </div>
          <button
            className="navbarItem button"
            onClick={() => handleLoginPopup(false)}
          >
            <a href="#">
              <Icon icon="mdi:sign-in" />
              <span>Sign in</span>
            </a>
          </button>
          <div className="navbarItem">
            <a href="#">
              <span>AR</span>
              <Icon icon="material-symbols:language" />
            </a>
          </div>
        </div>
        <div className="menuIcon" onClick={() => setmenuActive(true)}>
          <Icon icon="material-symbols:menu" />
        </div>
      </div>
      <div className={menuActive ? "navbarMenu active" : "navbarMenu"}>
        <div className="navbarHeader">
          <h3 className="importantText">Souq Al Fajr</h3>
          <div className="navbarMenuExit" onClick={() => setmenuActive(false)}>
            <Icon icon="material-symbols:close-rounded" />
          </div>
        </div>
        <hr />
        <div className="navbarItems">
          <div className="navbarItem">
            <a href="#">About us</a>
          </div>
          <hr />
          <div className="navbarItem">
            <a href="#">
              <Icon icon="ic:outline-shopping-cart" />
              <span>Cart</span>
            </a>
          </div>
          <hr />
          <div className="navbarItem">
            <a href="#">
              <Icon icon="mdi:user-add-outline" />
              <span>Sign up</span>
            </a>
          </div>
          <hr />
          <button className="navbarItem button">
            <a href="#">
              <Icon icon="mdi:sign-in" />
              <span>Sign in</span>
            </a>
          </button>
          <hr />
          <div className="navbarItem">
            <a href="#">
              <span>AR</span>
              <Icon icon="material-symbols:language" />
            </a>
          </div>
        </div>
      </div>
      {loginPopup && (
        <Login setLoginPopup={setLoginPopup} signupDemand={signupDemand} />
      )}
    </div>
  );
};

export default Navbar;
