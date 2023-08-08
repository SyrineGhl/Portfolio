import React, { useState } from "react";
import { Link } from "react-router-dom";
import aboutMeBackground from "../assets/images/me.jpg";

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className="about-me-section"
      style={{
        backgroundImage: isHovered
          ? `url(${aboutMeBackground})`
          : "none",
        border: isHovered ? "1px solid rgba(0, 0, 0, 1)" : "none",
        transform: "scale(1, 1) translate(0px, 0px)",
        transitionDuration: "0.5s",
        transitionProperty: "background-color, border, transform, opacity, filter",
        position: "relative",
        overflow: "hidden",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to="/a-propos" className="about-me-link">
        <div className="about-me-container">
          <div className="about-me-item">
            <h1>ABOUT ME</h1>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default AboutMe;
