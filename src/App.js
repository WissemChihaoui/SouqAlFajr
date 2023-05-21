import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Register from './en/pages/Register'
import './assets/css/style.css'
// import './assets/css/bootstrapBase.css'
import PasswordReset from './en/pages/PasswordReset';
import Home from './en/pages/Home';
import PhoneVerifaction from './en/pages/PhoneVerifaction';
import AboutUs from './en/pages/AboutUs';
import Profile from './en/pages/Profile';
import Cart from './en/pages/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/password-reset' exact element={<PasswordReset />}/>
          <Route path='/phone-verifaction' exact element={<PhoneVerifaction />}/>
          <Route path='/about-us' exact element={<AboutUs />}/>
          <Route path='/profile' exact element={<Profile />}/>
          <Route path='/cart' exact element={<Cart />}/>
          <Route path='/register' exact element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
