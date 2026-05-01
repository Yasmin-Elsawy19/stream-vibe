import { useState } from "react";
import "../styles/Faqs.css";

export default function Faqs() {

    const [activeIndex, setActiveIndex] = useState(0); 
    const faqsData = [
        { id: "01", question: "What is StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
        { id: "02", question: "How much does StreamVibe cost?", answer: "Our pricing varies based on the plan you choose." },
        { id: "03", question: "What content is available on StreamVibe?", answer: "We have a vast library of movies and series." },
        { id: "04", question: "How can I watch StreamVibe?", a: "You can watch on your phone, tablet, or TV." },
        { id: "05", question: "How do I sign up for StreamVibe?", answer: "Just click the join button on the top right." },
        { id: "06", question: "What is the StreamVibe free trial?", answer: "We offer a 7-day free trial for new users." },
        { id: "07", question: "How do I contact customer support?", answer: "You can reach us via email or live chat." },
        { id: "08", question: "What are the payment methods?", answer: "We accept Credit Cards, PayPal and Apple Pay." },
    ];

    return (
        <section className="faqs-section">
            <div className="faq-header">
                <div>
                    <h2>Frequently Asked Questions</h2>
                    <p>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                </div>
                <button className="ask-btn">Ask a Question</button>
            </div>

            <div className="faq-grid">
                {faqsData.map((item, index) => (
                    <div 
                        key={item.id} 
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        <div className="faq-content">
                            <span className="faq-number">{item.id}</span>
                            <div className="faq-text">
                                <h4>{item.question}</h4>
                                {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
                            </div>
                            <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}