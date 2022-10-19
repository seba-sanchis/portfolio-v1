import About from '../components/About/About';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Contact from '../components/Contact/Contact';
import Education from '../components/Education/Education';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Welcome from '../components/Welcome/Welcome';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid main>
        <Welcome />
        <BgAnimation />
      </Section>
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </Layout>
  );
};

export default Home;
