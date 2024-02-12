import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import { Contact }from './component/Contact';
import  './app.css';
import { useState } from 'react';
import LoginPage from './pages/doLogin';
import Regester from './pages/Regesterpage';

const Menu=()=> {
  const[isMobileMenu,SetMobileMenu] =useState(document.body.clientWidth>700?false:true);
 
  
    return <Fragment>
        <Router>
          {
          isMobileMenu && <button className='men-btn'>
              <span></span>
              <span></span>
              <span></span>
            </button>
          }
            <div ><Navbar/></div>
                <div >
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LoginPage  />} />
                    <Route path="/regester" element={<Regester />} />

                    <Route path="/" element={<Navigate to="/home" />}/>
                </Routes>
                </div>
            
        </Router>
      </Fragment>
}

export default Menu;
