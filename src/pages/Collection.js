import React, {useState, useEffect, setState} from 'react'
import './Collection.css'
import Collecimg from '../img/p12.jpg'
import Collecimg4 from '../img/p20.jpg'
import Collecimg5 from '../img/p62.jpg'
import SecondColle from '../img/p12.jpg'
import Circle from '../img/circlename.svg'
import Btn from '../img/abt-btn.svg'
import Point from '../img/arrow-point.svg'
import Browncircle from '../img/brown-circle-line.svg'
import Graycircle from '../img/gray-line-circle.svg'
import Singlewave from '../img/single-wave.svg'
import Star from '../img/line-star.svg'
import Arrow from '../img/arrow-b.svg'
import Outline from '../img/logo_outline-ff.svg'
import Prodimg1 from '../img/3.jpg'
import Prodimg2 from '../img/4.jpg'
import Prodimg3 from '../img/p5.jpg'
import Prodimg4 from '../img/p17.jpg'
import Prodimg5 from '../img/p8.jpg'
import Prodimg6 from '../img/p17.jpg'
import Prodimg7 from '../img/p21.jpg'
import Prodimg8 from '../img/p27.jpg'
import Prodimg9 from '../img/p28.jpg'
import Prodimg10 from '../img/p38.jpg'
import Prodimg11 from '../img/p49.jpg'
import Prodimg12 from '../img/p54.jpg'
import Prodimg13 from '../img/p56.jpg'
import Prodimg14 from '../img/p58.jpg'
import Prodimg15 from '../img/p60.jpg'
import BLogoCircle from '../img/bclogo.svg'
import Collecimg1 from '../img/col-img1.jpg'
import Collecimg2 from '../img/col-img2.jpg'
import Colbtn from '../img/col-btn.svg'
import Dot from '../img/7-back.jpg'

import ArrowR from '../img/arrowright.svg'
import ArrowRS from '../img/arrow-right.svg'
import ArrowLS from '../img/arrow-left.svg'
import Header from '../component/Header'
import Newsletter from '../component/Newsletter';
import Instagram from '../component/Instagram';
import Footer from '../component/Footer';
import WhiteClogo from '../img/wclogo.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FadeInDown, FadeInText, FadeInUp, FadeInImg, FadeInUpBtn, FadeInRight, FadeInLeft } from '../component/Animation'

