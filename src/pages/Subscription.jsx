import PricesPlans from "../components/PricesPlans";
import "../styles/Subcription.css";
import MobilePlanCard from "../components/responsiveTable";

export default function Subscription() {
    
    return (
        <div className="subscription">
            <PricesPlans />
            <section className="plan-table">
                <div className="table-description">
                    <h2>Compare our plans and find the right one for you</h2>
                    <span>StreamVibe offers three different plans to fit your needs: Basic, 
                        Standard, and Premium.
                        Compare the features of each plan and choose the one that's right for you.</span>
                </div>
                <MobilePlanCard />
                <div className="table-container">
                    <table className="my-table">
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th>Basic</th>
                                <th>Standard <span>Popular</span></th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Price</td>
                                <td>$9.99/Month</td>
                                <td>$12.99/Month</td>
                                <td>$14.99/Month</td>
                            </tr>
                            <tr>
                                <td>Content</td>
                                <td>Access to a wide selection of movies and shows, including some new releases.</td>
                                <td>Access to a wider selection of movies and shows, including most new releases and exclusive content</td>
                                <td>Access to a widest selection of movies and shows, including all new releases and Offline Viewing</td>
                            </tr>
                            <tr>
                                <td>Devices</td>
                                <td>Watch on one device simultaneously</td>
                                <td>Watch on Two devices simultaneously</td>
                                <td>Watch on Four devices simultaneously</td>
                            </tr>
                            <tr>
                                <td>Free Trial</td>
                                <td>7 Days</td>
                                <td>7 Days</td>
                                <td>7 Days</td>
                            </tr>
                            <tr>
                                <td>Cancel Anytime</td>
                                <td>Yes</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>HDR</td>
                                <td>No</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Dolby Atmos</td>
                                <td>No</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Ad - Free</td>
                                <td>No</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Offline Viewing</td>
                                <td>No</td>
                                <td>Yes, for select titles.</td>
                                <td>Yes, for all titles.</td>
                            </tr>
                            <tr>
                                <td>Family Sharing</td>
                                <td>No</td>
                                <td>Yes, up to 5 family members.</td>
                                <td>Yes, up to 6 family members.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        

         {/* responsive table */}

                {/* <div className="mobile-plan">

            
            <div className="plan-tabs">
                <span>Basic</span>
                <span className="active">Standard</span>
                <span>Premium</span>
            </div>

            
            <div className="plan-card">

                <div className="row">
                <div>
                    <p className="label">Price</p>
                    <p>$12.99/Month</p>
                </div>

                <div>
                    <p className="label">Free Trail</p>
                    <p>7 Days</p>
                </div>
                </div>

                <div className="full">
                <p className="label">Content</p>
                <p>
                    Access to a wider selection of movies and shows, including most new
                    releases and exclusive content
                </p>
                </div>

                <div className="full">
                <p className="label">Devices</p>
                <p>Watch on Two device simultaneously</p>
                </div>

                <div className="row">
                <div>
                    <p className="label">Cancel Anytime</p>
                    <p>Yes</p>
                </div>

                <div>
                    <p className="label">HDR</p>
                    <p>Yes</p>
                </div>
                </div>

                <div className="row">
                <div>
                    <p className="label">Dolby Atmos</p>
                    <p>Yes</p>
                </div>

                <div>
                    <p className="label">Ad - Free</p>
                    <p>Yes</p>
                </div>
                </div>

                <div className="row">
                <div>
                    <p className="label">Offline Viewing</p>
                    <p>Yes, for select titles.</p>
                </div>

                <div>
                    <p className="label">Family Sharing</p>
                    <p>5 family members.</p>
                </div>
                </div>

            </div>
            </div> */}


    </div>
    );
}
