import React from "react";
import logoGithub from "../assets/images/logoGithub.png";
import photo2 from "../assets/images/iconGmail.png";
import photo3 from "../assets/images/iconLinkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-image-text">
        <p className="textFooter">
          © Copyright 2023 - Syrine Ghoul. Tous droits réservés.
        </p>
        <div className="imagesContainer">
          <a href="https://github.com/SyrineGhl" target="_blank" rel="noopener noreferrer">
            <img src={logoGithub} alt="logo de github" />
          </a>
          <a href="mailto:syrine.ghoul@gmail.com">
            <img src={photo2} alt="logo de gmail" />
          </a>
          <a href="https://www.linkedin.com/in/syrine-ghoul" target="_blank" rel="noopener noreferrer">
            <img src={photo3} alt="logo de linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
