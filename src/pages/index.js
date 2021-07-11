import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import SkillsSection from "../components/sections/Skills";
import AboutSection from "../components/sections/About";

const IndexPage = () => {
  return (
    <Layout headerInfo>
      <Seo title="Home" />
      <Hero />
      <SkillsSection />
      <AboutSection />
      {/* <ProjectsSection />
      <ContactSection /> */}
    </Layout>
  );
};

export default IndexPage;
