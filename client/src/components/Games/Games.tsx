import React from "react";
import "./Games.css";
import "../../styles/heading.css";
import svarog from "../../images/Svarog/Svarog-cover.webp";
import paperSharp from "../../images/PaperSharp/PaperSharp-Cover.webp";
import itch from "../../images/Logo/itch.png";

export default function Content(): React.JSX.Element {
  return (
    <div id="games" className="games">
      <div className="heading">
        <div className="content">
          <h1>Our Games</h1>
        </div>
      </div>
      <div id="svarog-container" className="game-container">
        <div className="content">
          <div className="game-flex">
            <img className="game-image" alt="svarog-image" src={svarog} />
            <div className="game-info">
              <h2 className="game-title">SVAROG</h2>
              <p className="game-desc">
                Pixel-art metroidvania set in{" "}
                <b className="highlight">Slavic mythology</b>. Fight your way
                trough the lands of Javia to reach the Underwold and take down
                it's god - <b className="highligth">Veles</b>.
              </p>
              <hr></hr>
              <h2>Available On</h2>
              <div className="platforms">
                <a
                  href="https://bloodassassin89.itch.io/svarog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon">
                    <img src={itch} alt="itch_logo" />
                    <p>Itch.io</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="papersharp-container" className="game-container">
        <div className="content">
          <div className="game-flex">
            <img
              className="game-image"
              alt="paper_sharp_image"
              src={paperSharp}
            />
            <div className="game-info">
              <h2 className="game-title">Paper Sharp</h2>
              <p className="game-desc">
                A mathematical-historical educational video game set in the{" "}
                <b className="highlight">17th century Italy</b>. The game is
                based on the real historical figure{" "}
                <b className="highlight">Antonio Maria del Fiore</b>, a student
                of
                <b className="highlight"> Scipione del Ferro</b> who invented
                the first cubic equation.
              </p>
              <hr></hr>
              <h2>Available On</h2>
              <div className="platforms">
                <a
                  href="https://bloodassassin89.itch.io/paper-sharp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon">
                    <img src={itch} alt="itch_logo"></img>
                    <p>Itch.io</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
