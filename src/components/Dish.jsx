import DishCSS from "../styles/Dish.module.css";
import "../styles/index.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faClock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Dish() {
  const [dishes, setDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);
  const [mainIngredients, setMainIngredients] = useState([]);
  const [cookingTimes, setCookingTimes] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [selectedCookingTime, setSelectedCookingTime] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleCookClick = (id) => {
    navigate("/Cook", { state: { dishId: id } });
  };

  useEffect(() => {
    fetch("/ChookBook//dish.json")
      .then((response) => response.json())
      .then((data) => {
        setDishes(data);

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
    const dishId = Number(e.target.value);
    const dish = dishes.find((dish) => dish.id === dishId);
    setSelectedDish(dish);
    setIsVisible(true);
  }

  function handleIngredientChange(e) {
    setSelectedIngredient(e.target.value);
  }

  function handleCookingTimeChange(e) {
    setSelectedCookingTime(e.target.value);
  }

  const filteredDishes = dishes.filter((dish) => {
    const matchesIngredient =
      selectedIngredient === "" ||
      dish.mainIngredients.includes(selectedIngredient);
    const matchesCookingTime =
      selectedCookingTime === "" ||
      dish["cooking-time"] === Number(selectedCookingTime);
    return matchesIngredient && matchesCookingTime;
  });

  return (
    <section className={DishCSS.recipeSection}>
      <button
        className={DishCSS.shadowCntr}
        onClick={toggleVisibility}
        style={{ display: isVisible ? "flex" : "none" }}
      ></button>
      {selectedDish && (
        <div className={DishCSS.dishRecipeCntr}>
          <button
            className={DishCSS.closeBtn}
            onClick={() => {
              setSelectedDish(null);
              setIsVisible(false);
            }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <div className={DishCSS.recipeImageCntr}>
            <img src={selectedDish.image} alt={selectedDish.name} />
          </div>
          <div className={DishCSS.recipeListCntr}>
            <h2
              className={DishCSS.recipeDishName}
            >{`"${selectedDish.name}"`}</h2>
            <span className={DishCSS.recipeTxt}>Recipe</span>
            <ol className={DishCSS.recipeSteps}>
              {selectedDish["cookingSteps"] ? (
                Object.values(selectedDish["cookingSteps"]).map(
                  (step, index) => (
                    <li key={index}>{`${index + 1}. ${step.instruction}`}</li>
                  )
                )
              ) : (
                <li>No recipe steps available</li>
              )}
            </ol>
            <span className={DishCSS.ingredientsTxt}>Ingredients</span>
            <ul className={DishCSS.recipeIngredients}>
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

      <div className={DishCSS.recipeMainCntr}>
        <h2 className={DishCSS.recipeSectionTitle}>Dishes & Recipes</h2>

        <div className={DishCSS.sortAndSearchCntr}>
          <div className={DishCSS.sortTimeCntr}>
            <label htmlFor="options-time">Show dishes by cooking time: </label>
            <select
              id="options-time"
              name="options-time"
              className={DishCSS.optionsTime}
              value={selectedCookingTime}
              onChange={handleCookingTimeChange}
            >
              <option value="">Show All</option>
              {cookingTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time} minutes
                </option>
              ))}
            </select>
          </div>
          <div className={DishCSS.sortMainIngredientCntr}>
            <label htmlFor="options-main-ingredients">
              Show dish with main ingredient:
            </label>
            <select
              id="options-main-ingredients"
              name="options-main-ingredients"
              className={DishCSS.optionsMainIngredients}
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

        <div className={DishCSS.allDishesCntr}>
          {filteredDishes.length === 0 ? (
            <p className={DishCSS.noDishTxt}>No Dishes Found</p>
          ) : (
            filteredDishes.map((dish) => (
              <div className={DishCSS.dishCntr} key={dish.id}>
                <div className={DishCSS.dishCookingTime}>
                  <span className={DishCSS.cookingTimeTxt}>
                    <FontAwesomeIcon icon={faClock} />
                    {dish["cooking-time"]} mins
                  </span>
                </div>
                <div className={DishCSS.dishImgCntrDish}>
                  <img src={dish.image} alt={dish.name} />
                </div>
                <span className={DishCSS.dishName}>{dish.name}</span>
                <div className={DishCSS.dishButtonCntr}>
                  <button
                    className={DishCSS.recipeBtn}
                    id={dish.id}
                    value={dish.id}
                    onClick={showRecipe}
                  >
                    Recipe
                  </button>
                  <button
                    className={DishCSS.cookBtn}
                    id={dish.id}
                    value={dish.id}
                    onClick={() => handleCookClick(dish.id)}
                  >
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
