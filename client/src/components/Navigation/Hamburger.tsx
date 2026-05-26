import React, { useState } from "react";

export default function HamburgerMenu(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    event.preventDefault();
    setIsOpen(false);
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
    <div>
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`hamburger-menu ${isOpen ? "active" : ""}`}>
        <ul>
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
    </div>
  );
}
