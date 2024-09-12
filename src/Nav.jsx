import { useEffect, useState, useRef } from "react";
import "./styles/index.css";
import "./styles/Nav.css";

function Nav() {
  const [navShowing, setNavShowing] = useState(false);
  const navContainerRef = useRef(null);

  function handleNavButton() {
    setNavShowing((prevPosition) => !prevPosition);
  }

  useEffect(() => {
    if (navContainerRef.current) {
      navContainerRef.current.style.right = navShowing ? "0" : "-1000px";
    }
  }, [navShowing]);

  useEffect(() => {
    function getCurrentHtmlFileName() {
      const fullUrl = window.location.href;
      const url = new URL(fullUrl);
      const pathname = url.pathname;
      const fileName = pathname.substring(pathname.lastIndexOf("/") + 1);
      return fileName;
    }

    function changeStyle() {
      // Remove any existing 'active' styles
      const navLinks = document.querySelectorAll(".navlinks-cntr a");
      navLinks.forEach((link) => {
        link.style.background = "";
        link.style.color = "";
      });

      // Get the current page file name
      const fileName = getCurrentHtmlFileName();

      // Ensure fileName is valid before using it
      const id = fileName.split(".")[0];
      if (id) {
        // Apply 'active' style to the current page link
        const currentLink = document.querySelector(`#${id}`);
        if (currentLink) {
          currentLink.style.background = "#1e212b";
          currentLink.style.color = "ghostwhite";
        }
      } else {
        console.warn("Invalid file name:", fileName);
      }
    }

    changeStyle();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <nav>
      <div className="nav-main-cntr">
        <div className="logo-cntr">
          <img src="/images/chookbook-logo.png" alt="Logo" />
        </div>
        <div className="navlinks-cntr" ref={navContainerRef}>
          <a className="nav-links-a" href="index.html" id="index">
            Home
          </a>
          <a className="nav-links-a" href="ingredients.html" id="ingredients">
            Ingredients
          </a>
          <a className="nav-links-a" href="recipes.html" id="recipes">
            Recipes
          </a>
          <a className="nav-links-a" href="about.html" id="about">
            About
          </a>
          <a className="nav-links-a" href="cook.html" id="cook">
            Cook
          </a>
        </div>
        <div className="nav-buttons">
          <button className="links-menu" onClick={handleNavButton}>
            <i
              className={`fa-solid fa-ellipsis ${navShowing ? "hidden" : ""}`}
            ></i>
            <i
              className={`fa-regular fa-circle-xmark ${
                navShowing ? "" : "hidden"
              }`}
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
