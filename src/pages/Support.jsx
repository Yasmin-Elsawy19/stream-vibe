
import { useState } from "react";
import CTA from "../components/common/CTA";

const Support = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    "What is StreamVibe?",
    "How much does StreamVibe cost?",
    "What content is available on StreamVibe?",
    "How can I watch StreamVibe?",
    "How do I sign up for StreamVibe?",
    "What is the StreamVibe free trial?",
    "How do I contact StreamVibe customer support?",
    "What are the StreamVibe payment methods?",
  ];

  return (
    <div className="support-main" style={page}>

      <div className="support-topSection" style={topSection}>

        {/* LEFT */}
        <div style={left}>
          <h1 style={title}>Welcome to our support page!</h1>
          <p style={desc}>
            We’re here to help you with any problems you may be having with our product.
          </p>

          <img
            src="/src/Images/Support.png"
            alt="movies"
            style={image}
          />
        </div>

        {/* RIGHT FORM */}
        <div style={formBox}>
          <form style={form}>
            
            <div style={row}>
              <input placeholder="Enter First Name" style={input} />
              <input placeholder="Enter Last Name" style={input} />
            </div>

            <div style={row}>
              <input placeholder="Enter your Email" style={input} />
              <input placeholder="Enter Phone Number" style={input} />
            </div>

            <textarea
              placeholder="Enter your Message"
              style={textarea}
            />

            <div style={checkboxRow}>
              <input type="checkbox" />
              <span>I agree with Terms of Use and Privacy Policy</span>
            </div>

            <button style={submitBtn}>Send Message</button>
          </form>
        </div>
      </div>

      <div style={faqSection}>
        <div style={faqHeader}>
          <div>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: "#aaa" }}>
              Got questions? We’ve got answers!
            </p>
          </div>

          <button style={askBtn}>Ask a Question</button>
        </div>

        <div style={faqGrid}>
          {faqs.map((q, i) => (
            <div key={i} style={faqItem}>
              
              <div
                style={faqTop}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span style={faqNum}>{String(i + 1).padStart(2, "0")}</span>
                <span>{q}</span>
                <span>{open === i ? "−" : "+"}</span>
              </div>

              {open === i && (
                <p style={faqAnswer}>
                  This is a sample answer for the question.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <CTA /> */}
    </div>
  );
};

export default Support;


// STYLES


const page = {
  background: "#111",
  color: "#fff",
  padding: "100px",
};

const topSection = {
  display: "flex",
  gap: "40px",
  marginBottom: "50px",
};

const left = {
  flex: 1,
};

const title = {
  fontSize: "2.5rem",
  marginBottom: "10px",
};

const desc = {
  color: "#aaa",
  marginBottom: "20px",
};

const image = {
  width: "100%",
  borderRadius: "12px",
};

const formBox = {
  flex: 1,
  background: "#1a1a1a",
  padding: "25px",
  borderRadius: "12px",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const row = {
  display: "flex",
  gap: "10px",
};

const input = {
  flex: 1,
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#111",
  color: "#fff",
};

const textarea = {
  padding: "12px",
  height: "100px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#111",
  color: "#fff",
};

const checkboxRow = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  fontSize: "12px",
  color: "#aaa",
};

const submitBtn = {
  background: "#e50914",
  border: "none",
  padding: "12px",
  borderRadius: "8px",
  color: "#fff",
  cursor: "pointer",
};

const faqSection = {
  marginTop: "40px",
  marginBottom:"100px",
};

const faqHeader = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
};

const askBtn = {
  background: "#e50914",
  border: "none",
  padding: "10px 15px",
  borderRadius: "8px",
  color: "#fff",
  cursor: "pointer",
};

const faqGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

const faqItem = {
  background: "#1a1a1a",
  padding: "15px",
  borderRadius: "10px",
  border: "1px solid #333",
};

const faqTop = {
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
};

const faqNum = {
  color: "#888",
  marginRight: "10px",
};

const faqAnswer = {
  marginTop: "10px",
  color: "#aaa",
};
