import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";

const IndexPage = () => {
  return (
    <Layout headerInfo>
      <Seo title="Home" />
      <Hero />
    </Layout>
  );
};

//Custom Styles

export default IndexPage;
