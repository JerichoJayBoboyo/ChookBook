import React, { useState } from "react";
import CookSecCSS from "./CookSecCSS.module.css"; // Adjust path as necessary

const dishes = [
  { id: 1, name: "Chicken Adobo", mainIngredients: "Chicken", cookingTime: 45 },
  { id: 2, name: "Arroz Caldo", mainIngredients: "Chicken", cookingTime: 80 },
  { id: 3, name: "Bagnet", mainIngredients: "Pork", cookingTime: 195 },
  // ... other dishes
  { id: 20, name: "Tapsilog", mainIngredients: "Beef", cookingTime: 40 },
];

function DishSearch() {
  const [selectedDishId, setSelectedDishId] = useState(null); // Initialize with null or 0
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchByName = () => {
    const dish = dishes.find(
      (dish) => dish.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (dish) {
      setSelectedDishId(dish.id);
    } else {
      // Handle case when no dish is found
      setSelectedDishId(null); // or set to some default value
      alert("Dish not found");
    }
  };

  return (
    <div>
      <input
        type="text"
        name="dishNameInput"
        className={CookSecCSS.searchDishName}
        placeholder="Search a Dish by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearchByName}>Search by Name</button>
      <div>
        Selected Dish ID: {selectedDishId !== null ? selectedDishId : "None"}
      </div>
    </div>
  );
}

export default DishSearch;
