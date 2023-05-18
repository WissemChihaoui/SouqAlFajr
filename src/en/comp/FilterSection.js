import React, { useState } from 'react';
import Slider from 'rc-slider';
import { Icon } from '@iconify/react';
const FilterSection = ({setFilterSectionOpen}) => {
    const [rangeMin, setRangeMin] = useState(0);
    const [rangeMax, setRangeMax] = useState(100);
    const handleRangeChange = (values) => {
    
        setRangeMin(values[0]);
        setRangeMax(values[1]);
    };
  return (
    <>
   
    <div className='filterBar'>
        <div className='header'>
            <h3>Filter Search</h3>
            <div className='navbarMenuExit' onClick={() =>(setFilterSectionOpen(false))}>
                    <Icon icon="material-symbols:close-rounded" />
            </div>
        </div>
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
    <div className='submitBtn'>
        <button className='submit'>Apply Filter</button>
        <button className='reset'>Reset</button>
    </div>
</div>


</>
  )
}

export default FilterSection