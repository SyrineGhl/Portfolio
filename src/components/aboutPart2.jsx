import React from "react";
import NextPhoto from "../assets/images/meAbout.jpg";
import blackAboutImage from "../assets/images/blackAbout.jpg";

const AboutPart2 = () => {
  return (
    <div>
    
      <div
        className="black-about-image"
        style={{
          backgroundImage: `url(${blackAboutImage})`,
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(25%)",
          position: "relative",
        }}
      >
       
        <div className="image-about-2" style={{ position: "absolute", top: "40px", right: "40px", width: "28%" }}>
          <img src={NextPhoto} alt="next photo" style={{ width: "100%" }} />
        </div>

       
        <div className="text2" style={{ position: "absolute", bottom: "40px", left: "40px", color: "white", fontSize: "16px" }}>
          <p>
            Et ce n'est pas tout ! Mon aventure dans le monde du développement va bien au-delà du front-end. Je possède également des compétences en back-end avec une affinité particulière pour NodeJs, ainsi que des connaissances en bases de données MongoDB. Cette polyvalence me permet de concevoir des applications web complètes, de la conception à la mise en œuvre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPart2;
