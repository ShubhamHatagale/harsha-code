import React, { useState, useEffect, setState } from 'react'
import './Contact.css'
import ContactImg from '../img/prodhome.jpg'
import Circle from '../img/circlename.svg'
import ArrowR from '../img/arrowright.svg'
import { FadeInUpBtn } from '../component/Animation'
import Header from '../component/Header'
import Newsletter from '../component/Newsletter';
import Instagram from '../component/Instagram';
import Footer from '../component/Footer';
import WhiteClogo from '../img/wclogo.svg'

export default function Contact() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <div>

            {
                loading ? (
                    <div className="loader">
                        <div className="loding-content">
                            {/* <img src={Circle} />
                            <img src={Outline} /> */}
                            <img src={WhiteClogo} />
                        </div>
                    </div>) : (
                    <div>
                        <Header />
                        <section className="contact-home">
                            <div className="contact-container">
                                <div className="contact-title">
                                    <p>Contact <br /> Us </p>

                                </div>
                                {/* <img src={Circle} className="product-circle-img" /> */}
                                <div className="contact-us-continer">

                                    <div className="contact-us-box">

                                        <div className="contact-grid-container">
                                            <div>
                                                <img src={ContactImg} />
                                            </div>
                                            <div className="contact-input-fields">
                                                <div>
                                                    <h3>Get in touch with us</h3>
                                                    <p>Fill the details correctly to get a reply </p>
                                                </div>
                                                <div className="sm-input-fields">
                                                    <input type='text' placeholder="First Name" />
                                                    <input type='text' placeholder="Last Name" />
                                                </div>
                                                <input type='text' placeholder="Email" />
                                                <input type='text' placeholder="Subject" />
                                                <textarea placeholder="Description"></textarea>
                                                    <button >Submit <img src={ArrowR} /> </button>

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </section>


                        <section>
                            <div>
                                {/* <p>MAPS</p> */}
                                <br></br>
                            </div>
                        </section>
                        <Newsletter />

                        <Footer />

                    </div>
                )

            }
        </div>

    )
}