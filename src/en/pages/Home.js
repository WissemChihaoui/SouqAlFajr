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

import ProductCard from '../popups/ProductCard';
import Steps from '../comp/Steps';
import ContactUsIcon from '../comp/ContactUsIcon';
import EmptySearch from '../comp/EmptySearch';
import FilterSection from '../comp/FilterSection';
const Home = () => {
    const [filterSectionOpen, setFilterSectionOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    
    
    const openModal = (newState) => {
        setIsOpen(newState);
    };
  return (
    <div style={{"position":"relative"}}>
        <Navbar />
        <div className='searchBar'>
            <div className='filterDisplayBtn' onClick={()=>setFilterSectionOpen(true)}>
                <Icon icon="system-uicons:filtering" />
            </div>
            <div className='searchBarContainer'>
                <div className='inputField'>
                    <input placeholder='Search here ...' type={'text'} />
                    <Icon icon="ri:search-line" />
                </div>
            </div>
        </div>

        <div className='home'>
            <div className='homeContainer'>
                <div className='hidden'>
                    <FilterSection />
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
                        <EmptySearch />
                        
                    </div>  
                        
                </div>
            </div>
        </div>
        <Steps />
        {filterSectionOpen && <FilterSection setFilterSectionOpen={setFilterSectionOpen}/>}
        <Footer />

        <ContactUsIcon />
        {isOpen && <ProductCard setIsOpen={setIsOpen} />}
    </div>
  )
}

export default Home