import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="left">
        <ul>
          <li>
            <a href="/">WELCOME</a>
          </li>
          <li>
            <Link to="/projets">PROJETS</Link>
          </li>
        </ul>
      </nav>
      <div className="logo-container">
      <Link to="/">  
          <img className="logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="right">
        <ul>
          <li>
            <a href="/a-propos">ABOUT ME</a>
          </li>
          <li>
          <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;