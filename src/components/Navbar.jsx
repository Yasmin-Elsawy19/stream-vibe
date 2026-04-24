import { useState } from "react";
import Vector from "../Images/Vector.svg";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import ResponsiveSearch from "../Images/responsivesearch.svg";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const links = ["Home", "Movies & Shows", "Support", "Subscriptions"];
  return (
    <nav className="navbar">
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
            key={link}
            className={active === link ? "active" : ""}
            onClick={() => setActive(link)}
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBell} />
      </div>
      <img
        className="ResponsiveSearch"
        src={ResponsiveSearch}
        alt="ResponsiveSearch"
      ></img>
    </nav>
  );
}
