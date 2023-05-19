import React, { useState, useRef } from 'react';
import Navbar from '../comp/Navbar'
import phoneV from '../../assets/img/phoneV.png'
import Timer from '../../assets/lib/Timer';
import Footer from '../comp/Footer';
import { useNavigate } from "react-router-dom";
const PhoneVerifaction = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const inputRefs = useRef([]);
    const handleTimeout = () => {
        // Handle the timeout event
        console.log('Time is up!');
      };
      const navigate = useNavigate();
        const handleSignup = ()=>{
        navigate('/register')
}
    const handleInputChange = (e, index) => {
        const { value } = e.target;
        if (value.length > 1) {
          // Only allow single digits
          return;
        }
        const updatedCode = [...code];
        updatedCode[index] = value;
        setCode(updatedCode);
        if (index < inputRefs.current.length - 1 && value) {
            inputRefs.current[index + 1].focus();
          }
        };
  return (
    <div className='page'>
        <Navbar />
        <div className='phoneV'>
            <div className='phoneVContainer'>
                <img src={phoneV} />
                <form>
                    <h3>Phone number verifaction</h3>
                    <div className="phrase">
                        <p>We sent a verification SMS to your phone number </p>
                        <p>Enter Code</p>
                    </div>
                    <div className='inputs'>
                    {code.map((digit, index) => (
                            <input
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            value={digit}
                            onChange={(e) => handleInputChange(e, index)}
                            maxLength={1}
                            />
                        ))}
                    </div>
                    <div className='timer'>
                        <Timer duration={5} onTimeout={handleTimeout} />
                        &nbsp;minutes
                    </div>
                    <div className='btnSubmit'>
                        <button type='submit' className='submit' onClick={()=>handleSignup()}>Sign up</button>
                        <div className='signup'>Did not recieve the code ? <a href='#'>Resend</a></div>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default PhoneVerifaction