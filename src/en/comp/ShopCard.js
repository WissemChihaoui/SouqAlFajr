import React,{useState} from 'react'
import onion from '../../assets/img/onion.jpg'
const ShopCard = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div className='shopCard' onClick={()=> setIsOpen(true)}>
        <div className='imageContent'>
            <img src={onion} />
            <div className='productBadge availableProduct'>
                Available
            </div>
        </div>
        <div className='details'>
            <div className='detailsInfo'>
                <div className='detailTitle'>
                    Red Onion High Quality
                </div>
                <div className='detailWeight'>
                    10<sup>Kg</sup>
                </div>
                <div className='detailDelivery'>
                    <span>Al Dammam</span>
                    <div className='Price importantText'>
                        2.99 SAR 
                        <sup>/Kg</sup>
                    </div>
                </div>
            </div>
            <div className='shopBtn'>
                <button >
                    <label>Auction Price</label>
                    <span>2.99 SAR<sup>/Kg</sup></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ShopCard