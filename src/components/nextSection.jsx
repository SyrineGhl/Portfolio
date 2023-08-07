import React, { useEffect } from "react";
import photoPolaroid1 from "../assets/images/projectImage.jpeg";
// import photoPolaroid2 from "../assets/images/polaroid.png";
import AOS from "aos";
import "aos/dist/aos.css";

const NextSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="next-section" style={{ backgroundColor: "#F4F1E9" }} data-aos="fade-up">
      <div className="polaroid-container">
        <div className="polaroid">
          <img src={photoPolaroid1} alt="polaroid 1" className="polaroid img" />
        </div>
        
      </div>
      <div className="quote-container">
        <p className="quote">
          "A good web developer turns abstract ideas into interactive reality."
        </p>
        <p className="author">- Tim Berners-Lee</p>
      </div>
    </section>
  );
};

export default NextSection;
