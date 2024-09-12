import "../styles/AllIngredients.css";
import "../styles/index.css";
import React, { useState, useEffect } from "react";

function AllIngredients() {
  const [allIngredients, setAllIngredients] = useState([]);

  useEffect(() => {
    fetch("/allIngredients.json")
      .then((response) => response.json())
      .then((data) => setAllIngredients(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Added dependency array to run the effect only once

  return (
    <section className="all-ingredients-section">
      <div className="all-ingredients-main-cntr">
        <h2 className="ingredients-title">Ingredients list</h2>
        <div className="ingredients-header-text">
          <span className="ingredient-name-header">Ingredient</span>
          <span className="ingredient-category-header">Category</span>
          <span className="ingredient-description-header">Description</span>
        </div>
        <div className="ingredients-body-cntr">
          {allIngredients.map((ingredient) => (
            <div className="ingredient-cntr" key={ingredient.name}>
              <span className="ingredients-name-body"> {ingredient.name}</span>
              <span className="ingredients-category-body">
                {ingredient.ingredientsCategory}
              </span>
              <span className="ingredients-description-body">
                {ingredient.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllIngredients;
