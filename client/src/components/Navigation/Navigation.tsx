import React, { useEffect } from "react";
import "./Navigation.css";
import logo from "../../images/Logo/TaglientGamesLogo_White.png";
import HamburgerMenu from "./Hamburger";

export default function Navigation(): React.JSX.Element {
  useEffect(() => {
    const navbar = document.querySelector<HTMLElement>(".navigation");
    const hamburger = document.querySelector<HTMLElement>(".hamburger-menu");

    const handleScroll = (): void => {
      if (!navbar || !hamburger) return;
      const hamburgerVisibility = window.getComputedStyle(hamburger).visibility;
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop < 200) {
        navbar.style.top = "0";
      } else if (hamburgerVisibility === "hidden") {
        navbar.style.top = "-100px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    event.preventDefault();
    const targetId =
      event.currentTarget.getAttribute("href")?.substring(1) ?? "";
    if (targetId === "" || targetId === "root") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navigation">
      <div className="navContent">
        <a href="#root" onClick={handleLinkClick}>
          <img src={logo} alt="Taglient_Games_Logo" className="logo" />
        </a>
        <HamburgerMenu />
        <ul className="nav-links">
          <li>
            <a href="#root" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#games" onClick={handleLinkClick}>
              Games
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
