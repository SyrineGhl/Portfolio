import React, { useState, useEffect } from "react";
import photo1 from "../assets/images/logoGithub.png";
import photo2 from "../assets/images/logoFigma.png";
import photo3 from "../assets/images/logoTrello.png";
import photo4 from "../assets/images/logoVsc.png";
import photo5 from "../assets/icon/sassIcon.png";
import photo6 from "../assets/icon/reactIcon.png";
import photo7 from "../assets/icon/jsIcon.png";
import photo8 from "../assets/icon/cssIcon.png";
// import arrowLeft from "../assets/icon/gauche.png";
// import arrowIcon from "../assets/icon/droite.png";

const Outils = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: "OUTILS",
      images: [photo1, photo2, photo3, photo4],
    },
    {
      title: "LANGAGES",
      images: [photo5, photo6, photo7, photo8],
    },
  ];

  const handleSlideChange = (increment) => {
    const newIndex = (slideIndex + increment + slides.length) % slides.length;
    setSlideIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange(1); 
    }, 2000); 

 
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <section className="outils-section">
      <h1 className="outils-title">{slides[slideIndex].title}</h1>
      <div className="photos-container">
        {slides[slideIndex].images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`container ${index + 1}`}
            className="photo"
          />
        ))}
      </div>
    </section>
  );
};

export default Outils;
