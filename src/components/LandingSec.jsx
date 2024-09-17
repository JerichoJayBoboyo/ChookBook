import React from "react";
import { Link } from "react-router-dom";
import LandingSecCSS from "../styles/LandingSec.module.css";
import "../styles/index.css";

function LandingSec() {
  return (
    <section className={LandingSecCSS.landingSection}>
      <div className={LandingSecCSS.landingSectionCntr}>
        <div className={LandingSecCSS.landingSecImgCntr}>
          <img
            src="/ChookBook/images/filipinofood.png"
            alt="filipinofood"
            className={LandingSecCSS.fillipinoFoodImg}
          />
        </div>
        <div className={LandingSecCSS.landingTextAndBtn}>
          <h2 className={LandingSecCSS.tasteOfPhilippinesTxt}>
            The taste of the Philippines
          </h2>
          <p className={LandingSecCSS.qoute}>
            Discover and savor the flavors of Philippine cuisine with our app.
            Rest assured, we will provide comprehensive guidance throughout the
            entire process, from preparation to tasting, so you need not worry
            about cooking.
          </p>
          <Link to="/Cook" className={LandingSecCSS.cookBtn}>
            I want to Cook!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LandingSec;
