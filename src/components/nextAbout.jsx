import React, { useState } from "react";
import maPhoto from "../assets/images/meAbout.jpg";

const IntroAbout = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex < 3) {
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
        <img src={maPhoto} alt="My Photo" />
      </div>
      <div className="intro-content">
        <h2 className="intro-title">HELLO ITS ME !</h2>
        {slideIndex === 1 && (
          <p className="text1">
            Je suis Syrine, une développeuse web passionnée et dynamique, formée en intensif chez OpenClassrooms pendant 6 mois. Mon domaine de prédilection ? Le front-end, là où la magie opère pour donner vie à des interfaces interactives et esthétiquement captivantes.
            Avec une maîtrise solide des langages HTML, CSS et JavaScript, je suis constamment en quête d'excellence pour créer des sites web époustouflants. Les frameworks tels que React et Sass sont mes meilleurs alliés pour offrir des expériences utilisateur fluides et optimales.
          </p>
        )}
        {slideIndex === 2 && (
          <p className="text2">
            Et ce n'est pas tout ! Mon aventure dans le monde du développement va bien au-delà du front-end. Je possède également des compétences en back-end avec une affinité particulière pour NodeJs, ainsi que des connaissances en bases de données MongoDB. Cette polyvalence me permet de concevoir des applications web complètes, de la conception à la mise en œuvre.
          </p>
        )}
        {slideIndex === 3 && (
          <p className="text3">
            La gestion de projets est un art que j'ai appris à maîtriser, grâce aux méthodes agiles qui donnent à chaque collaboration une approche itérative et efficace. Pour une collaboration harmonieuse, j'utilise l'outil Git pour gérer de manière transparente les versions de projet.
            WordPress est également devenu mon terrain de jeu pour créer des sites web dynamiques et faciles à gérer pour mes clients. Je m'efforce de leur offrir des solutions sur mesure qui répondent à leurs besoins spécifiques.
            Mon portfolio est bien plus qu'une simple vitrine de projets. C'est une déclaration de ma passion pour le développement web et mon engagement à offrir des solutions innovantes et impactantes. Chaque ligne de code est le reflet de ma créativité et de ma persévérance à repousser les limites de l'expérience utilisateur.
            Je suis constamment en quête de nouvelles opportunités qui me permettront de mettre mes compétences au service de projets stimulants. Si vous cherchez à collaborer avec une développeuse web déterminée et avide de nouveaux défis, ne cherchez pas plus loin !
            Alors, embarquez avec moi dans ce voyage au cœur du web, où chaque ligne de code est une étape vers l'innovation et la transformation numérique.
            Prêt à créer ensemble le futur du web ? Contactez-moi dès maintenant pour discuter de votre projet !
          </p>
        )}
        <div className="slide-buttons">
          <button onClick={prevSlide} disabled={slideIndex === 1}>Previous</button>
          <button onClick={nextSlide} disabled={slideIndex === 3}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default IntroAbout;
