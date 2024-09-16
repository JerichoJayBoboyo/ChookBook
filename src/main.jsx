import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./Nav.jsx";
import MainDiv from "./MainDiv.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Nav /> */}
    <MainDiv />
    <Footer />
  </StrictMode>
);
