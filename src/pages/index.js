import * as React from "react"
import '../styles/styls.scss';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from '../components/About';
import Education from '../components/Education';
import Projects from '../components/Projects';


const IndexPage = () => {
  return (
    <Layout>
      <Hero></Hero>
      <About></About>
      <Education></Education>
      <Projects></Projects>
    </Layout>
  )
}

export default IndexPage;

