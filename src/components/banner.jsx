import React from "react";
import banner from "../assets/images/banner.png";
import maPhoto from "../assets/images/maPhoto.png";

const Banner = () => {
  return (
    <div className="banner">
      <img className="bannerImg" src={banner} alt="Bannière" />
      <div className="overlay-photo">
        <img src={maPhoto} alt="Superposée" />
      </div>
    </div>
  );
};

export default Banner;
