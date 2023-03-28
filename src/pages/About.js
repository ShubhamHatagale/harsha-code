import React, {useState, useEffect, setState} from 'react'
import './About.css'
import Aboutimg from '../img/p42.jpg'
import Aboutimg2 from '../img/p57.jpg'
import Aboutimg3 from '../img/p48.jpg'
import Circle from '../img/circlename.svg'
import Btn from '../img/abt-btn.svg'
import Point from '../img/arrow-point.svg'
import Browncircle from '../img/brown-circle-line.svg'
import Graycircle from '../img/gray-line-circle.svg'
import Singlewave from '../img/single-wave.svg'
import Star from '../img/line-star.svg'
import Arrow from '../img/arrow-b.svg'
import Outline from '../img/logo_outline-ff.svg'
import Prodimg1 from '../img/p1.jpg'
import Prodimg2 from '../img/p2.jpg'
import Prodimg3 from '../img/p3.jpg'
import WhiteClogo from '../img/wclogo.svg'
import Header from '../component/Header'
import Newsletter from '../component/Newsletter';
import Instagram from '../component/Instagram';
import Footer from '../component/Footer';
import { FadeInDown, FadeInText, FadeInUp, FadeInImg, FadeInUpBtn, FadeInRight, FadeInLeft } from '../component/Animation'

export default function About() {

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
                     </div> ) : (

                  
                        
            <div>     
                 <Header />      
            <section className="about-home">
                <div className="about-container">
                    <div className="about-title">
                        <p>About </p>
                        <p>Us</p>
                    </div>
                    <img src={Circle} 
                    className="about-circle-img" />
                    <div className="about-img-continer">
                        <FadeInUp>
                        <img src={Aboutimg} />
                        </FadeInUp>
                        <FadeInText>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, dolore magna</p>
                        </FadeInText>
                    </div>
                    {/* <div className="abt-btn-cnt">
                        <FadeInUpBtn>
                        <img src={Btn} className="abt-btn-img" />
                        </FadeInUpBtn>
                        <p>About Us</p>
                        </div> */}
                </div>
            </section>

            <section>
                <div className="about-container-grid">
                    <div className="abt-grid-img">
                    <div className="abt-grid-title-m">
                            <FadeInDown>
                        <p className="abt-title-fill">Our oath. <br/>You beautiful </p>
                        </FadeInDown>
                        <p className="abt-title-border">Our oath. <br/>You beautiful </p>
                        </div>
                    
                        <img src={Aboutimg2} />
                       
                    </div>
                    <div className="abt-grid-text">
                        <div className="abt-grid-title">
                            <FadeInDown>
                        <p className="abt-title-fill">Our oath. <br/>You beautiful </p>
                        </FadeInDown>
                        <p className="abt-title-border">Our oath. <br/>You beautiful </p>
                        </div>
                        <div className="abt-desc-list">

                            <div className="abt-point-grid">
                            <img src={Point} /> 
                            <FadeInUpBtn>
                            <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </span>
                                </FadeInUpBtn>
                            <img src={Point} /> <FadeInUpBtn><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                 diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita 
                                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</span></FadeInUpBtn>
                                <img src={Point} /> <FadeInUpBtn><span>The quick, brown fox jumps over a lazy dog.
                                     DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox </span></FadeInUpBtn>
                             </div>   

                        </div>
                    </div>
                </div>
                <div className="abt-back-box">

                </div>
            </section>

            <section>
                <div className="abt-center-title-quote">
                    <img src={Star} className="star-oneimg"/>
                    <img src={Singlewave} className="wave-img-bg"/>
                    <div className="abt-quote-text">
                   
                    <p>Life is too short</p>
                    <h3>to wear boring cloths</h3>
                   
                    </div>
                    <img src={Star} className="star-twoimg"/>
                </div>
            </section>

            <section className="about-section">
                {/* <img src={Circle} className="about-circle-img2" /> */}
                <div className="bg-container-grid">
                <div className="about-grid-details">
                    <FadeInRight>
                    <div>
                        <h3>about us</h3>
                        <p>the quick, brown fox jumps over a lazy dog. djs flock by when mtv ax quiz prog. junk mtv quiz graced by fox whelps. bawds jog, flick quartz, vex nymphs. waltz, bad nymph, for quick jigs vex! fox nymphs grab quick-jived waltz. brick quiz whangs jumpy veldt fox. bright vixens jump; dozy fowl quack. quick wafting zephyrs vex bold jim. quick zephyrs blow, vexing daft jim. sex-charged fop blew my junk tv quiz. how quickly daft jumping zebras vex. two driven jocks help fax my big quiz. quick, baz, get my woven flax jodhpurs! "now fax quiz jack!" my brave ghost pled. five quacking zephyrs jolt my wax bed. flummoxed by job, kvetching w. zaps iraq. cozy sphinx waves quart jug of bad milk.
</p>
                    </div>
                    </FadeInRight>
                    <div className="overflow-hide">
                        <FadeInUp>
                        <img src={Aboutimg3} />
                        </FadeInUp>
                    </div>
                </div>
                </div>
                <br></br>
                <br></br>
            </section>

            <section>
                <div className="abt-center-title-quote">
                    <img src={Star} className="star-oneimg"/>
                    <img src={Singlewave} className="wave-img-bg"/>
                    <div className="abt-quote-text">
                 
                    <p>team</p>
                    <h3>Harsha fashion team</h3>
                    
                    </div>
                    <img src={Arrow} />
                </div>
            </section>



            <section>
                 <div className="team-container">
                     <FadeInLeft>
                     <div className="browncircle-bg">
                    
                <img src={Browncircle}/>
                </div>
                </FadeInLeft>
                <div className="team-absou">
                    
                <div className="team-grid-container">
                <FadeInUpBtn>
                    <div>
                    <img src={Prodimg1}/>
                    <h3>Name</h3>
                    <p>Designation</p>
                    
                    </div>
                    </FadeInUpBtn>
                    <FadeInUpBtn>
                    <div>
                    <img src={Prodimg2}/>
                    <h3>Name</h3>
                    <p>Designation</p>
                    </div>
                    </FadeInUpBtn>
                    <FadeInUpBtn>
                 
                    <div>
                    <img src={Prodimg3}/>
                    <h3>Name</h3>
                    <p>Designation</p>
                    </div>
                    </FadeInUpBtn>
                </div>
                
                </div>
                </div>
                
            </section>

            <section>
                <div className="some-quote-container">
                    <FadeInRight>
                <div className="gray-img-box">
                <img src={Graycircle}/>
                </div>
                </FadeInRight>
                <div className="some-quote-grid">
                    <div className="ouline-img-container">
                    <img src={Outline} className="abt-outline-img" />
                    </div>
                    <FadeInDown>
                    <div>
                        <p>the junk mtv quiz graced by fox whelps. bawds jog,  flax jodhpurs! "now fax quiz jack!" my brave ghost pled. five quacking zephyrs jolt my wax bed.</p>
                    </div>
                    </FadeInDown>
                </div>
                <img src={Circle} className="circle-rotate"/>
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
