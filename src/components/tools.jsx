import React from "react";
import photo1 from "../assets/images/logoGithub.png";
import photo2 from "../assets/images/logoFigma.png";
import photo3 from "../assets/images/logoTrello.png";
import photo4 from "../assets/images/logoVsc.png";

const Outils = () => {
  return (
    <section className="outils-section">
      <h1 className="outils-title">OUTILS</h1>
      <div className="photos-container">
        <img src={photo1} alt="Photo 1" className="photo" />
        <img src={photo2} alt="Photo 2" className="photo" />
        <img src={photo3} alt="Photo 3" className="photo" />
        <img src={photo4} alt="Photo 4" className="photo" />
      </div>
    </section>
  );
};

export default Outils;
