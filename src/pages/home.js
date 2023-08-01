import React from "react";
import About from "../components/about";
import Banner from "../components/banner";
import Layout from "../components/layout";

export default function Home() { 
  return (
    <>
      <Layout>
      <Banner/>
        <About/>

      </Layout>
    </>
  );
};

