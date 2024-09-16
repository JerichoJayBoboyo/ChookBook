import PromotionSecCSS from "../styles/PromotionSec.module.css";
import "../styles/index.css";
// import React, { useState, useEffect } from "react";

function PromotionSec() {
  return (
    <section className={PromotionSecCSS.promotionSection}>
      <div className={PromotionSecCSS.promotionMainCntr}>
        <div className={PromotionSecCSS.promotionTxt}>
          Savor the Philippines with every bite.{" "}
          <span className={PromotionSecCSS.promHighlightTxt}>
            Rich, savory, and different flavors will transport you to different
            islands
          </span>
          , highlighting the unique tastes of Filipino cuisine!
        </div>
        <div className={PromotionSecCSS.promotionImg}>
          <img src="/images/buddle-fight.jpg" alt="" />
        </div>

        <div className={PromotionSecCSS.promotionImg}>
          <img src="/images/karinderya.jpg" alt="" />
        </div>
        <div className={PromotionSecCSS.promotionTxt}>
          Embark on a culinary adventure with Filipino food, where{" "}
          <span className={PromotionSecCSS.promHighlightTxt}>
            every dish is a celebration
          </span>{" "}
          of bold flavors, aromatic spices, and heartwarming tradition.
        </div>

        <div className={PromotionSecCSS.promotionTxt}>
          Discover the essence of Filipino culture through its{" "}
          <span className={PromotionSecCSS.promHighlightTxt}>
            diverse and delectable cuisine
          </span>
          .
        </div>
        <div className={PromotionSecCSS.promotionImg}>
          <img src="/images/kids-while-eating.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default PromotionSec;
