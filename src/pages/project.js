import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import fixtureData from "../fixture/fixture.json";
import SectionProject from "../components/sectionProject";
import rightArrowIcon from "../assets/icon/flecheDroite.png";
import leftArrowIcon from "../assets/icon/flecheGauche.png";

const Project = () => {
  const { projects } = fixtureData;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + projects.length) % projects.length);
  };

  return (
    <>
      <Header />
      <section className="project-section">
        <h1 className="project-title">PROJETS</h1>
      </section>
      <SectionProject />

      <section className="next-section-project-page">
        <div className="slide-container">
          <div className="slide">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`slide-item ${index === currentSlide ? "active" : ""}`}
              >
                <div className="slide-wrapper">
                  <img
                    src={project.image}
                    alt={`Slide ${index + 1}`}
                    className="slide-image"
                  />
                  <div className="slide-text">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                   
                    <div className="project-constraints">
                      <h3>Problèmes Rencontrés</h3>
                      <ul>
                        {project.constraints.map((constraint, constraintIndex) => (
                          <li key={constraintIndex}>{constraint}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-skills">
                      <h3>Compétences Développées</h3>
                      <ul>
                        {project.skills.map((skill, skillIndex) => (
                          <li key={skillIndex}>{skill}</li>
                        ))}
                      </ul>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="slide-button">Code Github</button>
                  </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-arrows">
        <img
  src={leftArrowIcon}
  alt="Flèche droite"
  className="arrow-icon-project-left"
  onClick={nextSlide}
/>
<img
  src={rightArrowIcon}
  alt="Flèche gauche"
  className="arrow-icon-project-right"
  onClick={prevSlide}
/>

        </div>
        <div className="slide-dots">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`slide-dot ${index === currentSlide ? "active-dot" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Project;
