import * as React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";
import SkillsSection from "../components/sections/Skills";
import AboutSection from "../components/sections/About";
import ProjectsSection from "../components/sections/Projects";
import ContactSection from "../components/sections/Contact";

const IndexPage = () => {
  return (
    <Layout headerInfo>
      <Seo title="Home" />
      <Hero />
      <SkillsSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;
