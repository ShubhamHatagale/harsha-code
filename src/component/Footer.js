import React from 'react'
import { FadeInLeft, FadeInRight, FadeInUpBtn } from './Animation';
import './Component.css';
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-grid-one">
                        <FadeInRight>
                            <h2>Stay in the loop</h2>
                        </FadeInRight>
                        <FadeInRight>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                        </FadeInRight>
                    </div>
                    <div className="footer-grid-two">
                        <p><Link style={{color:"black"}} to="/">Home</Link></p>
                        <p><Link style={{color:"black"}} to="/about">About</Link></p>
                        <p><Link style={{color:"black"}} to="/collection">Collection</Link></p>
                        <p><Link style={{color:"black"}} to="/products">Products</Link></p>

                    </div>
                    <FadeInLeft>
                        <div className="footer-grid-three">
                            <h3>Contact Us</h3>
                            <p>+91 9876543210</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr </p>
                            <ul className="social-ico-btns">
                                <li>
                                    <FaIcons.FaFacebook />
                                </li>
                                <li>
                                    <FaIcons.FaInstagram />
                                </li>
                                <li>
                                    <FaIcons.FaYoutube />
                                </li>
                            </ul>
                        </div>
                    </FadeInLeft>
                </div>

            </div>
            <div className="bottom-footer">
                <div>
                    <p>All rights reserved | Harsh Couture</p>
                </div>
                <div>
                    <p>Designed & Developed by Conversant Technologies</p>
                </div>
                <div className="botton-links">
                    <p>Privacy policy</p>
                    <p>terma and conditions</p>
                </div>
            </div>
        </div>
    )
}
