import {React,useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const[isMobileMenu,SetMobileMenu] =useState(document.body.clientWidth>700?false:true);
 
    return (
        <div>
            <ol className={`${ isMobileMenu ? 'MobileMenu':'Menu'}`}>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ol>
        </div>
    );
}

export default Navbar;
