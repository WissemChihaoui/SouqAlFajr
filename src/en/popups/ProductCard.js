import React, {useState} from 'react'
import { Icon } from '@iconify/react';
import onion from '../../assets/img/onion.jpg'
const ProductCard = ({setIsOpen}) => {
  const [qte, setQte] = useState(0)
  const [available, setAvailable] = useState(false)
  const [openPrice, setOpenPrice] = useState(false)
  const handleQte=(x)=>{
    let sum = x+qte;
    if(sum >= 0){
      setQte(sum)
    }
  }
  return (
    <>
      <div className='darkBG' onClick={() => setIsOpen(false)} />
      <div className='modal centered'>
        <Icon icon="material-symbols:close-rounded" onClick={() => setIsOpen(false)}/>
        <div className='modalDetails'>
          <div className='modalPicture'>
            <div className='pictures'>
              <img src={onion} />
              <div className='productBadge soldOutProduct'>
                Sold Out Today!
            </div>
            </div>
            <div className='navgation'>
              <div className='navdot' />
            </div>
          </div>
          <div className='modalText'>
            <div className='title'>
              <div className='detailTitle'>
                Red Onion High Quality
              </div>
              <div className='unitPrice importantText'>
                2.99 R.S
                <sup>per kilo</sup>
              </div>
            </div>
            <div className='weight'>
              <span>Weight</span>
              <label>10 kg</label>
            </div>
            <div className='weight'>
              <span>Market</span>
              <label>Al Dammam</label>
            </div>
            <div className='priceSettings'>
              {available? (
                <>
                <div className='price'>
                <span>Price</span>
                <label className='importantText'>2.99 R.S</label>
              </div>
              <div className='settings'>
                <div className='settingsBtn' onClick={()=>handleQte(1)}>
                  <Icon icon="material-symbols:add" />
                </div>
                <span>{qte}</span>
                <div className='settingsBtn' onClick={()=>handleQte(-1)}>
                  <Icon icon="ic:sharp-minus" />
                </div>
              </div>
              </>
              ):
              (
                <div className='error'>Unfortunately product sold out for Today !</div>
              )}
              
            </div>
            <div className='pricing'>
              <div className='priceDetail'>
                <div className='priceDetailbtn'>
                <label onClick={()=> setOpenPrice(!openPrice)}>
                  Price Details
                  <Icon icon={openPrice? "material-symbols:arrow-drop-up-rounded":"material-symbols:arrow-drop-down-rounded"} />
                </label>
                <span>123456</span>
                </div>
                <table className={openPrice? 'priceDetailMenu active' :'priceDetailMenu'}>
                  <tr className='col'>
                    <td>Aucation Price</td>
                    <td></td>
                    <td>2.99 R.S</td>
                  </tr>
                  <tr className='col'>
                    <td>Platform</td>
                    <td>20%</td>
                    <td>2.99 R.S</td>
                  </tr>
                  <tr className='col'>
                    <td>Tax</td>
                    <td>15%</td>
                    <td>2.99 R.S</td>
                  </tr>
                </table>
                
                
              </div>
              <div className={available?'totalPrice':'disable'}>
                <label>Total Price</label>
                <span className='importantText'>
                  0 R.S
                </span>
              </div>
              <div className={available?'addToCartBtn':'disable'}>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard