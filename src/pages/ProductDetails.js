import React, {useState, useEffect, setState} from 'react'
import './Products.css'
import Prodimg6 from '../img/p52-3.jpg'
import Prodimg7 from '../img/p53.jpg'
import Prodimg8 from '../img/p52-1.jpg'
import Prodimg9 from '../img/p51.jpg'
import Prodimg10 from '../img/p52.jpg'
import { FadeInRight, FadeInUpBtn } from '../component/Animation'
import Header from '../component/Header'
import Newsletter from '../component/Newsletter';
import Instagram from '../component/Instagram';
import Footer from '../component/Footer';
import WhiteClogo from '../img/wclogo.svg'
import { Link } from 'react-router-dom'

export default function ProductDetails() {

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
            <section className="product-details-home">
                <div className="product-details-container">
                    
                    
                    <div className="product-details-img-continer">
                    <div className="product-details-img-first-grid">
                        <h3>
                            Our Designers Made
                        </h3>
                        <p>
                        the junk mtv quiz graced by fox whelps. bawds jog,  flax jodhpurs! "now fax quiz jack!" 
                        the junk mtv quiz graced by fox whelps. bawds jog,  flax jodhpurs! "now fax quiz jack!" 
                        the junk mtv quiz graced by fox whelps. bawds jog,  flax jodhpurs! "now fax quiz jack!" 
                        </p>
                        </div>
                        <div className="product-details-img-first-grid">
                        <div className="main-prod-container">
                             <img src={Prodimg10} />
                        </div>
                        </div>
                        <div className="product-details-img-second-grid">
                        <div className="sub-prod-container">
                        <img src={Prodimg8} />
                        </div>
                        <div className="sub-prod-container">
                        <img src={Prodimg7} />
                        </div>
                        <div className="sub-prod-container">
                        <img src={Prodimg9} />
                        </div>
                        <div className="sub-prod-container">
                        <img src={Prodimg6} />
                        </div>
                        </div>


                       
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
