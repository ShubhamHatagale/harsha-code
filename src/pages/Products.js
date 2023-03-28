import React, { useState, useEffect, setState } from 'react'
import './Products.css'
import Prodimg1 from '../img/p8.jpg'
import Prodimg2 from '../img/p17.jpg'
import Prodimg3 from '../img/p21.jpg'
import Prodimg4 from '../img/p26.jpg'
import Prodimg5 from '../img/p31.jpg'
import Prodimg6 from '../img/p34.jpg'
import Prodimg7 from '../img/p38.jpg'
import Prodimg8 from '../img/p44.jpg'
import Prodimg9 from '../img/p49.jpg'
import Prodimg10 from '../img/p52.jpg'
import Prodimg11 from '../img/p54.jpg'
import Prodimg12 from '../img/p56.jpg'
import Prodimg13 from '../img/p59.jpg'
import Prodimg14 from '../img/p60.jpg'
import Prodimg15 from '../img/p63.jpg'
import ProdHome from '../img/prodhome.jpg'
import Circle from '../img/circlename.svg'
import Singlewave from '../img/single-wave.svg'
import Star from '../img/line-star.svg'
import Arrow from '../img/arrow-b.svg'
import { FadeInRight, FadeInUpBtn } from '../component/Animation'
import Header from '../component/Header'
import Newsletter from '../component/Newsletter';
import Instagram from '../component/Instagram';
import Footer from '../component/Footer';
import WhiteClogo from '../img/wclogo.svg'
import { Link } from 'react-router-dom'

export default function Products() {

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
                        <section className="product-home">
                            <div className="product-container">
                                <div className="product-title">
                                    <p>Products </p>

                                </div>
                                <img src={Circle} className="product-circle-img" />
                                <div className="product-img-continer">

                                    <img src={ProdHome} />


                                    <FadeInRight>
                                        <div className="prod-img-text" >
                                            <h3 style={{overflow:"hidden"}}>Fashion is a  <br /> instant language</h3>
                                            <p style={{overflow:"hidden"}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun</p>
                                        </div>
                                    </FadeInRight>

                                </div>

                            </div>
                        </section>

                        {/* <section>
                <div className="abt-center-title-quote">
                    <img src={Star} className="star-oneimg"/>
                    <img src={Singlewave} className="wave-img-bg"/>
                    <div className="abt-quote-text">
                    <p>Life is too short</p>
                    <h3>to wear boring cloths</h3>
                    </div>
                    <img src={Star} className="star-twoimg"/>
                </div>
            </section> */}

                        <section>
                            <div className="abt-center-title-quote">
                                <img src={Star} className="star-oneimg" />
                                <img src={Singlewave} className="wave-img-bg" />
                                <FadeInUpBtn>
                                    <div className="prod-quote-text">
                                        <p>check our</p>
                                        <h3>Products</h3>
                                    </div>
                                </FadeInUpBtn>
                                <img src={Arrow} />
                            </div>
                        </section>




                        <section>
                            <div className="prod-container">

                                <div className="prod-flex-container">

                                    <FadeInUpBtn>
                                        <div>
                                            <Link to="/productdetails">
                                                <img src={Prodimg1} />
                                            </Link>
                                            <p>Style Name</p>
                                            <h3>Name</h3>

                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <Link to="/productdetails">
                                                <img src={Prodimg11} />
                                            </Link>
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>

                                        <div>
                                            <Link to="/productdetails">
                                                <img src={Prodimg2} />
                                            </Link>
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <Link to="/productdetails">
                                                <img src={Prodimg12} />
                                            </Link>
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <Link to="/productdetails">
                                                <img src={Prodimg3} />
                                            </Link>
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg13} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg4} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg14} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg5} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg15} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg6} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg12} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg7} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg14} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg8} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg11} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg9} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg14} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg10} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>
                                    <FadeInUpBtn>
                                        <div>
                                            <img src={Prodimg11} />
                                            <p>Style Name</p>
                                            <h3>Name</h3>
                                        </div>
                                    </FadeInUpBtn>


                                </div>
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
