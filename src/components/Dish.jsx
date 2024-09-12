import "../styles/Dish.css";
import "../styles/index.css";
import React, { useState, useEffect, useRef } from "react";

function Dish() {
  const [dishes, setDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [mainIngredients, setMainIngredients] = useState([]);
  const [cookingTimes, setCookingTimes] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedCookingTime, setSelectedCookingTime] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fetch JSON data from the public folder
    fetch("/dish.json")
      .then((response) => response.json())
      .then((data) => {
        setDishes(data);
        console.log("Dishes loaded:", data); // Debugging

        // Extract unique main ingredients
        const ingredientsSet = new Set(
          data.map((dish) => dish.mainIngredients)
        );
        setMainIngredients(Array.from(ingredientsSet));

        // Extract unique cooking times
        const timesSet = new Set(data.map((dish) => dish["cooking-time"]));
        setCookingTimes(Array.from(timesSet).sort((a, b) => a - b));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
    if (isVisible) {
      setSelectedDish(null);
    }
  };

  function showRecipe(e) {
    const dishId = Number(e.target.value); // Get the ID of the clicked button
    console.log("Clicked button ID:", dishId); // Debugging
    const dish = dishes.find((dish) => dish.id === dishId); // Find the corresponding dish
    console.log("Found dish:", dish); // Debugging
    setSelectedDish(dish); // Set the selected dish
    setIsVisible(true);
  }

  function handleIngredientChange(e) {
    setSelectedIngredient(e.target.value);
  }

  function handleCookingTimeChange(e) {
    setSelectedCookingTime(e.target.value);
  }

  // Filter dishes based on selected ingredient and cooking time
  const filteredDishes = dishes.filter(
    (dish) =>
      (selectedIngredient === "" ||
        dish.mainIngredients === selectedIngredient) &&
      (selectedCookingTime === "" ||
        dish["cooking-time"] === Number(selectedCookingTime))
  );

  function underDevelopmentAlert() {
    alert("This part is still under development");
  }
  return (
    <section className="recipe-section">
      <button
        id="shadow-cntr"
        onClick={toggleVisibility}
        style={{
          display: isVisible ? "flex" : "none",
        }}
      ></button>
      {selectedDish && (
        <div className="dish-recipe-cntr">
          <button
            id="close-btn"
            onClick={() => {
              setSelectedDish(null);
              setIsVisible(false);
            }}
          >
            <i className="fa-solid fa-square-xmark"></i>
          </button>
          <div className="recipe-image-cntr">
            <img src={selectedDish.image} alt={selectedDish.name} />
          </div>
          <div className="recipe-list-cntr">
            <h2 className="recipe-dish-name">{`"${selectedDish.name}"`}</h2>
            <span className="recipe-txt">Recipe</span>
            <ol className="recipe-steps">
              {selectedDish["cooking-steps"] ? (
                Object.values(selectedDish["cooking-steps"]).map(
                  (step, index) => (
                    <li key={index}>{`${index + 1}. ${step}`}</li>
                  )
                )
              ) : (
                <li>No recipe steps available</li>
              )}
            </ol>
            <span className="ingredients-txt">Ingredients</span>
            <ul className="recipe-ingredients">
              {selectedDish.ingredients ? (
                Object.entries(selectedDish.ingredients).map(
                  ([ingredient, quantity], index) => (
                    <li key={index}>{`${ingredient}: ${quantity}`}</li>
                  )
                )
              ) : (
                <li>No ingredients available</li>
              )}
            </ul>
          </div>
        </div>
      )}

      <div className="recipe-main-cntr">
        <h2 className="recipe-section-title">Dishes & Recipes</h2>

        <div className="sort-and-search-cntr">
          <div className="sort-time-cntr">
            <label htmlFor="options-time">Show dishes by cooking time: </label>
            <select
              id="options-time"
              name="options-time"
              className="options-time"
              value={selectedCookingTime}
              onChange={handleCookingTimeChange}
            >
              <option value="">Show All</option>
              {cookingTimes.map((time) => (
                <option key={time} value={time}>
                  {time} minutes
                </option>
              ))}
            </select>
          </div>
          <div className="sort-main-ingredient-cntr">
            <label htmlFor="options-main-ingredients">
              Show dish with main ingredient:
            </label>
            <select
              id="options-main-ingredients"
              name="options-main-ingredients"
              className="options-main-ingredients"
              value={selectedIngredient}
              onChange={handleIngredientChange}
            >
              <option value="">Show All</option>
              {mainIngredients.map((ingredient, index) => (
                <option key={index} value={ingredient}>
                  {ingredient}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="all-dishes-cntr">
          {filteredDishes.length === 0 ? (
            <p className="no-dish-txt">{`"No Dishes Found"`}</p>
          ) : (
            filteredDishes.map((dish) => (
              <div className="dish-cntr" key={dish.id}>
                <div className="dish-cooking-time">
                  <span className="cooking-time-txt">
                    {dish["cooking-time"]}mins
                  </span>
                </div>
                <div className="dish-img-cntr">
                  <img src={dish.image} alt={dish.name} />
                </div>
                <span className="dish-name">{dish.name}</span>
                <div className="dish-button-cntr">
                  <button
                    className="recipe-btn"
                    id={dish.id}
                    value={dish.id}
                    onClick={showRecipe} // Ensure event object is passed
                  >
                    Recipe
                  </button>
                  <button className="cook-btn" onClick={underDevelopmentAlert}>
                    Cook
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Dish;
