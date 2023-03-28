import React, {useState, useEffect, setState} from 'react'
import {View, Animated, Easing} from 'react';
import './Home.css';
import FirstImg from '../img/first.jpg'
import SndImg from '../img/p20-1.jpg'
import Circle from '../img/circlename.svg'
import Btn from '../img/btn.svg'
import Outline from '../img/logo_outline-ff.svg'
import Fourthimg from '../img/p4.jpg'
import Fifthimg from '../img/p57.jpg'
import Thirdimg from '../img/6-1.jpg'
import Line from '../img/line.svg'
import Arrow from '../img/arrow.svg'
import ArrowR from '../img/arrowright.svg'
import ArrowRS from '../img/arrow-right.svg'
import ArrowLS from '../img/arrow-left.svg'
import WhiteClogo from '../img/wclogo.svg'
import BLogoCircle from '../img/bclogo.svg'
import Dot from '../img/7-back.jpg'
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
import Collimg2 from '../img/p13.jpg'
import Collimg3 from '../img/p33.jpg'
import Collimg4 from '../img/p55.jpg'
import Collimg5 from '../img/p62.jpg'
import Deer from '../img/deer.svg'

import Header from '../component/Header'
import Newsletter from '../component/Newsletter';
import Instagram from '../component/Instagram';
import Footer from '../component/Footer';

