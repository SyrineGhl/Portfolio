import React, { useEffect } from "react";
import About from "../components/about";
import Banner from "../components/banner";
import ContactForm from "../components/contact";
import Header from "../components/header";
import Footer from "../components/footer";
import NextSection from "../components/nextSection";
import Projets from "../components/project";
import Skills from "../components/skills";
import Outils from "../components/tools";
import SectionProject from "../components/sectionProject"
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Header/>
        <Banner data-aos="fade-up" />
        <About data-aos="fade-up" />
        <SectionProject data-aos="fade-up"/>
        <Projets data-aos="fade-up" />
        <SectionProject data-aos="fade-up"/>
        <Skills data-aos="fade-up" />
        <Outils data-aos="fade-up" />
        <NextSection data-aos="fade-up" />
        <ContactForm data-aos="fade-up" />
      <Footer/>
    </>
  );
};
