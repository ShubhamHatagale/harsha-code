import React from 'react'
import './Component.css';
import ArrowR from '../img/arrowright.svg'
import { FadeInUpBtn } from './Animation';

export default function Newsletter() {
    return (
        <div>
            <div className="newsletter-container">
                        <div className="newsletter-flex">
                            <FadeInUpBtn>
                            <p>inbox to fashion box</p>
                            </FadeInUpBtn>
                            <FadeInUpBtn>
                            <h3>SIGN UP For</h3>
                            </FadeInUpBtn>
                            <FadeInUpBtn>
                            <h6>fashion tips, exclusive offers</h6>
                            </FadeInUpBtn>
                            <FadeInUpBtn>
                            <div>
                                <input type="text" placeholder="EMAIL ADDRESS" />
                                <button>Join <img src={ArrowR} /> </button>
                            </div>
                            </FadeInUpBtn>
                            <span>We'll keep you up to date by email and SMS. You can unsubscribe at any time, please read our Privacy Policy.</span>
                        </div>
                    </div>
        </div>
    )
}