import {BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
// import { Carousel } from '@trendyol-js/react-carousel';
import ReactLoading from 'react-loading';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { FadeInDown, FadeInText, FadeInUp, FadeInImg, FadeInUpBtn, FadeInLeft, FadeInRight } from '../component/Animation'



export default function Home() {

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

    const [imgHover, setImgHover] = useState(false);
    function handleMouseEnter() {
        setImgHover(true)
        // this.setState({imageSrc: 'dummySrc1'});
     }
     function handleMouseLeave() {
        setImgHover(false)
        setImgHover1(false)
        setImgHover2(false)
        setImgHover3(false)
     }
     const [imgHover1, setImgHover1] = useState(false);
     function handleMouseEnter1(e) {
        setImgHover1(true)
        // this.setState({imageSrc: 'dummySrc1'});
     }
     
     const [imgHover2, setImgHover2] = useState(false);
     function handleMouseEnter2(e) {
        setImgHover2(true)
        // this.setState({imageSrc: 'dummySrc1'});
     }
     const [imgHover3, setImgHover3] = useState(false);
     function handleMouseEnter3(e) {
        setImgHover3(true)
        // this.setState({imageSrc: 'dummySrc1'});
     }


    function hideImg() {
        return `${imgHover? "":"hidden-img"}`;
    }

    function hideImg1() {
        return `${imgHover1? "":"hidden-img"}`;
    }
    function hideImg2() {
        return `${imgHover2? "":"hidden-img"}`;
    }
    function hideImg3() {
        return `${imgHover3? "":"hidden-img"}`;
    }
    
     
    //  handleMouseLeave() {
    //     this.setState({imageSrc: 'dummySrc2'});
    //  }

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (

       

        <div>
           
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
            <section className="scroll-hide">
                <div className="home-grid-container">
                    <div className="first-grid">
                        <FadeInRight>
                        <p>We design cloths <br/>
                            that don`t simply look <br/> good,<br/>
                             but also feels good too.</p>
                            </FadeInRight>
                             <img src={Circle} className="circle-img" />
                             <FadeInUp>
                        <img src={FirstImg} data-midnight="blue"/>
                        </FadeInUp>
                        <div className="btn-cnt">
                        <img src={Btn} className="btn-img" />
                        <p>Discover <br/> Now</p>
                        </div>
                        
                    </div>
                    <div className="secd-grid">
                        <img src={Outline} className="outline-img" />
                        <FadeInLeft>
                        <img src={SndImg} />
                        </FadeInLeft>
                    </div>
                </div>

                <div className="home-snd-grid-cont">
                    <div className="snd-first-grid">
                    <div className="snd-second-title-m">
                        <p className="snd-second-p-fill-m">fashion that is <br/> always relevant</p>
                        {/* <p className="snd-second-p-line-m"> fashion that is <br/> always relevant</p> */}
                        </div>
                      
                        <img src={Thirdimg} className="snd-img-left"/>
                       
                    </div>
                    <div className="snd-second-grid">
                        <div className="snd-second-title">
                           
                        <p className="snd-second-p-fill">fashion that is <br/> always relevant</p>
                        
                        {/* <p className="snd-second-p-line"> fashion that is <br/> always relevant</p> */}
                        </div>
                        <Link to="/about">
                        <div className="btn-cnt-snd">
                        <img src={Btn} className="btn-img-snd" />
                        <p>About <br/> Us</p>
                        </div></Link>
                        <img src={Circle} className="circle-img-snd" />
                        <div className="snd-flex-box">
                        <FadeInUp>
                        <img src={Fourthimg} />
                        <img src={Fifthimg} />
                        </FadeInUp>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="quote-container">
                        <div className="back-cover">
                        <div className="quote-cont-flex">
                        <img src={Line} />
                        <FadeInText>
                        <p>our promise is to bring <br/> you stylish and affordable <br/> cloths</p>
                        </FadeInText>
                        <img src={Arrow} />
                        <img src={WhiteClogo} className="logo-img" />
                        </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="collection-container">
                        <div className="title-flex-cont">
                            <div className="dot"></div>
                            <p>Collection</p>
                        </div>
                        <hr/>
                        <div className="collection-box">
                            <div className="collection-text">
                                <FadeInRight>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
                                    </FadeInRight>
                                <div className="col-btn-cnt">
                                <img src={Btn} className="col-btn-img" />
                                <p>See <br/> More</p>
                                </div>
                            </div>
                            <FadeInLeft>
                            <div className="collection-list">
                                <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Summer collection</p>
                                <hr/>
                                <p onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave}>Winter Collection</p>
                                <hr/>
                                <p onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave}>New Collection</p>
                                <hr/>
                                <p onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave}>Classic Collection</p>
                                <hr/>
                            </div>
                            </FadeInLeft>
                            <div className="collection-list-imgs">
                                <img src={Collimg2} className={hideImg()}/>
                                <img src={Collimg3} className={hideImg1()}/>
                                <img src={Collimg4} className={hideImg2()}/>
                                
                                <img src={Collimg5} className={hideImg3()}/>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="products-container">
                    <div className="title-flex-cont">
                            <div className="dot"></div>
                            <p>Products</p>
                        </div>
                        <hr/>
                        <br/>
                        <br/>
                        <div className="prod-scroll-container">
                            <div className="prod-imgs-list">
                           
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
                               
                            <br/>
                            <br/>
                              
                            </div>
                        </div>
                    </div>
                    {/* <div className="prod-btn-cont">
                        <div className="prod-view-btn">
                            <button>view all <img src={ArrowR} /> </button>
                        </div>
                        <div className="prod-cntl-btn">
                            <button><img src={ArrowRS} /> </button>
                            <button><img src={ArrowLS} /> </button>
                        </div>
                    </div> */}
                </div>


                {/* <div>
                    <div>
                        <div className="demo-container">
                            <FadeInRight>
                            <img src={Dot} className="demo-img1" />
                            </FadeInRight>
                            <img src={BLogoCircle} className="demo-circle-logo" />
                            <FadeInText>
                            <p>
                            Our designs often have a provocative adge. we are endlessly inspired by allure of the hidden, the mystery of what lies beneath. 
                            </p>
                          </FadeInText>
                            <img src={Prodimg1} className="demo-img2" />
                         
                        </div>
                        
                    </div>
                </div> */}

            
                <Newsletter />
        
         <Footer />

                

            </section> 
            </div>
               )
                
            }
            
            
        </div>
        </div>

       
     
    
    )

    
}
