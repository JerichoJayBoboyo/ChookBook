// import { useEffect } from "react";
import "./styles/index.css";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-first-column">
        <div className="footer-contact">
          <h2 className="follow-us">
            Follow <span className="colored-text">Us</span>
          </h2>
          <div className="contact-icon-cntr">
            <a href="#" className="socmed-link-icon">
              <i className="socmed-icons fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="socmed-link-icon">
              <i className="socmed-icons fa-brands fa-telegram"></i>
            </a>
            <a href="#" className="socmed-link-icon">
              <i className="socmed-icons fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="socmed-link-icon">
              <i className="socmed-icons fa-brands fa-tiktok"></i>
            </a>
            <a href="#" className="socmed-link-icon">
              <i className="socmed-icons fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer-subscribe">
          <input
            type="email"
            placeholder="Input your email"
            className="email-input"
          />
          <button type="submit" className="submit-btn">
            Subscribe
          </button>
          <span>
            Get latest update in our blog and post so you won't miss delicious
            recipes
          </span>
        </div>
        <div className="footer-other-sites">
          <h2 className="our-sites">
            Our <span className="colored-text">Sites</span>
          </h2>
          <ul>
            <li>
              <a href="#">ChookBuddies.com</a>
            </li>
            <li>
              <a href="#">ChookingChef.com</a>
            </li>
            <li>
              <a href="#">TastyTreatsDelight.com</a>
            </li>
            <li>
              <a href="#">FlavorfulFeasts.net</a>
            </li>
            <li>
              <a href="#">GourmetGoodies.org</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-second-column">
        <span className="copyright">
          ©2024 ChookBook | <a href="#">Privacy and Policy</a> | Site by JJBB
        </span>
      </div>
    </footer>
  );
}

export default Footer;
