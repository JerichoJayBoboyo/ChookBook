import AllIngredientsCSS from "../styles/AllIngredients.module.css";
import "../styles/index.css";
import React, { useState, useEffect } from "react";

function AllIngredients() {
  const [allIngredients, setAllIngredients] = useState([]);

  useEffect(() => {
    fetch("/ChookBook//allIngredients.json")
      .then((response) => response.json())
      .then((data) => setAllIngredients(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Added dependency array to run the effect only once

  return (
    <section className={AllIngredientsCSS.allIngredientsSection}>
      <div className={AllIngredientsCSS.allIngredientsMainCntr}>
        <h2 className={AllIngredientsCSS.ingredientsTitle}>Ingredients list</h2>
        <div className={AllIngredientsCSS.ingredientsHeaderText}>
          <span className={AllIngredientsCSS.ingredientNameHeader}>
            Ingredient
          </span>
          <span className={AllIngredientsCSS.ingredientCategoryHeader}>
            Category
          </span>
          <span className={AllIngredientsCSS.ingredientDescriptionHeader}>
            Description
          </span>
        </div>
        <div className={AllIngredientsCSS.ingredientsBodyCntr}>
          {allIngredients.map((ingredient) => (
            <div
              className={AllIngredientsCSS.ingredientCntr}
              key={ingredient.name}
            >
              <span className={AllIngredientsCSS.ingredientsNameBody}>
                {" "}
                {ingredient.name}
              </span>
              <span className={AllIngredientsCSS.ingredientsCategoryBody}>
                {ingredient.ingredientsCategory}
              </span>
              <span className={AllIngredientsCSS.ingredientsDescriptionBody}>
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
