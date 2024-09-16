import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CookSec from "../components/CookSec";

function Cook() {
  const location = useLocation();
  const { state } = location;
  const dishId = state?.dishId || 0;

  // Define state and setter for selectedDishId
  const [selectedDishId, setSelectedDishId] = useState(dishId);

  return (
    <CookSec
      selectedDishId={selectedDishId}
      setSelectedDishId={setSelectedDishId} // Pass the setter function
    />
  );
}

export default Cook;
