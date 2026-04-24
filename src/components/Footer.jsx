import Facebook from "../Images/facebook.svg";
import Twitter from "../Images/twitter.svg";
import Linkedin from "../Images/Linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-list">
          <li>Home</li>
          <li>Categories</li>
          <li>Devices</li>
          <li>Pricing</li>
          <li>FAQ</li>
        </ul>

        <ul className="footer-list">
          <li>Movies</li>
          <li>Genres</li>
          <li>Trending</li>
          <li>New Release</li>
          <li>Popular</li>
        </ul>
        <ul className="footer-list">
          <li>Shows</li>
          <li>Genres</li>
          <li>Trending</li>
          <li>New Release</li>
          <li>Popular</li>
        </ul>

        <ul className="footer-list">
          <li>Support</li>
          <li>Connect Us</li>
        </ul>

        <ul className="footer-list">
          <li>Subscription</li>
          <li>Plans</li>
          <li>Features</li>
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
        <p>© {new Date().getFullYear()} StreamVibe, All Rights Reserved</p>

        <div className="footer-links">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
