import React from "react";
import photoPolaroid1 from "../assets/images/projectImage.jpeg";

const NextSection = () => {
  return (
    <section className="next-section" style={{ backgroundColor: "#F4F1E9" }}>
      <div className="polaroid-container">
        <div className="polaroid">
          <img src={photoPolaroid1} alt="polaroid 1" className="polaroid-img" />
          <div className="quote-container">
            <p className="quote">
              "A good web developer turns abstract ideas into interactive reality."
            </p>
            <p className="author">- Tim Berners-Lee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSection;
