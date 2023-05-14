import React,{ useState } from 'react';
import { Icon } from '@iconify/react';



const Navbar = () => {
    const [menuActive, setmenuActive] = useState(false);
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
                <div className='navbarItem button'>
                    <a href='#'>
                        <Icon icon="mdi:sign-in" />
                        <span>Sign in</span>
                    </a>
                </div>
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
                <div className='navbarItem button'>
                    <a href='#'>
                        <Icon icon="mdi:sign-in" />
                        <span>Sign in</span>
                    </a>
                </div>
                <div className='navbarItem'>
                    <a href='#'>
                        <span>AR</span>
                        <Icon icon="material-symbols:language" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar