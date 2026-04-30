import Navbar from "../components/Navbar";
import Navbarbackground from "../Images/navbarbackground.png";
import Freetarial from "../components/Freetrail";
import {usestate} from react;

import { motion} from "framer-motion";

import Faqs from "../components/Faqs";
import PricesPlans from "../components/PricesPlans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
    faMobile,
    faLaptop,
    faTv,
    faTabletScreenButton,
    faGamepad,
    faVrCardboard
} from "@fortawesome/free-solid-svg-icons";
import Prices from "../components/Prices";

export default function Home()
{
    return(
    <div className="home">
        <img className="Navbarbackground" src={Navbarbackground} alt="navbarbackground"/>

        {/* navbar section */}

    

        {/* Experience */}

        <div className="Experience">
            <h1>The Best Streaming Experience</h1>
            <p>StreamVibe is the best streaming experience for 
                watching your favorite movies and shows on demand,
                anytime, anywhere. With 
                <br/>StreamVibe, you can enjoy a wide variety of content, 
                including the latest blockbusters, classic movies,
                popular TV shows, and more.<br/> You can also create your own watchlists
                , so you can easily find the content you want to watch.</p>
                <button><FontAwesomeIcon icon={faPlay} /> Start Watching Now</button>
        </div>

        {/* showing devices for the application section */}

        <section className="devices">
            <div className="devicesHeader">
            <h2>We Provide you streaming experience across various devices.</h2>
            <p>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, 
                anywhere. Our platform is designed to be compatible with 
                a wide range of<br/>devices,
                ensuring that you never miss a moment of entertainment.</p>
            </div>

            <div className="devicesTypes">
                {/* Mobile Card */}
                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faMobile} />
                        </div>
                        <h3>Smartphones</h3>
                    </div>

                    <p>
                        StreamVibe is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store
                    </p>
                </div>
                {/* Tablet Card */}
                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faTabletScreenButton} />
                        </div>
                        <h3>Tablet</h3>
                    </div>

                    <p>
                        StreamVibe is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store
                    </p>
                </div>

                 {/* SmartTv Card */}
                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faTv} />
                        </div>
                        <h3>Smart TV</h3>
                    </div>

                    <p>
                        StreamVibe is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store
                    </p>
                </div>

                {/* Laptops */}
                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faLaptop} />
                        </div>
                        <h3>Laptops</h3>
                    </div>

                    <p>
                        StreamVibe is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store
                    </p>
                </div>

                 {/* Gaming Consoles */}
                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faGamepad} />
                        </div>
                        <h3>Gaming Consoles</h3>
                    </div>

                    <p>
                        StreamVibe is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store
                    </p>
                </div>

                 {/* VR Headsets  */}
                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faVrCardboard}/>
                        </div>
                        <h3>VR Headsets </h3>
                    </div>

                    <p>
                        StreamVibe is optimized for both Android and iOS smartphones.
                        Download our app from the Google Play Store or the Apple App Store
                    </p>
                </div>
            </div>
                
                

        
        </section>

        {/* faq section / */}
        <section className="faq">
            <div className="faq-details">
                <h2>Frequently Asked Questions</h2>
                    <div className="faq-row">
                        <span>
                        Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
                        </span>

                        <button>Ask a Question</button>
                    </div>
            </div>
            <div className="Faq-Questions">


                <div className="faq-item">
                    <span className="faq-number">01</span>
                    <h4>What is StreamVibe?</h4>
                    <span className="faq-icon">+</span>
                
                </div>

                <div className="faq-item">
                    <span className="faq-number">02</span>
                    <h4>How much does StreamVibe cost?</h4>
                    <span className="faq-icon">+</span>
                </div>

                <div className="faq-item">
                    <span className="faq-number">03</span>
                    <h4>What content is available on StreamVibe?</h4>
                    <span className="faq-icon">+</span>
                </div>

                <div className="faq-item">
                    <span className="faq-number">04</span>
                    <h4>How can I watch StreamVibe?</h4>
                    <span className="faq-icon">+</span>
                </div>

                <div className="faq-item">
                    <span className="faq-number">05</span>
                    <h4>How do I sign up for StreammVibe?</h4>
                    <span className="faq-icon">+</span>
                </div>

                <div className="faq-item">
                    <span className="faq-number">06</span>
                    <h4>What is the StreamVibe free trial?</h4>
                    <span className="faq-icon">+</span>
                </div>

                <div className="faq-item">
                    <span className="faq-number">07</span>
                    <h4>How do I contact StreamVibe customer support?</h4>
                    <span className="faq-icon">+</span>
                </div>

                <div className="faq-item">
                    <span className="faq-number">08</span>
                    <h4>What are the StreamVibe payment methods?</h4>
                    <span className="faq-icon">+</span>
                </div>
            </div>
        </section>

        {/* Prices plane */}

        <Prices/>
        <Faqs/>
        <PricesPlan />
        <Freetarial />
        
    </div>
    );

}