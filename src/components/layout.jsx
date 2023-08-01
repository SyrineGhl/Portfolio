import React from "react";
import logo from "../assets/logo/logo.png";
import logoGithub from "../assets/images/logoGithub.png";
import photo2 from "../assets/images/iconGmail.png";
import photo3 from "../assets/images/iconLinkedin.png";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <nav className="left">
          <ul>
            <li>
              <a href="/">WELCOME</a>
            </li>
            <li>
              <a href="/">PROJETS</a>
            </li>
          </ul>
        </nav>
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <nav className="right">
          <ul>
            <li>
              <a href="/a-propos">ABOUT ME</a>
            </li>
            <li>
              <a href="/projets">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p className="textFooter">© Copyright 2023 - Syrine Ghoul. Tous droits réservés.</p>
        <div class="imagesContainer">
        <img src={logoGithub} alt="Photo 1" />
        <img src={photo2} alt="Photo 2" />
        <img src={photo3} alt="Photo 3" />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
