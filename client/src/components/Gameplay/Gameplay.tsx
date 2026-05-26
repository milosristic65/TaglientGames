import React, { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import "./Gameplay.css";
import logo from "../../images/Logo/TaglientGamesLogo.png";
import gameplayVideo from "../../videos/RiverSpirit Entrance.mp4";

export default function Gameplay(): React.JSX.Element {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    event.preventDefault();
    const targetId =
      event.currentTarget.getAttribute("href")?.substring(1) ?? "";
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = (): void => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle: CSSProperties = {
    transform: `translateY(${scrollY * 0.4}px)`,
    transition: "transform 0.01s ease-out",
  };

  return (
    <div>
      <div className="video-container" style={parallaxStyle}>
        <video autoPlay loop muted playsInline className="background-video">
          <source src={gameplayVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="index-content">
        <img src={logo} alt="Taglient_Games_Logo" />
        <p className="index-text">
          We are a game development studio that puts{" "}
          <b className="highlight">ART</b> first!
        </p>
        <div className="buttons">
          <a href="#games" onClick={handleLinkClick}>
            <button className="index-button games-button">Games</button>
          </a>
          <a href="#about" onClick={handleLinkClick}>
            <button className="index-button people-button">People</button>
          </a>
        </div>
      </div>
    </div>
  );
}
