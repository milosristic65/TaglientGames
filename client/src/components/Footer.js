import React from "react";
import "../css/footer.css";
import logo from "../images/Logo/TaglientGamesLogo_White.png";

export default function Footer() {
  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    if (targetId === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Get current year for copyright date
  const currentYear = new Date().getFullYear();

  return (
    <nav className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#root" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#games" onClick={handleLinkClick}>
            Games
          </a>
          <a href="#about" onClick={handleLinkClick}>
            About
          </a>
          <a href="#contact" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
        <img src={logo} alt="Taglient_Games_Logo"/>
        <p>www.taglientgames.com</p>
        <p>
          This website is managed by a team of individuals and is not affiliated
          with a registered company.
        </p>
      </div>
      <div className="company">
        Location: Serbia <br />
        <br />
        Taglient Games © {currentYear}
      </div>
    </nav>
  );
}
