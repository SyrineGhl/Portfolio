import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import arrowBottom from "../assets/icon/iconflecheTop.png";
import arrowTop from "../assets/icon/iconflecheBottom.png"

import SectionProject from "../components/sectionProject";
import bookiImage from "../assets/images/booki.png";
import bluelImage from "../assets/images/bluel.webp";
import grimoireImage from "../assets/images/grimoire.webp";
import kasaImage from "../assets/images/kasa.webp";
import carducciImage from "../assets/images/carducci.webp";

const Project = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: bookiImage,
      title: "Booki - Intégration HTML & CSS",
      description:
        "L'entreprise a pour objectif de créer un site Internet où les utilisateurs pourront rechercher des hébergements et des activités dans la ville de leur choix. Ma mission consiste à intégrer l'interface du site en utilisant du code HTML et CSS, tout en respectant la maquette fournie.",
    },
    {
      image: bluelImage,
      title: "Sophie Bluel - Interface dynamique Javascript",
      description:
        "En tant que développeur front-end, j'ai été envoyé en renfort pour rejoindre une équipe travaillant sur la conception du site portfolio d'une architecte d'intérieur. Ma responsabilité est de développer la page de présentation des travaux de l'architecte en utilisant le code HTML fourni. En plus de cela, je suis chargé de créer la page de connexion de l'administrateur du site (le client) à partir de zéro, ainsi que de développer la modale permettant d'uploader de nouveaux médias également à partir de zéro.",
    },
    {
      image: carducciImage,
      title: "Nina Carducci - Débug et optimisation",
      description:
        "En tant que développeur freelance, les services d'optimisation SEO sont proposés à Nina Carducci pour son site. Une réponse favorable a été reçue pour effectuer une optimisation globale du site, en prenant en compte à la fois les performances et le référencement SEO. De plus, le référencement local sera mis en place en utilisant Schema.org, les metas seront ajoutées pour les réseaux sociaux, et les modifications nécessaires seront effectuées pour améliorer l'accessibilité du site.",
    },
    {
      image: kasaImage,
      title: "Kasa - Application web React",
      description:
        "En tant que développeur front-end freelance, j'ai été recruté par Kasa pour travailler sur le développement de leur nouvelle plateforme web. Mon objectif principal est de démarrer le projet React et de développer l'ensemble de l'application, y compris les composants React et les routes avec React Router.",
    },
    {
      image: grimoireImage,
      title: "Mon vieux grimoire - Backend NodeJs",
      description:
        "Kévin me contacte pour me proposer de collaborer avec lui en combinant nos compétences front-end et back-end sur un nouveau projet qui lui a été proposé. Le projet concerne la création d'un site de référencement et de notation de livres pour une petite chaîne de librairies. Ma mission principale sera de développer le backend, qui inclura les fonctionnalités d'inscription, de connexion, de déconnexion, d'ajout, de modifications et de suppression de livres, ainsi que la possibilité de noter les livres.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <Header />
      <section className="project-section">
        <h1 className="project-title">PROJETS</h1>
      </section>
      <SectionProject />

      <section className="next-section">
      <div className="slide-container">
        <div
          className="slide"
          style={{
            transform: `translateY(-${currentSlide * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide-item">
              <div className="slide-wrapper">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="slide-image"
                />
                <div className="slide-text">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="slide-arrows">
        <img
          src={arrowTop}
          alt="Flèche haut"
          className="arrow-icon"
          onClick={prevSlide}
        />
        <img
          src={arrowBottom}
          alt="Flèche bas"
          className="arrow-icon"
          onClick={nextSlide}
        />
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Project;
