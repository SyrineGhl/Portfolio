import React from "react";
import photoCenter from "../assets/images/contactPhoto.jpg";

const NextSection = () => {
  return (
    <section className="next-section" style={{ backgroundColor: "#F4F1E9" }}>
      <div className="photo-container">
        <img src={photoCenter} alt="Centered Photo" className="centered-photo" />
      </div>
    </section>
  );
};

export default NextSection;
