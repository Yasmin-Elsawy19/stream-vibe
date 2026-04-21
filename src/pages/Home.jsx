import Navbar from "../components/Navbar";
import Navbarbackground from "../Images/navbarbackground.png";
import Freetarial from "../components/Freetrail";
export default function Home()
{
    return(
    <div className="home">
        <img className="Navbarbackground" src={Navbarbackground} alt="navbarbackground"/>
        <Navbar />
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
                    <h4>How do I sign up for StreamVibe?</h4>
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

        <section className="Prices">
            <div className="prices-selector">
                <h3>Choose the plan that's right for you</h3>
                <div className="prices-row">
                    <span>Join StreamVibe and select from our flexible subscription
                            options tailored to suit your viewing preferences. 
                            Get ready for non-stop entertainment!</span>
                    <div className="selsctor-button">
                        <button className="monthly-button">Monthly</button>
                        <button className="yearly-button">Yearly</button>
                    </div>
                </div>

            </div>

            <div className="prices-plan">
                <div className="plan">
                    <p>Basic Plan</p>
                    <span>Enjoy an extensive library of movies and shows,<br/> 
                        featuring a range of content, 
                        including recently <br/>released titles.</span>
                    <p>$9.99<span>/month</span></p>
                    <div className="plan-buttons">
                        <button className="trial">Start Free Trial</button>
                        <button className="choose">Choose Plan</button>
                    </div>
                </div>

                <div className="plan">
                    <p>Standard Plan</p>
                    <span>Access to a wider selection of movies <br/>
                    and shows, including most new <br/>
                    releases and exclusive content</span>
                    <p>$12.99<span>/month</span></p>
                    <div className="plan-buttons">
                        <button className="trial">Start Free Trial</button>
                        <button className="choose">Choose Plan</button>
                    </div>
                </div>

                <div className="plan">
                    <p>Premium Plan</p>
                    <span>Access to a widest selection of
                        <br/> movies and shows, including all new 
                        <br/>releases and Offline Viewing</span>
                    <p>$14.99<span>/month</span></p>
                    <div className="plan-buttons">
                        <button className="trial">Start Free Trial</button>
                        <button className="choose">Choose Plan</button>
                    </div>
                </div>
            </div>

        </section>
        <Freetarial />
    </div>
    );

}