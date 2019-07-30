import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Hello = styled.div`
  color: blue;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hello>Hi me</Hello>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/about/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
