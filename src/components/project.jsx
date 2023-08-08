import React, { useState } from "react";
import { Link } from "react-router-dom";
import projetBackground from "../assets/images/projet.jpg";

const Projets = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className="projets-section"
      style={{
        backgroundColor: isHovered ? "rgba(231, 224, 214, 1)" : "#f4f1e9",
        backgroundImage: isHovered ? `url(${projetBackground})` : "none",
        border: isHovered ? "1px solid rgba(0, 0, 0, 1)" : "none",
        transform: "scale(1, 1) translate(0px, 0px)",
        transitionDuration: "0.5s",
        transitionProperty: "background-color, border, transform",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/projets" className="proj-link">
        <div className="proj-container">
          <div className="proj-item">
            <h1>PROJETS</h1>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Projets;
