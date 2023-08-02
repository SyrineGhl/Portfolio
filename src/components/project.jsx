import React from "react";
import projet1 from "../assets/images/bluel.webp";
import projet2 from "../assets/images/booki.webp";
import projet3 from "../assets/images/KASA.png";

const Projets = () => {
  return (
    <section className="projets-section">
      <h1 className="projets-title">MES PROJETS</h1>
      <div className="proj-container">
        <div className="proj-item1">
          <img src={projet1} alt="Projet 1" />
        </div>
        <div className="proj-item2">
          <img src={projet2} alt="Projet 2" />
        </div>
        <div className="proj-item3">
          <img src={projet3} alt="Projet 3" />
        </div>
      </div>
      <button className="voir-button">VOIR</button>
    </section>
  );
};

export default Projets;
