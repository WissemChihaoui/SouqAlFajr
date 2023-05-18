import React from 'react'
import searchSplash from '../../assets/img/searchSplash.png'
import Cart from '../../assets/img/cart.png'
import Shopping from '../../assets/img/shopping.png'
const Steps = () => {
  return (
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
  )
}

export default Steps