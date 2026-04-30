import { useState ,useEffect } from "react";
import Vector from "../Images/Vector.svg";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell ,faMoon ,faSun} from "@fortawesome/free-solid-svg-icons";
import ResponsiveSearch from "../Images/responsivesearch.svg";
import "../styles/darkMood.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const navigate = useNavigate();

  const links = [
  { name: "Home", path: "/" },
  { name: "Movies & Shows", path: "/movies" },
  { name: "Support", path: "/support" },
  { name: "Subscriptions", path: "/subscriptions" }
];

// scroll
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="vetor-icon">
        <img
          src={Vector}
          alt="Vector"
          style={{ width: "60px", height: "60px" }}
        />
        <h4 className="StreamVibe">StreamVibe</h4>
      </div>

      <ul className="nav-links">
        {links.map((link) => (
          <li
              key={link.name}
              className={active === link.name ? "active" : ""}
              onClick={() => {
                setActive(link.name);
                navigate(link.path);
              }}
            >
              {link.name}
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBell} />
      </div>
      
      <div className="darkMood" onClick={() => setDark(!dark)}>
      <FontAwesomeIcon icon={dark ? faSun : faMoon} />
      </div>
      <img
        className="ResponsiveSearch"
        src={ResponsiveSearch}
        alt="ResponsiveSearch"
      ></img>
    </nav>
  );
}
