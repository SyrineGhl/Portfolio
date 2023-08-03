import React, { useEffect } from "react";
import photoCenter from "../assets/images/contactPhoto.jpg";
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
      <div className="photo-container">
        <img src={photoCenter} alt="contact" className="centered-photo" />
      </div>
    </section>
  );
};

export default NextSection;
