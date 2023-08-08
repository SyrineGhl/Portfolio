import React, { useState } from "react";
import maPhoto from "../assets/images/meAbout.jpg";
import rightArrowIcon from "../assets/icon/flecheDroite.png";
import leftArrowIcon from "../assets/icon/flecheGauche.png";

const IntroAbout = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex === 3) {
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className="intro-container">
      <div className="intro-image">
        <img src={maPhoto} alt="it's me" />
      </div>
      <div className="intro-content">
        <h2 className="intro-title-page-about">HELLO&nbsp;IT'S ME!</h2>
        {slideIndex === 1 && (
          <p className="text1-page-about">
            Je suis Syrine, une développeuse web passionnée et dynamique, formée
            en intensif chez OpenClassrooms pendant 6 mois. Mon domaine de
            prédilection ? Le front-end, là où la magie opère pour donner vie à
            des interfaces interactives et esthétiquement captivantes. Avec une
            maîtrise solide des langages HTML, CSS et JavaScript, je suis
            constamment en quête d'excellence pour créer des sites web
            époustouflants. Les frameworks tels que React et Sass sont mes
            meilleurs alliés pour offrir des expériences utilisateur fluides et
            optimales.
          </p>
        )}
        {slideIndex === 2 && (
          <p className="text2-page-about">
            Et ce n'est pas tout ! Mon aventure dans le monde du développement
            va bien au-delà du front-end. Je possède également des compétences
            en back-end avec une affinité particulière pour NodeJs, ainsi que
            des connaissances en bases de données MongoDB. Cette polyvalence me
            permet de concevoir des applications web complètes, de la conception
            à la mise en œuvre.
          </p>
        )}
        {slideIndex === 3 && (
          <p className="text3-page-about">
            La gestion de projets est un art que j'ai maîtrisé grâce aux
            méthodes agiles, offrant une approche itérative et efficace à chaque
            collaboration. J'utilise Git pour gérer les versions de projet en
            toute transparence. WordPress est mon terrain de jeu pour créer des
            sites web dynamiques et intuitifs, répondant aux besoins spécifiques
            de mes clients. Mon portfolio exprime ma passion pour le
            développement web et mon désir d'offrir des solutions impactantes.
            <br/>
            Chaque ligne de code reflète ma créativité et ma persévérance à
            repousser les limites de l'expérience utilisateur. <br/> Embarquez avec moi dans ce voyage
            au cœur du web, où chaque ligne de code transforme l'innovation
            numérique. Prêt à créer ensemble le futur du web ? <br/>Contactez-moi dès
            maintenant pour discuter de votre projet !
          </p>
        )}
        <div className="slide-buttons">
          <img
            src={leftArrowIcon}
            alt="Left Arrow"
            className="arrow-icon"
            onClick={prevSlide}
          />
          <span
            className={`dot ${slideIndex === 1 ? "active" : ""}`}
            onClick={() => setSlideIndex(1)}
          ></span>
          <span
            className={`dot ${slideIndex === 2 ? "active" : ""}`}
            onClick={() => setSlideIndex(2)}
          ></span>
          <span
            className={`dot ${slideIndex === 3 ? "active" : ""}`}
            onClick={() => setSlideIndex(3)}
          ></span>
          <img
            src={rightArrowIcon}
            alt="Right Arrow"
            className="arrow-icon"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroAbout;
