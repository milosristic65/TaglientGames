import React from "react";
import "./Navigation.css";

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="navbar">
      <div className="logo">Taglient Games</div>
      <div className="menu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
