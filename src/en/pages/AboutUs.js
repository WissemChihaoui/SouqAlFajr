import React from 'react'
import ContactUsIcon from '../comp/ContactUsIcon'
import Footer from '../comp/Footer'
import Navbar from '../comp/Navbar'
import screen1 from '../../assets/img/screen1.png'
import screen2 from '../../assets/img/screen2.png'
import screen3 from '../../assets/img/screen3.png'
import Steps from '../comp/Steps'
const AboutUs = () => {
  return (
    <>
    <Navbar />
    <ContactUsIcon />
    <div className='aboutus'>
        <header>
            <div className='ornageBlurBg' />
            <div className='content'>
                <h2>Shop local market products with ease <br />with Souq Al Fajr</h2>
                <div className='screens'>
                    <img src={screen1} />
                    <img src={screen2} />
                    <img src={screen3} />
                </div>
            </div>
            
        </header>
        <div className='container'>
        <div className='information'>
            <div>
                <h3>Fast and reliable delivery</h3>
                <p>This section can emphasize the app's commitment to fast and reliable delivery. Users can rest assured that their products will be delivered within 24 hours of placing their order, with delivery available throughout the local area. They can also track their delivery in real time and receive notifications when the products are on the way.</p>
            </div>
            <div>
                <h3>Discover local markets</h3>
                <p>The app's ability to connect users to local markets, allowing them to discover a wide range of fresh and high-quality products. Users can search by category or location, with the ability to view product details, photos and pricing information.</p>
            </div>
        </div>
        <div className='contactUs'>
            <h3>Contact US</h3>
            <form>
                <div className='inputField'>
                    <input type={'email'} placeholder='Email' />
                </div>
                <div className='inputField'>
                    <textarea placeholder='Message'></textarea>
                </div>
                
                
                <div className='submitBtn'>
                    <button type='submit'>Send</button>
                </div>
            </form>
        </div>
        <div className='adress'>
            <h3>Haraj Al Fajr Trading Company</h3>
            <p>Abdul Abdullah bin Abbas Street</p>
            <p>Riyadh</p>
            <p>Kingdom of Saudi Arabia</p>
            <p>info@harajalfajr.sa</p>
        </div>
        </div>
        
        <Steps />
    </div>
    <Footer />
    </>
  )
}

export default AboutUs