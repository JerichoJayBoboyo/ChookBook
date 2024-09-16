// TitleManager.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles = {
  "/": "ChookBook | Home",
  "/Ingredients": "ChookBook | Ingredients",
  "/Recipe": "ChookBook | Recipes",
};

function TitleManager() {
  const location = useLocation();
  const title = titles[location.pathname] || "Default Title";

  useEffect(() => {
    document.title = title;
  }, [title]);

  return null; // This component does not render anything
}

export default TitleManager;
