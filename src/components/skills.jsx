import React from "react";
import photoSkills from "../assets/images/photoSkills.jpg"

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="left-part">
        <h1 className="TitleSkills"> SKILLS</h1>
      </div>
      <div className="center-part">
        <img src={photoSkills} alt="Photo" className="center-photo" />
      </div>
      <div className="right-part">
        <h2 className="right-title">
          Développement Front-End & Notions en Back-End
        </h2>
        <ul className="skills-list">
          <li>Maîtrise des langages HTML, CSS et JavaScript pour créer des interfaces web attrayantes et interactives.</li>
          <li>Capacité à intégrer du contenu et à mettre en œuvre des interfaces responsive, assurant une expérience utilisateur optimale sur tous les appareils.</li>
          <li>Connaissance approfondie des frameworks tels que React, permettant de développer des éléments d'interface de manière modulaire et performante.</li>
          <li>Expérience dans la configuration de la navigation entre les pages avec React Router, offrant une navigation fluide et intuitive aux utilisateurs.</li>
          <li>Aptitude à optimiser les performances et à déboguer des sites web pour garantir une expérience utilisateur fluide et sans bugs.</li>
          <li>Notions en développement back-end avec Node.js, permettant d'assurer des interactions basiques entre le front-end et le serveur.</li>
          <li>Capacité à mettre en place un modèle logique de données conforme à la réglementation, assurant une gestion efficace des informations sensibles.</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
