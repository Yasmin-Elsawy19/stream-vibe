import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Vector from "../Images/Vector.svg";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ResponsiveSearch from "../Images/responsivesearch.svg";
import "../styles/darkMood.css";

export default function Navbar() {
  const location = useLocation();
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Home", path: "/" },
    { label: "Movies & Shows", path: "/movies" },
    { label: "Support", path: "/support" },
    { label: "Subscriptions", path: "/subscriptions" },
  ];

  function getActivePath() {
    const path = location.pathname;
    if (path.startsWith("/movie") || path.startsWith("/tv")) {
      return "/movies";
    }
    return path;
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="vetor-icon">
        <img src={Vector} alt="Vector" style={{ width: "60px", height: "60px" }} />
        <h4 className="StreamVibe">StreamVibe</h4>
      </div>

      <ul className="nav-links">
        {links.map((link) => (
          <Link
            to={link.path}
            key={link.label}
            className={getActivePath() === link.path ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="nav-icons">
        <Link to="/search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
        <FontAwesomeIcon icon={faBell} />
      </div>

      <div className="darkMood" onClick={() => setDark(!dark)}>
        <FontAwesomeIcon icon={dark ? faSun : faMoon} />
      </div>
      <img className="ResponsiveSearch" src={ResponsiveSearch} alt="ResponsiveSearch" />
    </nav>
  );
}
