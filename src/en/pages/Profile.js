import React,{useState} from 'react'
import Footer from '../comp/Footer';
import Navbar from "../comp/Navbar";
import { Icon } from '@iconify/react';
import ReactFlagsSelect from "react-flags-select";
import countryPhoneCodes from '../../assets/lib/PhoneCode'
import countries from '../../assets/lib/Countries'

const Profile = () => {
    const [selected, setSelected] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(" ");
    const [oldPswHide, setOldPswHide] = useState(true)
    const [newPswHide, setNewPswHide] = useState(true)
    const [confirmPswHide, setConfirmPswHide] = useState(true)
    const [profileEdit, setProfileEdit] = useState(false)

    const handleProfileEdit = () =>{
        if(profileEdit){
            //Edit Profile
        }else{
            setProfileEdit(true)
        }
    }
    console.log(profileEdit)
  return (
    <div className='page'>
        <Navbar />
        <div className='profileContainer'>
            <div className='container'>
                <h2>Profile</h2>
                <form className={profileEdit? '' : 'disabledForm'}>
                    <div className='table-row'>
                        <div className='input-control'>
                            <label>First Name</label>
                            <div className='input'>
                                <Icon icon="ph:user-light" />
                                <input type={'text'} placeholder="First Name" disabled={!profileEdit}/>
                            </div>
                        </div>
                        <div className='input-control'>
                            <label>Last Name</label>
                            <div className='input'>
                                <Icon icon="ph:user-light" />
                                <input type={'text'} placeholder="Last Name" disabled={!profileEdit}/>
                            </div>
                        </div>
                    </div>
                    <div className='table-row'>
                        <div className='input-control'>
                            <label>Phone Number</label>
                            <div className='input'>
                            <div className='selectWrapper'>
                            <ReactFlagsSelect
                                onSelect={code => setSelected(code)}
                                selected={selected}
                                customLabels={countryPhoneCodes}
                                placeholder="Phone Code"
                                disabled={!profileEdit}
                            />
                            
                            </div>
                            
                            <input type="text" id="phoneNumber" name="phoneNumber" placeholder='Phone Number' disabled={!profileEdit}/>

                            </div>
                        </div>
                        <div className='input-control'>
                            <label>Email</label>
                            <div className='input'>
                                <Icon icon="ic:outline-email" />
                                <input type={'text'} placeholder="Email" disabled={!profileEdit}/>
                            </div>
                        </div>
                    </div>
                    <div className='table-row'>
                        <div className='input-control'> 
                            <label>Country</label>
                            <div className='input'>
                                <ReactFlagsSelect
                                    onSelect={code => setSelectedCountry(code)}
                                    selected={selectedCountry}
                                    disabled={!profileEdit}
                                    placeholder="Country"
                                />
                            </div>
                        </div>
                        <div className='input-control'>
                            <label>City</label>
                            <div className='input'>
                               
                                <input type={'text'} placeholder="City" disabled={!profileEdit}/>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    <div className='submitBtn table-row'>
                        <button type='submit' className='table-cell' onClick={()=>handleProfileEdit()}>Edit</button>
                    </div>
                </form>
            </div>
            <div className='container'>
                <h2>Change Password</h2>
                <form>
                    
                    <div className='table-row'>
                        <div className='input-control'>
                            <div className='input'>
                            <Icon icon="mdi:password-outline" />
                            <input type={oldPswHide ? "password" : "text"} placeholder="Old Password" />
                            <Icon icon={oldPswHide ? "mdi:eye-outline" :"mdi:eye-off-outline"} onClick={() => setOldPswHide(!oldPswHide)}/>
                            </div>
                            
                        </div>
                    </div>
                    <div className='table-row'>
                        <div className='input-control'>
                            <div className='input'>
                            <Icon icon="mdi:password-outline" />
                            <input type={newPswHide ? "password" : "text"} placeholder="New Password" />
                            <Icon icon={newPswHide ? "mdi:eye-outline" :"mdi:eye-off-outline"} onClick={() => setNewPswHide(!newPswHide)}/>
                            </div>
                            
                        </div>
                        <div className='input-control'>
                            <div className='input'>
                            <Icon icon="mdi:password-outline" />
                            <input type={confirmPswHide ? "password" : "text"} placeholder="Confirm Password" />
                            <Icon icon={confirmPswHide ? "mdi:eye-outline" :"mdi:eye-off-outline"} onClick={() => setConfirmPswHide(!confirmPswHide)}/>
                            </div>
                            
                        </div>
                    </div>
                    <div className='submitBtn table-row'>
                        <button type='submit' className='table-cell'>Change Password</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Profile