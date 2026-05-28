import React, { useEffect, useRef } from "react";
import "./Gameplay.css";
import logo from "../../images/Logo/TaglientGamesLogo.png";
import gameplayVideo from "../../videos/RiverSpirit Entrance.mp4";

export default function Gameplay(): React.JSX.Element {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const parallaxSpeed = 0.3;

  useEffect(() => {
    let rafId: number;

    const handleScroll = (): void => {
      rafId = requestAnimationFrame(() => {
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translateY(${window.scrollY * parallaxSpeed}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div>
      <div
        ref={parallaxRef}
        className="video-container"
        style={{ willChange: "transform" }} // Improves performance
      >
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
          <a href="#games">
            <button className="index-button games-button">Games</button>
          </a>
          <a href="#about">
            <button className="index-button people-button">People</button>
          </a>
        </div>
      </div>
    </div>
  );
}
