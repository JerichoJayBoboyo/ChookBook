import TopDishSecCSS from "../styles/TopDishSec.module.css";
import "../styles/index.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function TopDishSec() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Fetch JSON data from the public folder
    fetch("/dish.json")
      .then((response) => response.json())
      .then((data) => setDishes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [dishes]);

  // Sort dishes by popularity in descending order and get the top 3
  const topDishes = dishes
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3);

  return (
    <section className={TopDishSecCSS.topDishSection}>
      <div className={TopDishSecCSS.topDishMainCntr}>
        <h2 className={TopDishSecCSS.topFavoriteTitle}>Top Favorite Dishes</h2>
        <div className={TopDishSecCSS.topDishCntr}>
          {topDishes.map((dish) => (
            <Link
              to={`/Recipe`}
              key={dish.id}
              className={TopDishSecCSS.dishCntr}
            >
              <h3 className={TopDishSecCSS.dishName}>{dish.name}</h3>
              <div className={TopDishSecCSS.dishImgCntr}>
                <img src={dish.image} alt={dish.name} />
              </div>
              <span className={TopDishSecCSS.popularity}>
                {dish.popularity} people likes it <span>👍</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopDishSec;
