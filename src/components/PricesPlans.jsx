import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Pricesplans.css";

export default function PricesPlans() {
    const [isMonthly, setIsMonthly] = useState(true);

    const plans = [
        {
            title: "Basic Plan",
            description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
            monthlyPrice: 9.99,
            yearlyPrice: 99.99,
        },
        {
            title: "Standard Plan",
            description: "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
            monthlyPrice: 12.99,
            yearlyPrice: 129.99,
        },
        {
            title: "Premium Plan",
            description: "Access to the widest selection of movies and shows, including all new releases and Offline Viewing.",
            monthlyPrice: 14.99,
            yearlyPrice: 149.99,
        }
    ];

    return (
        <section className="Prices">
            <div className="prices-selector">
                <h3>Choose the plan that's right for you</h3>
                <div className="prices-row">
                    <span>Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</span>
                    <div className="selector-button-container">
                        <button
                            className={isMonthly ? "active" : ""}
                            onClick={() => setIsMonthly(true)}
                        >
                            Monthly
                        </button>
                        <button
                            className={!isMonthly ? "active" : ""}
                            onClick={() => setIsMonthly(false)}
                        >
                            Yearly
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    className="prices-plan"
                    key={isMonthly ? "monthly" : "yearly"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {plans.map((plan) => (
                        <motion.div
                            className="plan"
                            key={plan.title}
                            whileHover={{
                                scale: 1.03,
                                borderColor: "#E50000",
                                backgroundColor: "#1A1A1A",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <p className="plan-name">{plan.title}</p>
                            <span>{plan.description}</span>
                            <motion.p
                                className="price-tag"
                                key={isMonthly ? `m-${plan.title}` : `y-${plan.title}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                ${isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                                <span>/{isMonthly ? "month" : "year"}</span>
                            </motion.p>
                            <div className="plan-buttons">
                                <button className="trial">Start Free Trial</button>
                                <button className="choose">Choose Plan</button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </section>
    );
}
