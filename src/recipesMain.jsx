import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Dish from "./components/Dish.jsx";
import ErrorBoundary from "./components/ErrorBoundary";

createRoot(document.getElementById("root-recipes")).render(
  <StrictMode>
    <ErrorBoundary>
      <>
        <Nav />
        <Dish />
        <Footer />
      </>
    </ErrorBoundary>
  </StrictMode>
);
