import "../styles/TopDishSec.css";
import "../styles/index.css";
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
    <section className="top-dish-section">
      <div className="top-dish-main-cntr">
        <h2 className="top-favorite-title">Top Favorite Dishes</h2>
        <div className="top-dish-cntr">
          {topDishes.map((dish) => (
            <a href="recipes.html" key={dish.id} className="dish-cntr">
              <h3 className="dish-name">{dish.name}</h3>
              <div className="dish-img-cntr">
                <img src={dish.image} alt={dish.name} />
              </div>
              <span className="popularity">
                {dish.popularity} people likes it <span>👍</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopDishSec;
