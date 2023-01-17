import React, { useRef } from "react";

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

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: "Home", link: "#top", ref: homeRef },
    { section: "About", link: "#about", ref: aboutRef },
    { section: "Projects", link: "#projects", ref: projectsRef },
    { section: "Skills", link: "#skills", ref: skillsRef },
    { section: "Experience", link: "#experience", ref: experienceRef },
    { section: "Education", link: "#education", ref: educationRef },
    { section: "Contact", link: "#contact", ref: contactRef },
  ];
  
  return (
    <Layout sectionRefs={sectionRefs} headerRef={headerRef}>
      <Section grid main>
        <Home homeRef={homeRef}/>
        <BgAnimation />
      </Section>
      <About aboutRef={aboutRef}/>
      <Projects projectsRef={projectsRef}/>
      <Skills skillsRef={skillsRef}/>
      <Experience experienceRef={experienceRef}/>
      <Education educationRef={educationRef}/>
      <Contact contactRef={contactRef}/>
    </Layout>
  );
};

export default Index;
