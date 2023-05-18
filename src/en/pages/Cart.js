import React,{useState} from 'react'
import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'
import { Icon } from '@iconify/react';
import onion from '../../assets/img/onion.jpg'
const Cart = () => {
    const [qte, setQte] = useState(0)
    const handleQte=(x)=>{
        let sum = x+qte;
        if(sum >= 0){
          setQte(sum)
        }
      }
  return (
    <div>
        <Navbar />
        <div className='Cart'>
            <div className='cartContainer'>
                <div className='title'>
                 <Icon icon="ic:outline-shopping-cart" />
                 <h2>Cart</h2>
                </div>
                <div className='container'>
                    <ul>
                        <li>
                            <div className='details'>
                                <div className='imageSection'>
                                    <div className='deleteBtn'>
                                        <Icon icon="material-symbols:delete-outline" />
                                    </div>
                                    <img src={onion} />
                                </div>
                                <div className='textSection'>
                                    <h6>Red Onion High Quality</h6>
                                    <label>10 kg</label>
                                    <label>Al Dammam</label>
                                    <label>2.99 R.S <span>/kg</span></label>
                                </div>
                            </div>
                            <div className='settings'>
                                <label>2.99 RS</label>
                                <div className='qte'>
                                    <div className='settingsBtn' onClick={()=>handleQte(1)}>
                                        <Icon icon="material-symbols:add" />
                                    </div>
                                    <span>{qte}</span>
                                    <div className='settingsBtn' onClick={()=>handleQte(-1)}>
                                        <Icon icon="ic:sharp-minus" />
                                    </div>
                                </div>
                                <label>100 Kg</label>
                                <label className='importantText'>29.99 R.S</label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='shippingContainer'>
                <div className='title'>
                    <Icon icon="la:shipping-fast" />
                    <h2>Shipping Options</h2>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart