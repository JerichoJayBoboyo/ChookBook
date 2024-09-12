import "../styles/PromotionSec.css";
import "../styles/index.css";
// import React, { useState, useEffect } from "react";

function PromotionSec() {
  return (
    <section className="promotion-section">
      <div className="promotion-main-cntr">
        <div className="promotion-txt">
          Savor the Philippines with every bite.{" "}
          <span className="prom-highlight-txt">
            Rich, savory, and different flavors will transport you to different
            islands
          </span>
          , highlighting the unique tastes of Filipino cuisine!
        </div>
        <div className="promotion-img">
          <img src="/images/buddle-fight.jpg" alt="" />
        </div>

        <div className="promotion-img">
          <img src="/images/karinderya.jpg" alt="" />
        </div>
        <div className="promotion-txt">
          Embark on a culinary adventure with Filipino food, where{" "}
          <span className="prom-highlight-txt">
            every dish is a celebration
          </span>{" "}
          of bold flavors, aromatic spices, and heartwarming tradition.
        </div>

        <div className="promotion-txt">
          Discover the essence of Filipino culture through its{" "}
          <span className="prom-highlight-txt">
            diverse and delectable cuisine
          </span>
          .
        </div>
        <div className="promotion-img">
          <img src="/images/kids-while-eating.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default PromotionSec;
