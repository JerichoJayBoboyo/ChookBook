import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root-cook")).render(
  <StrictMode>
    <Nav />
    <Footer />
  </StrictMode>
);
