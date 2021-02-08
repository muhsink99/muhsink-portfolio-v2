import * as React from "react"
import '../styles/styls.scss';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import SEO from '../components/SEO';


const IndexPage = () => {
  return (
    <Layout>
      <SEO></SEO>
      <Hero></Hero>
      <About></About>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
    </Layout>
  )
}

export default IndexPage;

