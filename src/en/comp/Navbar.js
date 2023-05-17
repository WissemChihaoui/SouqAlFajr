import React,{ useState } from 'react';
import { Icon } from '@iconify/react';
import Login from '../popups/Login';



const Navbar = () => {
    const [menuActive, setmenuActive] = useState(false);
    const [loginPopup, setLoginPopup] = useState(false)
    const handleLoginPopup =()=>{
        setLoginPopup(!loginPopup);
    }
  return (
    <div className='navbar'>
        <div className='navbarContainer' >
            <div className='navbarLogo importantText'>
                Souq Al Fajr
            </div>
            <div className='navbarItems'>
                <div className='navbarItem'>
                    <a href='#'>About Us</a>
                </div>
                <div className='navbarItem'>
                    <a href='#'>
                        <Icon icon="ic:outline-shopping-cart" />
                        <span>Cart</span>
                    </a>
                </div>
                <div className='navbarItem'>
                    <a href='#'>
                        <Icon icon="mdi:user-add-outline" />
                        <span>Sign up</span>
                    </a>
                </div>
                <button className='navbarItem button' onClick={()=>setLoginPopup(!loginPopup)}>
                    <a href='#'>
                        <Icon icon="mdi:sign-in" />
                        <span>Sign in</span>
                    </a>
                </button>
                <div className='navbarItem'>
                    <a href='#'>
                        <span>AR</span>
                        <Icon icon="material-symbols:language" />
                    </a>
                </div>
            </div>
            <div className='menuIcon' onClick={() =>(setmenuActive(true))}>
                <Icon icon="material-symbols:menu" />
            </div>
        </div>
        <div className={menuActive ? "navbarMenu active" : "navbarMenu"}>
            <div className='navbarMenuExit' onClick={() =>(setmenuActive(false))}>
                <Icon icon="material-symbols:close-rounded" />
            </div>
            <div className='navbarItems'>
                <div className='navbarItem'>
                    <a href='#'>About us</a>
                </div>
                <div className='navbarItem'>
                    <a href='#'>
                        <Icon icon="ic:outline-shopping-cart" />
                        <span>Cart</span>
                    </a>
                </div>
                <div className='navbarItem'>
                    <a href='#'>
                        <Icon icon="mdi:user-add-outline" />
                        <span>Sign up</span>
                    </a>
                </div>
                <button className='navbarItem button' >
                    <a href='#' >
                        <Icon icon="mdi:sign-in" />
                        <span>Sign in</span>
                    </a>
                </button>
                <div className='navbarItem'>
                    <a href='#'>
                        <span>AR</span>
                        <Icon icon="material-symbols:language" />
                    </a>
                </div>
            </div>
        </div>
        {loginPopup && <Login setLoginPopup={setLoginPopup}/>}
    </div>
  )
}

export default Navbar