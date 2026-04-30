import { useState } from "react";
import "../styles/Pricesplans";

export default function Prices() {
    const [isMonthly, setIsMonthly] = useState(true);

    const plans = [
        {
            title: "Basic Plan",
            description: "Enjoy an extensive library of movies and shows...",
            monthlyPrice: 9.99,
            yearlyPrice: 99.99, 
        },
        {
            title: "Standard Plan",
            description: "Access to a wider selection of movies and shows...",
            monthlyPrice: 12.99,
            yearlyPrice: 129.99,
        },
        {
            title: "Premium Plan",
            description: "Access to a widest selection of movies and shows...",
            monthlyPrice: 14.99,
            yearlyPrice: 149.99,
        }
    ];

    return (
        <section className="Prices">
            <div className="prices-selector">
                <h3>Choose the plan that's right for you</h3>
                <div className="prices-row">
                    <span>Join StreamVibe and select from our flexible options...</span>
                    
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

            
  {plans.map((plan, index) => (
<motion.div 
                className="plan" 
                key={index}
                whileHover={{ 
                    scale: 1.03, 
                    borderColor: "#E50914", 
                    backgroundColor: "#1A1A1A", 
                    transition: { duration: 0.3 } 
                }}
                style={{ border: "1px solid #262626", borderRadius: "12px" }} // تأكدي من وجود بوردر أساسي
            >
                        <p className="plan-name">{plan.title}</p>
                        <span>{plan.description}</span>
                        
                        <p className="price-tag">
                            ${isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
                            <span>/{isMonthly ? "month" : "year"}</span>
                        </p>
           <motion.button
       className="plan-buttons"
       whileHover={{ 
       scale: 1.1, 
        backgroundColor: "#ff1f2d",
        boxShadow: "0px 0px 15px rgba(229, 9, 20, 0.5)" 
  }}
  whileTap={{ scale: 0.95 }} 
>
Start Free Trial </motion.button> 
           <motion.button
       className="plan-buttons"
       whileHover={{ 
       scale: 1.1, 
        backgroundColor: "#ff1f2d",
        boxShadow: "0px 0px 15px rgba(229, 9, 20, 0.5)" 
  }}
  whileTap={{ scale: 0.95 }} 
>
Choose Plan </motion.button> 
                        <div className="plan-buttons">
                            <button className="trial">Start Free Trial</button>
                            <button className="choose">Choose Plan</button>
                        </div>
                        </motion.div> 
            ))}
            <div/>
        </section>
    );
}
export default PricesPlans;