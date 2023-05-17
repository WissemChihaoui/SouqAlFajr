import React,{useState} from 'react'
import { Icon } from '@iconify/react';
import Select from 'react-select';
import ReactFlagsSelect from "react-flags-select";
import countryPhoneCodes from '../../assets/lib/PhoneCode'

const Login = ({setLoginPopup}) => {
const [pswHide, setPswHide] = useState(true)
const [selected, setSelected] = useState("");
const [signupAsk, setSignupAsk] = useState(false)
  return (
    <>
        <div className='darkBG' onClick={() => setLoginPopup(false)} />
        <div className='modalLogin centered z-100'>
            <Icon icon="material-symbols:close-rounded" onClick={() => setLoginPopup(false)}/>
            <form>
                <div className='logo importantText'>
                    Souq Al Fajr
                </div>
                <h3>
                    Welcome !
                </h3>
                <p>Login to enjoy the features of the application</p>
                <div className='inputs'>
                    <div className='phoneNumWrapper input'>
                        <div className='selectWrapper'>
                        <ReactFlagsSelect
                            onSelect={code => setSelected(code)}
                            selected={selected}
                            customLabels={countryPhoneCodes}
                            placeholder=""
                        />
                           
                        </div>
                        
                        <input type="text" id="phoneNumber" name="phoneNumber" placeholder='Phone Number'/>
                    </div>
                    <div className='input2'>
                        <div className='inputField'>
                            <Icon icon="mdi:password-outline" />
                            <input type={pswHide ? "password" : "text"} placeholder="Confirm password" />
                            <Icon icon={pswHide ? "mdi:eye-outline" :"mdi:eye-off-outline"} onClick={() => setPswHide(!pswHide)}/>
                        </div>
                        <a href='#'>Forgot Password?</a>
                    </div>
                    
                </div>
                <button type='submit' className='submit'>Login</button>
                <div className='signup'>Do not have an account ? <a href='#' onClick={()=>setSignupAsk(true)}>Sign up</a></div>
            </form>
        </div>
    </>
  )
}

export default Login