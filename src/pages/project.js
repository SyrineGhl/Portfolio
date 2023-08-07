import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import fixtureData from "../fixture/fixture.json";
import SectionProject from "../components/sectionProject";

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

      <section className="next-section">
        <div className="slide-container">
          <div
            className="slide"
            style={{
              transform: `translateY(-${currentSlide * (100 / projects.length)}%)`,
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="slide-item">
                <div className="slide-wrapper">
                  <img
                    src={project.image}
                    alt={`Slide ${index + 1}`}
                    className="slide-image"
                  />
                  <div className="slide-text">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    <div className="project-skills">
                      <h3>Compétences Développées</h3>
                      <ul>
                        {project.skills.map((skill, skillIndex) => (
                          <li key={skillIndex}>{skill}</li>
                        ))}
                      </ul>
                    </div>

                  
                    <div className="project-constraints">
                      <h3>Problèmes Rencontrés</h3>
                      <ul>
                        {project.constraints.map((constraint, constraintIndex) => (
                          <li key={constraintIndex}>{constraint}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slide-arrows">
          <img
            src={require("../assets/icon/iconflecheBottom.png").default}
            alt="Flèche haut"
            className="arrow-icon"
            onClick={prevSlide}
          />
          <img
            src={require("../assets/icon/iconflecheTop.png").default}
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
