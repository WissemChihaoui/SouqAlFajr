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
import searchSplash from '../../assets/img/searchSplash.png'
import Cart from '../../assets/img/cart.png'
import Shopping from '../../assets/img/shopping.png'
import ProductCard from '../popups/ProductCard';
const Home = () => {
    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(100);
    const [isOpen, setIsOpen] = useState(true);
    const handleRangeChange = (values) => {
    
        setRangeMin(values[0]);
        setRangeMax(values[1]);
      };
  return (
    <div style={{"position":"relative"}}>
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
                        
                    </div>  
                        
                </div>
            </div>
        </div>
        <div className='aboutHome'>
            <div className='aboutHomeContainer'>
                <div className='aboutInfo'>
                    <img src={searchSplash} />
                    <div className='textContent'>
                        <h3>Create an account</h3>
                        <p>Once you find the products you want to buy, simply click the "Add to cart" button to add to your cart. You can keep browsing and adding products to your cart until you are ready to check. When you are ready to pay, simply click on the shopping cart code of the page and follow the instructions to complete the purchase</p>
                    </div>
                </div>
                <div className='aboutInfo'>
                    <img src={Cart} />
                    <div className='textContent'>
                        <h3>Add products to your cart and pay</h3>
                        <p> Create an account on our website fast and easy. Just click the "Register" button on the top right corner of the home page and follow the instructions. Once you create an account, you can start browsing our website to find the products you need. You can use the search bar to find certain products or browse different categories to explore our selection.</p>
                    </div>
                </div>
                <div className='aboutInfo'>
                    <img src={Shopping} />
                    <div className='textContent'>
                        <h3>Shipping</h3>
                        <p>We partner with many shipping companies to ensure that your products are delivered to you safely and quickly. When you check out, you will have the option to choose your shipping company and your preferred method. If you have any questions or concerns about shipping, please do not hesitate to contact our customer support team.</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

        <a className='contactSupport' href='#'>
            <div className='content'>
                <Icon icon="mdi:customer-service" />
                <span>Contact</span>
            </div>
        </a>
        {isOpen && <ProductCard setIsOpen={setIsOpen} />}
    </div>
  )
}

export default Home