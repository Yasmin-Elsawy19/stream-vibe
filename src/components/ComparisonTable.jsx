import { motion } from "framer-motion";
import '../styles/ComparisonTable.css'; 

const ComparisonTable = () => {
  const comparisonData = [
    { feature: "Price", basic: "$9.99/Month", standard: "$12.99/Month", premium: "$14.99/Month" },
    { feature: "Content", basic: "Access to a wide selection of movies and shows.", standard: "Access to a wider selection of movies and shows.", premium: "Access to a widest selection of movies and shows." },
    { feature: "Devices", basic: "Watch on one device simultaneously", standard: "Watch on Two devices simultaneously", premium: "Watch on Four devices simultaneously" },
    { feature: "Free Trial", basic: "7 Days", standard: "7 Days", premium: "7 Days" },
    { feature: "Cancel Anytime", basic: "Yes", standard: "Yes", premium: "Yes" },
    { feature: "HDR", basic: "No", standard: "Yes", premium: "Yes" },
    { feature: "Dolby Atmos", basic: "No", standard: "Yes", premium: "Yes" },
    { feature: "Ad - Free", basic: "No", standard: "Yes", premium: "Yes" },
    { feature: "Offline Viewing", basic: "No", standard: "Yes, for select titles.", premium: "Yes, for all titles." },
    { feature: "Family Sharing", basic: "No", standard: "Yes, up to 5 family members.", premium: "Yes, up to 6 family members." },
  ];

  return (
    <section className="comparison-section">
      <div className="comparison-header">
        <h3>Compare our plans and find the right one for you</h3>
        <p>StreamVibe offers three different plans to fit your needs.</p>
      </div>

      <div className="comparison-table">
        <div className="table-row header-row">
          <div className="cell">Features</div>
          <div className="cell">Basic</div>
          <div className="cell">Standard <span className="badge">Popular</span></div>
          <div className="cell">Premium</div>
        </div>

        {comparisonData.map((row, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }} 
            className="table-row"
            key={row.feature + index}
          >
            <div className="cell feature-name">{row.feature}</div>
            <div className="cell">{row.basic}</div>
            <div className="cell">{row.standard}</div>
            <div className="cell">{row.premium}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonTable;
