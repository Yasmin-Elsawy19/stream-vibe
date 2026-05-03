
import { useState } from "react";
import "../styles/Subcription.css";
export default function MobilePlanCard() {
  const plans = [
    {
      name: "Basic",
      price: "$9.99/Month",
      Content:"Access to a wide selection of movies and shows, including some new releases.",
      devices: "Watch on one device simultaneously",
      trial: "3 Days",
      CancelAnytime:"Yes",
      hdr: "No",
      DolbyAtmos: "No",
      adFree: "No",
      OfflineViewing:"No",
      family: "1 member",
    },
    {
      name: "Standard",
      price: "$12.99/Month",
      Content:"Access to a wider selection of movies and shows, including most new releases and exclusive content",
      
      devices: "Watch on Two device simultaneously",
      trial: "7 Days",
      CancelAnytime:"Yes",
      hdr: "Yes",
      dolby: "Yes",
      adFree: "Yes",
      OfflineViewing:"Yes, for select titles.",
      family: "5 members",
    },
    {
      name: "Premium",
      price: "$15.99/Month",
      Content:"Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
      
      devices: "Watch on Four device simultaneously",
      trial: "10 Days",
      CancelAnytime:"Yes",
      hdr: "Yes",
      dolby: "Yes",
      adFree: "Yes",
      OfflineViewing:"Yes, for all titles.",
      family: "10 members",
    },
  ];

  const [activePlan, setActivePlan] = useState(plans[0].name);
  const selectedPlan = plans.find((p) => p.name === activePlan);

  return (
    <div className="mobile-only">
      {/* tabs */}
      <div className="plan-tabs">
        {plans.map((p) => (
          <span
            key={p.name}
            className={activePlan === p.name ? "active" : ""}
            onClick={() => setActivePlan(p.name)}
          >
            {p.name}
          </span>
        ))}
      </div>

      {/* card */}
      <div className="plan-card">
        <div className="row">
          <div>
            <p className="label">Price</p>
            <p>{selectedPlan.price}</p>
          </div>
          
          <div>
            <p className="label">Free Trial</p>
            <p>{selectedPlan.trial}</p>
          </div>
        </div>
        <div className="row">
            <div>
                <p className="label">Content</p>
                <p>{selectedPlan.Content}</p>
            </div>
          </div>

        <div className="row">
          <div>
            <p className="label">Devices</p>
            <p>{selectedPlan.devices}</p>
          </div>
        </div>

        <div className="row">
          <div>
            <p className="label">Cancel Anytime</p>
            <p>{selectedPlan.CancelAnytime}</p>
          </div>
          <div>
            <p className="label">HDR</p>
            <p>{selectedPlan.hdr}</p>
          </div>
        </div>

        <div className="row">
          <div>
            <p className="label">Dolby Atmos</p>
            <p>{selectedPlan.dolby}</p>
          </div>
          <div>
            <p className="label">Ad-Free</p>
            <p>{selectedPlan.adFree}</p>
          </div>
        </div>

        <div className="row">
            <div>
            <p className="label">Offline Viewing</p>
            <p>{selectedPlan.OfflineViewing}</p>
          </div>
          <div>
            <p className="label">Family Sharing</p>
            <p>{selectedPlan.family}</p>
          </div>
        </div>
      </div>
    </div>
  );
}