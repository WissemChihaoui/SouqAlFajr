import React, { useState } from "react";
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
import { Icon } from "@iconify/react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import fruit from "../../assets/img/fruit.png";
import fish from "../../assets/img/fish.png";
import vegetable from "../../assets/img/vegetable.png";
import dates from "../../assets/img/dates.png";
import ShopCard from "../comp/ShopCard";
import ShopCardSO from "../comp/ShopCardSO";

import ProductCard from "../popups/ProductCard";
import ProductCardSO from "../popups/ProductCardSO";
import Steps from "../comp/Steps";
import ContactUsIcon from "../comp/ContactUsIcon";
import EmptySearch from "../comp/EmptySearch";
import FilterSection from "../comp/FilterSection";

const Home = () => {
  let currentRow = 1;
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterSectionOpen, setFilterSectionOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSo, setIsOpenSo] = useState(false);

  const openModal = (newState) => {
    setIsOpen(newState);
  };
  const openModalSo = (newState) => {
    setIsOpenSo(newState);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div className="searchBar">
        <div
          className="filterDisplayBtn"
          onClick={() => setFilterSectionOpen(true)}
        >
          <Icon icon="system-uicons:filtering" />
        </div>
        <div className="searchBarContainer">
          <div className="inputField">
            <input placeholder="Search here ..." type={"text"} />
            <Icon icon="ri:search-line" />
          </div>
        </div>
      </div>
      <div className="containerFluid">
        <div className="mainRow">
          <div className="filterRow hidden">
            <FilterSection />
          </div>
          <div className="shopRow">
            <div className="container">
              <div className="categories">
                <div className="categorieRow">
                  <div
                    className={`categorie ${
                      selectedCategory === "vegetable" ? "active" : ""
                    }`}
                    onClick={() => handleCategorySelect("vegetable")}
                  >
                    <div
                      className="categorieIcon"
                      style={{ backgroundColor: "#f0f9f0" }}
                    >
                      <img src={vegetable} />
                    </div>
                    <span>Vegetable</span>
                  </div>
                </div>
                <div className="categorieRow">
                  <div
                    className={`categorie ${
                      selectedCategory === "fruit" ? "active" : ""
                    }`}
                    onClick={() => handleCategorySelect("fruit")}
                  >
                    <div
                      className="categorieIcon"
                      style={{ backgroundColor: "#FFE9E5" }}
                    >
                      <img src={fruit} />
                    </div>
                    <span>Fruit</span>
                  </div>
                </div>
                <div className="categorieRow">
                  <div
                    className={`categorie ${
                      selectedCategory === "dates" ? "active" : ""
                    }`}
                    onClick={() => handleCategorySelect("dates")}
                  >
                    <div
                      className="categorieIcon"
                      style={{ backgroundColor: "#FFF6E3" }}
                    >
                      <img src={dates} />
                    </div>
                    <span>Dates</span>
                  </div>
                </div>
                <div className="categorieRow">
                  <div
                    className={`categorie ${
                      selectedCategory === "fish" ? "active" : ""
                    }`}
                    onClick={() => handleCategorySelect("fish")}
                  >
                    <div
                      className="categorieIcon"
                      style={{ backgroundColor: "#F1FCFD" }}
                    >
                      <img src={fish} />
                    </div>
                    <span>Fish</span>
                  </div>
                </div>
              </div>
              <div className="cards">
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCardSO openModal={openModalSo} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCardSO openModal={openModalSo} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
                <div className="card">
                  <div className="cardContainer">
                    <ShopCard openModal={openModal} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Steps />
      {filterSectionOpen && (
        <FilterSection setFilterSectionOpen={setFilterSectionOpen} />
      )}
      <Footer />

      <ContactUsIcon />
      {isOpen && <ProductCard setIsOpen={setIsOpen} />}
      {isOpenSo && <ProductCardSO setIsOpenSo={setIsOpenSo} />}
    </div>
  );
};

export default Home;
