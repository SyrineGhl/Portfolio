import React, { useState, useEffect } from "react";
import banner from "../assets/images/banner2.jpg";
import maPhoto from "../assets/images/maPhoto.png";

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const maxParallaxOffset = 50; 
  const parallaxOffset = Math.min(scrollY * 0.5, maxParallaxOffset);

  return (
    <div className="banner">
      <div
        className="bannerImg"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPositionY: `${parallaxOffset}px`,
        }}
      />
      <div className="overlay-photo">
        <img src={maPhoto} alt="Superposée" />
      </div>
    </div>
  );
};

export default Banner;
