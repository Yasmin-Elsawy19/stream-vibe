import { useNavigate } from "react-router-dom";
import Facebook from "../Images/facebook.svg";
import Twitter from "../Images/twitter.svg";
import Linkedin from "../Images/Linkedin.svg";

export default function Footer() {
  const navigate = useNavigate();

  function handleNav(path) {
    if (path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-list">
          <li>Home</li>
          <li onClick={() => handleNav("/")}>Home</li>
          <li onClick={() => handleNav("/movies")}>Categories</li>
          <li onClick={() => handleNav("/support")}>Devices</li>
          <li onClick={() => handleNav("/subscriptions")}>Pricing</li>
          <li onClick={() => handleNav("/support")}>FAQ</li>
        </ul>

        <ul className="footer-list">
          <li>Movies</li>
          <li onClick={() => handleNav("/movies")}>Genres</li>
          <li onClick={() => handleNav("/movies")}>Trending</li>
          <li onClick={() => handleNav("/movies")}>New Release</li>
          <li onClick={() => handleNav("/movies")}>Popular</li>
        </ul>
        <ul className="footer-list">
          <li>Shows</li>
          <li onClick={() => handleNav("/movies")}>Genres</li>
          <li onClick={() => handleNav("/movies")}>Trending</li>
          <li onClick={() => handleNav("/movies")}>New Release</li>
          <li onClick={() => handleNav("/movies")}>Popular</li>
        </ul>

        <ul className="footer-list">
          <li>Support</li>
          <li onClick={() => handleNav("/support")}>Support</li>
          <li onClick={() => handleNav("/support")}>Connect Us</li>
        </ul>

        <ul className="footer-list">
          <li>Subscription</li>
          <li onClick={() => handleNav("/subscriptions")}>Subscription</li>
          <li onClick={() => handleNav("/subscriptions")}>Plans</li>
          <li onClick={() => handleNav("/subscriptions")}>Features</li>
        </ul>

        <ul className="footer-list">
          <li>Contact Us</li>
          <div className="contact-icons">
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={Linkedin} alt="linkedin" />
          </div>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StreamVibe, All Rights Reserved</p>

        <div className="footer-links">
          <span onClick={() => handleNav("/subscriptions")}>Terms of Use</span>
          <span onClick={() => handleNav("/subscriptions")}>Privacy Policy</span>
          <span onClick={() => handleNav("/subscriptions")}>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
