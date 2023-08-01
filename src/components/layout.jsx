import React from "react";
import logo from "../assets/logo/logo.png";

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
      <footer className="footer">© Copyright 2023 - Syrine Ghoul. Tous droits réservés.</footer>
    </div>
  );
};

export default Layout;
