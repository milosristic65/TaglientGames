import React from "react";
import "./About.css";
import milos_pfp from "../../images/Team/milos.webp";
import luka_pfp from "../../images/Team/luka.webp";
import stefan_pfp from "../../images/Team/stefan.webp";

export default function About(): React.JSX.Element {
  return (
    <div id="about" className="about">
      <div className="content">
        <div className="us heading">
          <h1>About Us</h1>
          <p>
            We are a passionate team that loves playing and making video games!
          </p>
        </div>
        <br />
        <div className="founders">
          <h1>Our Team</h1>
          <p>
            We established <b className="highlight_blue">Taglient</b>{" "}
            <b className="highlight">Games</b> in pursuit of our dream to create
            amazing indie games that people will enjoy.
          </p>
          <div className="team">
            <a
              href="https://www.linkedin.com/in/milos-ristic-a61132242/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="team-member">
                <img src={milos_pfp} alt="Milos_Ristic" />
                <div className="team-info">
                  <h1>Milos Ristic</h1>
                  <p>Programmer | Lead Artist</p>
                  <p className="additional-text">
                    Milos is the creative force behind our art and design.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/luka-pavi%C4%87evi%C4%87-2bb44b310/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="team-member">
                <img src={luka_pfp} alt="Luka_Pavicevic" />
                <div className="team-info">
                  <h1>Luka Pavicevic</h1>
                  <p>Lead Programmer | Concept Artist</p>
                  <p className="additional-text">
                    Luka ensures our code is clean and efficient. He is also a
                    talented concept artist.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/stefan-jov%C4%8Di%C4%87-287809313/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="team-member">
                <img src={stefan_pfp} alt="Stefan_Jovcic" />
                <div className="team-info">
                  <h1>Stefan Jovcic</h1>
                  <p>Community Manager</p>
                  <p className="additional-text">
                    Stefan connects with our community and sometimes jumps in
                    for additional programming.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
