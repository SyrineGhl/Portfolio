import React from "react";
import logoGithub from "../assets/images/logoGithub.png";
import photo2 from "../assets/images/iconGmail.png";
import photo3 from "../assets/images/iconLinkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="textFooter">© Copyright 2023 - Syrine Ghoul. Tous droits réservés.</p>
      <div className="imagesContainer">
        <img src={logoGithub} alt="logo de github" />
        <img src={photo2} alt="logo de gmail" />
        <img src={photo3} alt="logo de linkedin" />
      </div>
    </footer>
  );
};

export default Footer;
