import { useEffect, useState, useRef } from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./styles/index.css";
import NavCSS from "./styles/Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [navShowing, setNavShowing] = useState(false);
  const navContainerRef = useRef(null);
  const location = useLocation();

  function handleNavButton() {
    setNavShowing((prevPosition) => !prevPosition);
  }

  useEffect(() => {
    if (navContainerRef.current) {
      navContainerRef.current.style.right = navShowing ? "0" : "-1000px";
    }
  }, [navShowing]);

  useEffect(() => {
    function getCurrentPageId() {
      const path = location.pathname;
      const pageId = path.substring(path.lastIndexOf("/") + 1);
      return pageId;
    }

    function updateNavLinkStyles() {
      // Remove existing 'active' styles
      document.querySelectorAll(`.${NavCSS.navLinksA}`).forEach((link) => {
        link.style.background = "";
        link.style.color = "";
      });

      // Get the current page id
      const pageId = getCurrentPageId();

      if (pageId) {
        // Apply 'active' style to the current page link
        const currentLink = document.querySelector(`a[href*="${pageId}"]`);
        if (currentLink) {
          currentLink.style.background = "#1e212b";
          currentLink.style.color = "ghostwhite";
        }
      } else {
        console.warn("Invalid page ID:", pageId);
      }
    }

    updateNavLinkStyles();
  }, [location.pathname]);

  return (
    <nav>
      <div className={NavCSS.navMainCntr}>
        <div className={NavCSS.logoCntr}>
          <img src="/images/chookbook-logo.png" alt="Logo" />
        </div>
        <div className={NavCSS.navlinksCntr} ref={navContainerRef}>
          <NavLink
            to="/"
            className={NavCSS.navLinksA}
            onClick={handleNavButton}
          >
            Home
          </NavLink>
          <NavLink
            to="/Ingredients"
            className={NavCSS.navLinksA}
            onClick={handleNavButton}
          >
            Ingredients
          </NavLink>
          <NavLink
            to="/Recipe"
            className={NavCSS.navLinksA}
            onClick={handleNavButton}
          >
            Recipe
          </NavLink>
          <NavLink
            to="/Cook"
            className={NavCSS.navLinksA}
            onClick={handleNavButton}
          >
            Cook
          </NavLink>
        </div>
        <div className={NavCSS.navButtons}>
          <button className={NavCSS.linksMenu} onClick={handleNavButton}>
            <FontAwesomeIcon
              icon={faEllipsis}
              className={`${NavCSS.navBtnSvgEllipsis} ${
                navShowing ? NavCSS.hidden : ""
              }`}
            />
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={`${NavCSS.navBtnSvgX} ${
                navShowing ? "" : NavCSS.hidden
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
