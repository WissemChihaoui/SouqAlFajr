import React,{useState} from 'react'
import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'
import { Icon } from '@iconify/react';
import onion from '../../assets/img/onion.jpg'
import DeleteOrder from '../popups/DeleteOrder';
import CartOption from '../comp/CartOption';
import ShippingOption from '../comp/ShippingOption';
const Cart = () => {
    const [deleteOrder, setDeleteOrder] = useState(false)
    const [qte, setQte] = useState(0)
    const handleQte=(x)=>{
        let sum = x+qte;
        if(sum >= 0){
          setQte(sum)
        }
      }
      
  return (
    <div className='page'>
        <Navbar />
        <div className='cart'>
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
                                    <div className='deleteBtn' onClick={()=>setDeleteOrder(true)}>
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
                            <CartOption />
                        </li>
                        <li>
                            <div className='details'>
                                <div className='imageSection'>
                                    <div className='deleteBtn' onClick={()=>setDeleteOrder(true)}>
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
                            <CartOption />
                        </li>
                        <li>
                            <div className='details'>
                                <div className='imageSection'>
                                    <div className='deleteBtn' onClick={()=>setDeleteOrder(true)}>
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
                            <CartOption />
                        </li>
                        <li>
                            <div className='details'>
                                <div className='imageSection'>
                                    <div className='deleteBtn' onClick={()=>setDeleteOrder(true)}>
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
                            <CartOption />
                        </li>
                        <li>
                            <div className='details'>
                                <div className='imageSection'>
                                    <div className='deleteBtn' onClick={()=>setDeleteOrder(true)}>
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
                            <CartOption />
                        </li>
                        <li>
                            <div className='details'>
                                <div className='imageSection'>
                                    <div className='deleteBtn' onClick={()=>setDeleteOrder(true)}>
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
                            <CartOption />
                        </li>
                      
                    </ul>
                </div>
            </div>
            <div className='shippingContainer'>
                <div className='title'>
                    <Icon icon="la:shipping-fast" />
                    <h2>Shipping Options</h2>
                </div>
                <div className='shippingOptionsContainer'>
                    <ul>
                        <ShippingOption />
                        <ShippingOption />
                        <ShippingOption />
                        <ShippingOption />
                        <ShippingOption />
                        
                    </ul>
                </div>
                <div className='invoiceDetails'>
                    <div className='title'>
                        <Icon icon="basil:invoice-outline" />
                        <h2>Invoice Details</h2>
                    </div>
                    <div className='invoiceDetailsContainer'>
                        <ul>
                            <li><label>Purchases</label><span className='importantText'>130 R.S</span></li>
                            <li><label>Shipping</label><span className='importantText'>60 R.S</span></li>
                            <li><label>Delivery</label><span className='importantText'>60 R.S</span></li>
                            <li><label>Total</label><span className='importantText'>1000 R.S</span></li>
                            <li>
                                <Icon icon="mdi:warning-circle-outline" />
                                <label>All prices including Taxes</label>
                            </li>
                        </ul>
                    </div>
                    <div className='paymentBtn'>
                        <button>Payment</button>
                    </div>
                </div>
            </div>
        </div>
        {deleteOrder && <DeleteOrder setDeleteOrder={setDeleteOrder}/>}
        <Footer />
    </div>
  )
}

export default Cart