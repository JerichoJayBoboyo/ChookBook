import React, { useState } from "react";
import "./styles/index.css";
import FooterCSS from "./styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2";

function Footer() {
  const [email, setEmail] = useState("");

  const handleAccountAddress = () => {
    alert(
      "This is a DUMMY account link created solely for demonstration purposes in this project."
    );
  };

  const handleSubscribe = () => {
    if (email) {
      Swal.fire({
        title: "Subscribed!",
        text: `The subscriber email ${email} is now subscribed.`,
        icon: "success",
        confirmButtonText: "OK",
        width: "80%",
        padding: "20px",
      });
      setEmail(""); // Clear the input field after subscription
    } else {
      Swal.fire({
        title: "Error",
        text: "Please enter a valid email address.",
        icon: "error",
        confirmButtonText: "OK",
        width: "400px",
        padding: "20px",
      });
    }
  };

  const showPrivacyPolicy = () => {
    Swal.fire({
      title: "Privacy Policy and Terms of Service",
      text: "Effective as of 2024, by using ChookBook, you agree to our Privacy Policy and Terms of Service. We collect personal information you provide and usage data to enhance our services and communicate with you. We do not sell your data but may share it with service providers or as required by law. You have rights to access, update, or delete your information and can opt out of marketing communications. While we strive to protect your data, no transmission over the internet is completely secure. You are responsible for maintaining your account's confidentiality and use of the app must comply with applicable laws. All content is our property or that of our licensors. We are not liable for any damages resulting from the use of the app and reserve the right to modify these terms or suspend access for violations. For questions, contact us at ChookBook@cooking.edu.",
      icon: "info",
      confirmButtonText: "OK",
      width: "80%",
      padding: "20px",
    });
  };

  return (
    <footer>
      <div className={FooterCSS.footerFirstColumn}>
        <div className={FooterCSS.footerContact}>
          <h2 className={FooterCSS.followUs}>
            Follow <span className={FooterCSS.coloredText}>Us</span>
          </h2>
          <div className={FooterCSS.contactIconCntr}>
            <a
              href="#"
              className={FooterCSS.socmedLinkIcon}
              onClick={handleAccountAddress}
            >
              <FontAwesomeIcon icon={faFacebook} className={FooterCSS.icons} />
            </a>
            <a
              href="#"
              className={FooterCSS.socmedLinkIcon}
              onClick={handleAccountAddress}
            >
              <FontAwesomeIcon icon={faTelegram} className={FooterCSS.icons} />
            </a>
            <a
              href="#"
              className={FooterCSS.socmedLinkIcon}
              onClick={handleAccountAddress}
            >
              <FontAwesomeIcon icon={faInstagram} className={FooterCSS.icons} />
            </a>
            <a
              href="#"
              className={FooterCSS.socmedLinkIcon}
              onClick={handleAccountAddress}
            >
              <FontAwesomeIcon icon={faTiktok} className={FooterCSS.icons} />
            </a>
            <a
              href="#"
              className={FooterCSS.socmedLinkIcon}
              onClick={handleAccountAddress}
            >
              <FontAwesomeIcon icon={faXTwitter} className={FooterCSS.icons} />
            </a>
          </div>
        </div>

        <div className={FooterCSS.footerSubscribe}>
          <input
            type="email"
            placeholder="Input your email"
            className={FooterCSS.emailInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            className={FooterCSS.submitBtn}
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
          <span>
            Get latest updates on our blog and posts so you won't miss delicious
            recipes
          </span>
        </div>
        <div className={FooterCSS.footerOtherSites}>
          <h2 className={FooterCSS.ourSites}>
            Our <span className={FooterCSS.coloredText}>Sites</span>
          </h2>
          <ul>
            <li>
              <a href="#" onClick={handleAccountAddress}>
                ChookBuddies.com
              </a>
            </li>
            <li>
              <a href="#" onClick={handleAccountAddress}>
                ChookingChef.com
              </a>
            </li>
            <li>
              <a href="#" onClick={handleAccountAddress}>
                TastyTreatsDelight.com
              </a>
            </li>
            <li>
              <a href="#" onClick={handleAccountAddress}>
                FlavorfulFeasts.net
              </a>
            </li>
            <li>
              <a href="#" onClick={handleAccountAddress}>
                GourmetGoodies.org
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={FooterCSS.footerSecondColumn}>
        <span className={FooterCSS.copyright}>
          ©2024 ChookBook |{" "}
          <a href="#" onClick={showPrivacyPolicy}>
            Privacy and Policy
          </a>{" "}
          | Site by JJBB
        </span>
      </div>
    </footer>
  );
}

export default Footer;
