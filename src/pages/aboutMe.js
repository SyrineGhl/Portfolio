import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SectionProject from "../components/sectionProject";

const AboutMe = () => {
    return (
      <>
        <Header />
        <section className="about-me-section">
        <h1 className="about-me-title">ABOUT ME</h1>
        </section>
        <SectionProject />
        <section className="next-section-about"></section>
        <Footer />
      </>
    );
  };
  
  export default AboutMe;
 
  
  
  
  