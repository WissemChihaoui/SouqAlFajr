import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import { Icon } from "@iconify/react";
const FilterSection = ({ setFilterSectionOpen }) => {
  const [rangeMin, setRangeMin] = useState(1);
  const [rangeMax, setRangeMax] = useState(50);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState([])
  const [selectAll, setSelectAll] = useState(false);
  const [selectMarketAll, setSelectMarketAll] = useState(false);

  const [showProduct, setShowProduct] = useState(true)
  const [showMarket, setShowMarket] = useState(true)
const [selectedOnDemand, setSelectedOnDemand] = useState(false)
const productType = [
  "Tomato",
  "Carrot",
  "Cucumber",
  "Potato",
  "Broccoli",
  "Spinach",
  "Eggplant",
  "Bell Pepper",
  "Zucchini",
  "Onion",
  "Radish",
  "Lettuce",
  "Cabbage",
  "Celery",
  "Mushroom"
];

  const marketOptions=["Riyadh", "Jeddah", "Al Khobar", "Al Dammam","Mahdia","Monastir","Sousse","Sfax","Tunis"];
  const [selectedAvailability, setSelectedAvailability] = useState(false)
  const [selectAllAvaialability, setSelectAllAvaialability] = useState(false)
  useEffect(() => {
    if (selectedProducts.length === productType.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedProducts, productType]);

  useEffect(()=>{
    if(selectedAvailability && selectedOnDemand){
        setSelectAllAvaialability(true)
    }else{
        setSelectAllAvaialability(false)
    }
  })

  useEffect(() => {
    if (selectedMarket.length === marketOptions.length) {
        setSelectMarketAll(true);
    } else {
        setSelectMarketAll(false);
    }
  }, [selectedProducts, productType]);

  const handleSliderAfterChange = (values) => {
    if (values[0] >= values[1]) {
      setRangeMin(values[1]-1);
      setRangeMax(values[1])
    }
  };

  const handleBadgeSelect = (badgeType) => {
    setSelectedAvailability(badgeType);
  };

  const handleItemClick = (product) => {
    if (selectedProducts.includes(product)) {
      setSelectedProducts(selectedProducts.filter((item) => item !== product));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const selectAllAvailability = () =>{
    if(selectAllAvaialability){
        setSelectedAvailability(false)
        setSelectedOnDemand(false)
        setSelectAllAvaialability(false)
    }else{
        setSelectedAvailability(true)
        setSelectedOnDemand(true)
        setSelectAllAvaialability(true)
    }
  }

  const handleOptionClick = (option) => {
    if (selectedMarket.includes(option)) {
      setSelectedMarket(selectedMarket.filter((item) => item !== option));
    } else {
      setSelectedMarket([...selectedMarket, option]);
    }
  };

  const handleRangeChange = (values) => {
    if(values[0]!==values[1]){
      setRangeMin(values[0]);
      setRangeMax(values[1]);
    }
   
  };
  const handleSelectMarketAll = () =>{
    if (selectMarketAll) {
        setSelectedMarket([])
    } else {
        setSelectedMarket(marketOptions)
    }
    setSelectMarketAll(!selectMarketAll)
  }

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(productType);
    }
    setSelectAll(!selectAll);
  };

  return (
    <>
      <div className="filterBar">
        <div className="header">
          <h3>Filter Search</h3>
          <div
            className="navbarMenuExit"
            onClick={() => setFilterSectionOpen(false)}
          >
            <Icon icon="material-symbols:close-rounded" />
          </div>
        </div>
        <div className="filterOptionContainer">
          <div className="filterTitle">
            <h3>Price per Killogram</h3>
          </div>
          <div className="filterInputs w-80">
            <Slider
              range
              min={0}
              max={50}
              draggableTrack={false}
              defaultValue={[rangeMin, rangeMax]}
              onChange={handleRangeChange}
              onAfterChange={handleSliderAfterChange}
              trackStyle={[{ backgroundColor: "orange" }]}
              handleStyle={[
                { borderColor: "orange" },
                { borderColor: "orange" },
              ]}
              allowCross={false}
            />
            <div className="rangeValues">
              <span className="minValue">{rangeMin} R.S</span>
              <span className="maxValue">{rangeMax} R.S</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="filterOptionContainer">
          <div className="filterTitle">
            <h3>Product Type</h3>
            <div className="optionSettings">
              <a href="#" onClick={handleSelectAll}>
                {selectAll ? "Deselect All" : "Select All"}
              </a>
              <Icon icon="carbon:dot-mark" />
              <button className="expandBtn" onClick={()=>setShowProduct(!showProduct)}>
              {showProduct? "Show All" : "Show Less"}
                <Icon icon={showProduct? "material-symbols:arrow-drop-down-rounded" : "material-symbols:arrow-drop-up-rounded"}/>
              </button>
            </div>
          </div>
          <div className={`filterInputs ${showProduct ? 'hidden-over' : 'scroll'}`} >
            <div className="optionBadgeContainer">
              {productType.map((product, index) => (
                <div
                  key={index}
                  onClick={() => handleItemClick(product)}
                  className={`badge ${
                    selectedProducts.includes(product) ? "active" : ""
                  }`}
                >
                  {product}
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="filterOptionContainer">
          <div className="filterTitle">
            <h3>Origin Market</h3>
            <div className="optionSettings">
              <a href="#" onClick={handleSelectMarketAll}> {selectMarketAll ? 'Deselect All' : 'Select All'}</a>
              <Icon icon="carbon:dot-mark" />
              <button className="expandBtn" onClick={()=>setShowMarket(!showMarket)}>
                {showMarket ? "Show All" : "Show Less"}
                <Icon icon={showMarket? "material-symbols:arrow-drop-down-rounded" : "material-symbols:arrow-drop-up-rounded"} />
              </button>
            </div>
          </div>
          <div className={`filterInputs ${showMarket ? 'hidden-over' : 'scroll'}`} >
            <div className="optionBadgeContainer">
            {marketOptions.map((option, index) => (
            <div
              key={index}
              className={`badge ${selectedMarket.includes(option) ? 'active' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="filterOptionContainer">
          <div className="filterTitle">
            <h3>Availability</h3>
            <div className="optionSettings">
              <a href="#" onClick={selectAllAvailability}> {selectAllAvaialability ? 'Diselect All' : 'Select All'}</a>
              <Icon icon="carbon:dot-mark" />
              <button className="expandBtn">
                Show All
                <Icon icon="material-symbols:arrow-drop-down-rounded" />
              </button>
            </div>
          </div>
          <div className="filterInputs">
            <div className="optionBadgeContainer">
              <div className={`badge ${selectedAvailability? 'active' : ''}`}  onClick={() => setSelectedAvailability(!selectedAvailability)}>Available</div>
              <div className={`badge ${selectedOnDemand ? 'active' : ''}`}  onClick={() => setSelectedOnDemand(!selectedOnDemand)}>On Demand</div>
            </div>
          </div>
        </div>
        <div className="submitBtn">
          <button className="submit">Apply Filter</button>
          <button className="reset">Reset</button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
