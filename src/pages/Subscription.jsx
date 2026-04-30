import Navbar from"../components/Navbar";
import Footer from "../components/Footer";
import Freetarial from "../components/Freetrail";
import Prices from "../components/Prices";
import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import ComparisonTable from "../components/ComparisonTable";
import PricesPlans from "../components/PricesPlans"
import "../styles/Subcription.css";

export default function Subscription()
{
    return(
        <div className="subscription">

        <Prices/>
        
            <section className="plan-table">
                <div className="table-description">
                    <h2>Compare our plans and find the right one for you</h2>
                    <span>StreamVibe offers three different plans to fit your needs: Basic, 
                        Standard, and Premium.
                        Compare the features of each plan and choose the one that's right for<br/>you.</span>
                </div>
                <div className="table-container">
                    <table className="my-table">
                        <tr>
                            <th>Features</th>
                            <th>Basic</th>
                            <th>Standard <span>Popular</span></th>
                            <th>Premium</th>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>$9.99/Month</td>
                            <td>$12.99/Month</td>
                            <td>$14.99/Month</td>
                        </tr>
                        <tr>
                            <td>Content</td>
                            <td>Access to a wide selection of movies and shows,
                                including some new releases.</td>
                            <td>Access to a wider selection of movies and shows, 
                                including most new releases and exclusive content</td>
                            <td>Access to a widest selection of movies and shows,
                                including all new releases and Offline Viewing</td>
                        </tr>
                        <tr>
                            <td>Devices</td>
                            <td>Watch on one device simultaneously</td>
                            <td>Watch on Two device simultaneously</td>
                            <td>Watch on Four device simultaneously</td>
                        </tr>
                        <tr>
                            <td>Free Trail</td>
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
                    </table>
                </div>
            </section>
      <PricesPlans />
      <ComparisonTable /> 
      <Freetrials />
      <footer />

        </div>

    );
}