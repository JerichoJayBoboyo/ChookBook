import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import AllIngredients from "./components/AllIngredients";

createRoot(document.getElementById("root-ingredients")).render(
  <StrictMode>
    <Nav />
    <AllIngredients />
    <Footer />
  </StrictMode>
);
