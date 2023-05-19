import React,{useState} from 'react'
import Navbar from '../comp/Navbar'
import Footer from '../comp/Footer'
import { Icon } from '@iconify/react';
import onion from '../../assets/img/onion.jpg'
import DeleteOrder from '../popups/DeleteOrder';
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
                <div className='shippingOptionsContainer'>
                    <ul>
                        <li>
                            <label>Shipping Riyad</label>
                            <span>1000 R.S</span>
                        </li>
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