import React from "react";
import About from "../components/about";
import Banner from "../components/banner";
import ContactForm from "../components/contact";
import Layout from "../components/layout";
import NextSection from "../components/nextSection";
import Projets from "../components/project";
import Skills from "../components/skills";
import Outils from "../components/tools";

export default function Home() { 
  return (
    <>
      <Layout>
      <Banner/>
        <About/>
      <Projets/>
      <Skills/>
      <Outils/>
      <NextSection/>
      <ContactForm/>
      </Layout>
    </>
  );
};

