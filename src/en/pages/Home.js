import React, { useState } from 'react';
import Footer from "../comp/Footer";
import Navbar from "../comp/Navbar";
import { Icon } from '@iconify/react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import fruit from "../../assets/img/fruit.png"
import fish from "../../assets/img/fish.png"
import vegetable from "../../assets/img/vegetable.png"
import dates from "../../assets/img/dates.png"
import ShopCard from '../comp/ShopCard';
const Home = () => {
    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(100);
    const handleRangeChange = (values) => {
        // values[0] represents the minimum value
        // values[1] represents the maximum value
        setRangeMin(values[0]);
        setRangeMax(values[1]);
      };
  return (
    <div>
        <Navbar />
        <div className='searchBar'>
            <div className='searchBarContainer'>
                <div className='inputField'>
                    <input placeholder='Search here ...' type={'text'} />
                    <Icon icon="ri:search-line" />
                </div>
            </div>
        </div>

        <div className='home'>
            <div className='homeContainer'>
                <div className='filterBar'>
                    <div className='filterOptionContainer'>
                        <div className='filterTitle'>
                            <h3>Price per Killogram</h3>
                        </div>
                        <div className='filterInputs'>
                        <Slider
                            range
                            min={0}
                            max={100}
                            defaultValue={[rangeMin, rangeMax]}
                            onChange={handleRangeChange}
                            trackStyle={[{ backgroundColor: 'orange' }]}
                            handleStyle={[{ borderColor: 'orange' }, { borderColor: 'orange' }]}
                        />
                        <div className='rangeValues'>
                            <span className='minValue'>{rangeMin} R.S</span>
                            <span className='maxValue'>{rangeMax} R.S</span>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div className='filterOptionContainer'>
                        <div className='filterTitle'>
                            <h3>Product Type</h3>
                            <div className='optionSettings'>
                                <a href='#'>Select All</a>
                                <Icon icon="carbon:dot-mark" />
                                <button className='expandBtn'>
                                    Show All
                                    <Icon icon="material-symbols:arrow-drop-down-rounded" />
                                </button>
                            </div>
                        </div>
                        <div className='filterInputs'>
                            <div className='optionBadgeContainer'>
                                <div className='badge active'>
                                    Tomato
                                </div>
                                <div className='badge'>
                                    Carrot
                                </div>
                                <div className='badge'>
                                    Cucamber
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='filterOptionContainer'>
                    <div className='filterTitle'>
                            <h3>Origin Market</h3>
                            <div className='optionSettings'>
                                <a href='#'>Select All</a>
                                <Icon icon="carbon:dot-mark" />
                                <button className='expandBtn'>
                                    Show Less
                                    <Icon icon="material-symbols:arrow-drop-up-rounded" />
                                </button>
                            </div>
                        </div>
                        <div className='filterInputs'>
                            <div className='optionBadgeContainer'>
                                <div className='badge'>
                                    Riyadh
                                </div>
                                <div className='badge'>
                                    Jeddah
                                </div>
                                <div className='badge'>
                                    Al Khobar
                                </div>
                                <div className='badge'>
                                    Al Dammam
                                </div>
                                <div className='badge'>
                                    Al Dammam
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='filterOptionContainer'>
                        <div className='filterTitle'>
                            <h3>Availability</h3>
                        </div>
                        <div className='filterInputs'>
                            <div className='optionBadgeContainer'>
                                <div className='badge'>
                                    Available
                                </div>
                                <div className='badge'>
                                    On Demand
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className='homeShow'>
                    <div className='categories'>
                        <div className='categorie'>
                            <div className='categorieIcon' style={{'backgroundColor':'#f0f9f0'}}>
                                <img src={vegetable} />
                            </div>
                            <span>Vegetable</span>
                        </div>
                        <div className='categorie'>
                            <div className='categorieIcon' style={{'backgroundColor':'#FFE9E5'}}>
                                <img src={fruit} />
                            </div>
                            <span>Fruit</span>
                        </div>
                        <div className='categorie'>
                            <div className='categorieIcon' style={{'backgroundColor':'#FFF6E3'}}>
                                <img src={dates} />
                            </div>
                            <span>Dates</span>
                        </div>
                        <div className='categorie'>
                            <div className='categorieIcon' style={{'backgroundColor':'#F1FCFD'}}>
                                <img src={fish} />
                            </div>
                            <span>Fish</span>
                        </div>
                    </div>
                    <div className='homeContent'>
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                        <ShopCard />
                    </div>  
                        
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Home