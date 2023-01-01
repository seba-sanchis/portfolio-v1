import Home from "../components/Home/Home";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Contact from "../components/Contact/Contact";

import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Index = () => {
  return (
    <Layout>
      <Section grid main>
        <Home />
        <BgAnimation />
      </Section>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </Layout>
  );
};

export default Index;
