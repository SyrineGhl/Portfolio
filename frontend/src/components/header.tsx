import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Mon Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