export default function Collection() {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      const CustomButtonGroupAsArrows = ({ next, previous }) => {
        return (
          <div
            
          >

<div className="prod-btn-cont">
                        <div className="prod-view-btn">
                            <button>view all <img src={ArrowR} /> </button>
                        </div>
                        <div className="prod-cntl-btn">
                        <button onClick={previous}><img src={ArrowRS} /> </button>
                 <button onClick={next}><img src={ArrowLS} /> </button>
                        </div>
                    </div>

           
           
            {/* <button onClick={previous}>Prev</button>
            <button >Next</button> */}
          </div>
        );
      };

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
                     </div> ) : (
            <div>
                <Header />
            <section className="collec-home">
                <div className="collec-container">
                    <div className="collec-title">
                        <p>Collection </p>
                        
                    </div>
                    
                    <img src={Circle} className="collec-circle-img" />
                   
                    <div className="collec-img-continer">
                    <div className="images-collec-flex">
                        <FadeInUp>
                        <img src={Collecimg} className="coll-left-img"/>
                        <img src={Collecimg4} className="coll-center-img"/>
                        <img src={Collecimg5} className="coll-right-img"/>
                     
                        </FadeInUp>
                        </div>
                        

                        {/* <FadeInText>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, dolore magna</p>
                        </FadeInText> */}
                        
                    </div>

                    
                </div>
            </section>

            <section>
            <div className="col-bg">
                    <div>
                        <div className="col-container">
                            <FadeInLeft>
                            <img src={SecondColle} className="col-img1" />
                            </FadeInLeft>
                            
                            <div className="coll-cen-text">
                                <FadeInUp>
                            <p>
                            Every day is a fashion show and the world is your runway
                            </p>
                            </FadeInUp>
                            <img src={Arrow} />
                            <h4 className="col-nor-text">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, dolore magna
                            consetetur sadipscing elitr, dolore magna
                            </h4>
                            <img src={BLogoCircle} className="col-circle-logo" />
                            </div>
                            </div>
                           
                        
                            
                            
                        
                        
                        
                    </div>
                </div>
            </section>

          

            

            <section>
                <div className="coll-center-title-quote">
                    <img src={Star} className="star-oneimg"/>
                    <img src={Singlewave} className="wave-img-bg"/>
                    <div className="coll-quote-text">
                    <FadeInUpBtn>
                    <p>Our best</p>
                    <h3>COLLECTIONS</h3>
                    </FadeInUpBtn>
                    </div>
                
                    <img src={Arrow} />
                </div>
            </section>

           

            <section>
                <div className="collection-flex-container">
                    <div className="collection-flex-box1">
                        <img src={Collecimg1} />
                        <FadeInUpBtn>
                        <div className="collection-cen-text">
                        <p>Ethnic wear</p>
                        <div>
                        
                        <button><img src={Colbtn} /><br/>SEE MORE</button>
                        </div>
                        </div>
                        </FadeInUpBtn>
                    </div>
                    <div className="collection-flex-box2">
                        <img src={Collecimg2} />
                        <FadeInUpBtn>
                        <div className="collection-cen-text2">
                        <p>Western wear</p>
                        <div>
                        <button><img src={Colbtn} /><br/>SEE MORE</button>
                        </div>
                        </div>
                        </FadeInUpBtn>
                    </div>

                </div>
            </section>

            <section>
                <div className="coll-center-title-quote">
                    <img src={Star} className="star-oneimg"/>
                    <img src={Singlewave} className="wave-img-bg"/>
                    <div className="coll-quote-text">
                    <FadeInUpBtn>
                    <p>Our best</p>
                    <h3>PRODUCTS</h3>
                    </FadeInUpBtn>
                    </div>
                
                    <img src={Arrow} />
                </div>
            </section>


            <section>
                     <div>
                    <div className="col-products-container">
                       
                        <div className="col-prod-scroll-container">
                    
                            <div className="col-prod-imgs-list">
                           

                            <Carousel 
                                    responsive={responsive}
                                    swipeable={true}
                                    draggable={false}
                                    showDots={false}
                                    infinite={true}
                                    autoPlay={true}
                                    autoPlaySpeed={2000}
                                    keyBoardControl={true}
                                    customTransition="transform 500ms ease-in-out"
                                    transitionDuration={1000}
                                    containerClass="carousel-container"
                                    removeArrowOnDeviceType={["tablet", "mobile"]}
                                   
                                    
                                    arrows={false} renderButtonGroupOutside={true} customButtonGroup={<CustomButtonGroupAsArrows />}>
                                
                                <div>
                                    <img src={Prodimg1} />
                                </div>
                                <div>
                                    <img src={Prodimg2} />
                                </div>
                                <div>
                                    <img src={Prodimg3} />
                                </div>
                                <div>
                                    <img src={Prodimg4} />
                                </div>
                                <div>
                                    <img src={Prodimg5} />
                                </div>
                                <div>
                                    <img src={Prodimg6} />
                                </div>
                                <div>
                                    <img src={Prodimg7} />
                                </div>
                                <div>
                                    <img src={Prodimg8} />
                                </div>
                                <div>
                                    <img src={Prodimg9} />
                                </div>
                                <div>
                                    <img src={Prodimg10} />
                                </div>
                                <div>
                                    <img src={Prodimg11} />
                                </div>
                                <div>
                                    <img src={Prodimg12} />
                                </div>
                                <div>
                                    <img src={Prodimg13} />
                                </div>
                                <div>
                                    <img src={Prodimg14} />
                                </div>
                                <div>
                                    <img src={Prodimg15} />
                                </div>
                              
                            </Carousel>
                               

                              
                            </div>
                            
                        </div>
                    </div>
                    {/* <div className="col-prod-btn-cont">
                        <div className="col-prod-view-btn">
                            <button>view all <img src={ArrowR} /> </button>
                        </div>
                        <div className="col-prod-cntl-btn">
                            <button><img src={ArrowRS} /> </button>
                            <button><img src={ArrowLS} /> </button>
                        </div>
                    </div> */}
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