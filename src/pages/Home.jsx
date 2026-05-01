import Navbarbackground from "../Images/navbarbackground.png";
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
import PricesPlans from "../components/PricesPlans";
import Faqs from "../components/Faqs";

export default function Home()
{
    return(
    <div className="home">
        <img className="Navbarbackground" src={Navbarbackground} alt="navbarbackground"/>

        {/* Experience */}

        <div className="Experience">
            <h1>The Best Streaming Experience</h1>
            <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <button><FontAwesomeIcon icon={faPlay} /> Start Watching Now</button>
        </div>

        {/* showing devices for the application section */}

        <section className="devices">
            <div className="devicesHeader">
                <h2>We Provide you streaming experience across various devices.</h2>
                <p>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            </div>

            <div className="devicesTypes">
                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faMobile} />
                        </div>
                        <h3>Smartphones</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faTabletScreenButton} />
                        </div>
                        <h3>Tablet</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faTv} />
                        </div>
                        <h3>Smart TV</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faLaptop} />
                        </div>
                        <h3>Laptops</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faGamepad} />
                        </div>
                        <h3>Gaming Consoles</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div className="icon-box">
                            <FontAwesomeIcon icon={faVrCardboard}/>
                        </div>
                        <h3>VR Headsets</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>
            </div>
        </section>

        {/* Prices Plans */}
        <PricesPlans />
        <Faqs />
    </div>
    );
}
