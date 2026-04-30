export default function Prices(){
    return(
        <div className="Prices">
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
                        movies and shows, including all new 
                        releases and Offline Viewing</span>
                    <p>$14.99<span>/month</span></p>
                    <div className="plan-buttons">
                        <button className="trial">Start Free Trial</button>
                        <button className="choose">Choose Plan</button>
                    </div>
                </div>
            </div>

        </div>

    );

}