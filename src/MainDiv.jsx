import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Nav from "./Nav.jsx";
import Home from "./pages/Home.jsx";
import Ingredients from "./pages/Ingredients.jsx";
import Recipe from "./pages/Recipe.jsx";
import Cook from "./pages/Cook.jsx";
import TitleManager from "./components/TitleManager.jsx";

function MainDiv() {
  return (
    <BrowserRouter basename="/ChookBook/">
      <header>
        <Nav />
      </header>
      <TitleManager /> {/* Include the TitleManager component */}
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Ingredients" element={<Ingredients />} />
          <Route path="Recipe" element={<Recipe />} />
          <Route path="Cook" element={<Cook />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default MainDiv;
