import React from 'react'
import './Component.css';
import Prodimg1 from '../img/p55.jpg'
import Prodimg2 from '../img/p13.jpg'
import Prodimg3 from '../img/p24.jpg'
import Prodimg4 from '../img/p62.jpg'
import Prodimg5 from '../img/p29.jpg'
import ArrowR from '../img/arrowright.svg'
import { FadeInUpBtn } from './Animation';

export default function Instagram() {
    return (
        <div>
             <div className="insta-container">
                 <FadeInUpBtn>
                        <div className="insta-flex-container">
                                <div>
                                    <img src={Prodimg1} />
                                </div>
                                <div>
                                    <img src={Prodimg3} />
                                </div>
                                <div className="insta-link">
                                    <p>Instagram</p>
                                    <img src={Prodimg2} /> 
                                    <div className="follow-btn-cnt">
                                    <button>Follow <img src={ArrowR} /></button>
                                    </div>
                                </div>
                                <div>
                                    <img src={Prodimg4} />
                                </div>
                                <div>
                                    <img src={Prodimg5} />
                                </div>
                        </div>
                        </FadeInUpBtn>
                    </div>
        </div>
    )
}
