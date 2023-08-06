import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SectionProject from "../components/sectionProject";

import IntroAbout from "../components/nextAbout"

const AboutMe = () => {
 
  return (
    <>
      <Header />
      <section className="about-me-section">
        <h1 className="about-me-title">ABOUT ME</h1>
      </section>
      <SectionProject />
     <IntroAbout/>
          
      <Footer />
    </>
  );
};

export default AboutMe;
