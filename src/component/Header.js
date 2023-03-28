import React, {useState, useEffect} from 'react'
import './Component.css';
import {BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import HeadLogo from '../img/logo.svg'
import * as FaIcons from 'react-icons/fa'
import { FadeInDown } from './Animation';
import Model from './Model';

export default function Header() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground)

    return (

        <section>
              

            <FadeInDown>
              
        <div className="navbar">
           
      
            <div className={navbar ? "nav-header active" : "nav-header"}>
            <div className="header-logo">
                    <Link to="/"> <img src={HeadLogo} className="navlogo" /></Link>
                    </div>
                    <div className="nav-link-head">
                    <Link to="/about" className="nav-links"><span>About</span></Link>
                    <Link to="/collection" className="nav-links"><span>Collection</span></Link>

                    <Link to="/products" className="nav-links"><span >Products</span></Link>
                    <Link to="/contact" className="nav-links"><span >Contact</span></Link>
                  
                    <Model />
                    </div>
                    
            </div>
            <div>
                    <Link to='#' className="menu-bars">
                            <FaIcons.FaBars onClick={showSidebar} className="menu-toggle"  />
                        
                        
                        </Link>
                </div>
        </div>

        </FadeInDown>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
    
                  

                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <FaIcons.FaTimes className="close-btn" />
                        </Link>
                    </li>
                    
                    {/* <ul className="mobile-nav-links-con"> */}
                        <li className="mob-links-btns1">
                    <Link to="/" ><span>Home</span></Link>
                    </li>
                    <li className="mob-links-btns">
                    <Link to="/about"><span>About</span></Link>
                    </li>
                    <li className="mob-links-btns">
                    <Link to="/collection"><span>Collection</span></Link>
                  </li>
                    
                    <li className="mob-links-btns">
                    <Link to="/products" ><span>Products</span></Link>
                    </li>
                    <li className="mob-links-btns">
                    <Link to="/contact" ><span>Contact</span></Link>
                    </li>
            <br/>
            <br/>
            <br/>
                    <ul className="nav-social-items">
                    <li>
                        <FaIcons.FaFacebookF />
                    </li>
                    <li>
                        <FaIcons.FaInstagram />
                    </li>
                    <li>
                        <FaIcons.FaTwitter />
                    </li>
                </ul>
                        
                </ul>
                <div>
                
                
                {/* <div className="social-content">
                    <p>
                        Harsha
                        </p>
                    <span>
                    couture
                    </span>
                </div> */}
                </div>
                
            </nav>
        
        </section>


        
    )
}
