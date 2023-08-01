import React from "react";
import About from "../components/about";
import Banner from "../components/banner";
import Layout from "../components/layout";
import Projets from "../components/project";
import Skills from "../components/skills";

export default function Home() { 
  return (
    <>
      <Layout>
      <Banner/>
        <About/>
      <Projets/>
      <Skills/>
      </Layout>
    </>
  );
};

