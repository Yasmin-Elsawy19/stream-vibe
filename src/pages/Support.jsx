import { useState, useEffect, useRef } from "react";
import { getTitles } from "../services/api";
import "../styles/SupportPage.css";

const countries = [
  { code: "us", phone: "+1", name: "United States" },
  { code: "gb", phone: "+44", name: "United Kingdom" },
  { code: "eg", phone: "+20", name: "Egypt" },
  { code: "sa", phone: "+966", name: "Saudi Arabia" },
  { code: "ae", phone: "+971", name: "UAE" },
  { code: "in", phone: "+91", name: "India" },
  { code: "cn", phone: "+86", name: "China" },
  { code: "jp", phone: "+81", name: "Japan" },
  { code: "de", phone: "+49", name: "Germany" },
  { code: "fr", phone: "+33", name: "France" },
  { code: "it", phone: "+39", name: "Italy" },
  { code: "es", phone: "+34", name: "Spain" },
  { code: "br", phone: "+55", name: "Brazil" },
  { code: "ru", phone: "+7", name: "Russia" },
  { code: "kr", phone: "+82", name: "South Korea" },
  { code: "au", phone: "+61", name: "Australia" },
  { code: "za", phone: "+27", name: "South Africa" },
  { code: "mx", phone: "+52", name: "Mexico" },
  { code: "tr", phone: "+90", name: "Turkey" },
  { code: "pk", phone: "+92", name: "Pakistan" },
];

const Support = () => {
  const [open, setOpen] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      const data = await getTitles({ limit: 16 });
      if (data?.titles) {
        setMovies(data.titles.slice(0, 16));
      }
      setLoading(false);
    }
    fetchMovies();
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const groupedMovies = [];
  for (let i = 0; i < movies.length; i += 4) {
    groupedMovies.push(movies.slice(i, i + 4));
  }

  const groupedSkeleton = [[0,1,2,3], [0,1,2,3], [0,1,2,3], [0,1,2,3]];

  return (

    <div className="support-page-wrapper">
      <div className="support-container">
        <div className="support-left">
          <div className="support-text-block">
            <h6 className="support-title">Welcome to our<br />support page!</h6>
            <p className="support-desc">
              We're here to help you with any problems you may be having with our product.
            </p>
          </div>

          <div className="movies-grid-wrapper">
            {loading
              ? groupedSkeleton.map((group, gi) => (
                  <div key={gi} className="image-container">
                    {group.map((_, idx) => (
                      <div key={idx} className="movie-poster-skeleton" />
                    ))}
                  </div>
                ))
              : groupedMovies.map((group, gi) => (
                  <div key={gi} className="image-container">
                    {group.map((movie) => (
                      <div key={movie.id} className="support-movie-card">
                        {movie.primaryImage?.url ? (
                          <img
                            src={movie.primaryImage.url}
                            alt={movie.primaryTitle || "Movie"}
                            loading="lazy"
                          />
                        ) : (
                          <div className="movie-placeholder">No Image</div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
          </div>
        </div>

        <div className="support-form-box">
          <form className="support-form">
            <div className="form-grid">
              <div className="form-field">
                <label className="form-label">First Name</label>
                <input placeholder="Enter First Name" className="form-input" />
              </div>
              <div className="form-field">
                <label className="form-label">Last Name</label>
                <input placeholder="Enter Last Name" className="form-input" />
              </div>

              <div className="form-field">
                <label className="form-label">Email</label>
                <input placeholder="Enter your Email" className="form-input" />
              </div>

              <div className="form-field phone-field">
                <label className="form-label">Phone Number</label>
                <div className="phone-input-row">
                  <div className="country-dropdown-wrapper" ref={dropdownRef}>
                    <div
                      className="country-select-display"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <img
                        src={`https://flagcdn.com/w20/${selectedCountry.code}.png`}
                        alt={selectedCountry.name}
                        className="flag-img"
                      />
                      <span className="dropdown-arrow">▾</span>
                    </div>
                    {dropdownOpen && (
                      <div className="country-dropdown-list">
                        {countries.map((c) => (
                          <div
                            key={c.code}
                            className={`country-option ${selectedCountry.code === c.code ? "selected" : ""}`}
                            onClick={() => {
                              setSelectedCountry(c);
                              setDropdownOpen(false);
                            }}
                          >
                            <img
                              src={`https://flagcdn.com/w20/${c.code}.png`}
                              alt={c.name}
                              className="flag-img"
                            />
                            <span>{c.phone}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <input placeholder="Enter Phone Number" className="form-input phone-input" />
                </div>
              </div>

              <div className="form-field full-width">
                <label className="form-label">Message</label>
                <textarea
                  placeholder="Enter your Message"
                  className="form-textarea full-width"
                />
              </div>
            </div>

            <div className="form-footer">
              <div className="form-checkbox-row">
                <input type="checkbox" />
                <span>I agree with Terms of Use and Privacy Policy</span>
              </div>
              <button className="form-submit-btn" type="button">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      <div className="support-faq-section">
        <div className="support-faq-header">
          <div>
            <h2>Frequently Asked Questions</h2>
            <p className="support-faq-subtitle">
              Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className="support-ask-btn">Ask a Question</button>
        </div>

        <div className="support-faq-grid">
          {faqs.map((q, i) => {
            const isOpen = open === q;
            return (
              <div key={`faq-${i}`} className="support-faq-item">
                <div
                  className="support-faq-top"
                  onClick={() => setOpen(isOpen ? null : q)}
                >
                  <span className="support-faq-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="support-faq-question">{q}</span>
                  <span className="support-faq-icon">{isOpen ? "−" : "+"}</span>
                </div>
                {isOpen && (
                  <p className="support-faq-answer">
                    StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Support;


