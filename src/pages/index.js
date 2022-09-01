import Contact from '../components/Contact/Contact';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Welcome from '../components/Welcome/Welcome';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Welcome />
        <BgAnimation />
      </Section>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Home;
