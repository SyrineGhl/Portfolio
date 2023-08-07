import React, { useState, useEffect } from "react";
import photoSkills from "../assets/images/photoSkills.jpg";
import marketingWebImage from "../assets/images/photo2.jpg";
import outilsLogicielsImage from "../assets/images/photoGraduation.jpg";
// import arrowIcon from "../assets/icon/iconFleche.png";
// import arrowLeft from "../assets/icon/iconFlecheGauche.png";

const Skills = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: "Développement Front-End & Notions en Back-End",
      image: photoSkills,
      description:
        "Maîtrise des langages HTML, CSS et JavaScript pour créer des interfaces web attrayantes et interactives.\n\nCapacité à intégrer du contenu et à mettre en œuvre des interfaces responsive, assurant une expérience utilisateur optimale sur tous les appareils.\n\nConnaissance approfondie des frameworks tels que React, permettant de développer des éléments d'interface de manière modulaire et performante.\n\nExpérience dans la configuration de la navigation entre les pages avec React Router, offrant une navigation fluide et intuitive aux utilisateurs.\n\nAptitude à optimiser les performances et à déboguer des sites web pour garantir une expérience utilisateur fluide et sans bugs.\n\nNotions en développement back-end avec Node.js, permettant d'assurer des interactions basiques entre le front-end et le serveur.\n\nCapacité à mettre en place un modèle logique de données conforme à la réglementation, assurant une gestion efficace des informations sensibles.",
    },
    {
      title: "Compétences Complémentaires",
      image: marketingWebImage,
      description:
        "Marketing Web et SEO : Expérience dans la mise en œuvre de campagnes marketing web, visant à promouvoir efficacement les sites sur les moteurs de recherche et à optimiser le référencement naturel pour améliorer leur visibilité.\n\nCapacité à créer des contenus SEO de qualité, contribuant ainsi à accroître le classement des sites web sur les moteurs de recherche et à attirer davantage de trafic organique.\n\n Maîtrise des Outils et Logiciels.Connaissance approfondie des logiciels Altea, Ères, Word, Excel, Power Point, Access, Outlook, Ciel Compta, Adobe CS, Shopify, 1&1, OVH, et Wordpress.",
    },
    {
      title: "Diplôme et Formations",
      image: outilsLogicielsImage,
      description:
        "Diplôme Titre V Développeur Web (2022-2023).\n\n Master 1 Digital Studies, Information & Communication (2018-2019) : Université de Nice Sophia Antipolis.\n\nLicence Sciences de l'Information et de la Communication (2015-2018) : Université de Nice Sophia Antipolis.",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const newIndex = (slideIndex + 1) % slides.length;
      setSlideIndex(newIndex);
    }, 3000); 

    return () => clearInterval(slideInterval);
  }, [slideIndex]);


  return (
    <section className="skills-section">
      <div className="left-part">
        <h1 className="TitleSkills"> SKILLS</h1>
      </div>
      <div className="center-part">
        <img
          src={slides[slideIndex].image}
          alt="competence carousel"
          className="center-photo"
        />
      </div>
      <div className="right-part">
        <h2 className="right-title">{slides[slideIndex].title}</h2>
        <p className="description">{slides[slideIndex].description}</p>
        <div className="dot-container">
          {slides.map((slide, index) => (
            <span
              key={index}
              className={`dot-skills ${index === slideIndex ? "active" : ""}`}
              onClick={() => setSlideIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
