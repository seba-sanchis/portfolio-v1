import React from "react";

import { Container, LeftSection, Portrait } from "./AboutStyles";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { about } from "../../constants/constants";

const About = ({ aboutRef }) => {
  return (
    <Section id="about" ref={aboutRef} center>
      <Container>
        <LeftSection>
          <SectionTitle>About me</SectionTitle>
          <SectionText maxwith>
            My passion for web development started a few years ago when I first
            discovered the power of HTML, CSS, and JavaScript in bringing
            creative designs to life. Since then, I've honed my skills and
            expertise by working on a variety of projects for different clients.
          </SectionText>
          <SectionText maxwith>
            As a frontend developer, I pride myself on my attention to detail,
            creativity, and ability to solve complex problems. I enjoy working
            with clients to understand their needs and translate their ideas
            into beautiful, functional designs that exceed their expectations.
          </SectionText>
          <SectionText maxwith>
            In my free time, I love to stay up-to-date with the latest web
            development trends and technologies, and experiment with new tools
            and frameworks to expand my knowledge and skills. I believe that
            continuous learning is essential in a field that is constantly
            evolving.
          </SectionText>
          <SectionText maxwith nopadding>
            I'm excited to share my portfolio with you and showcase some of my
            best work as a frontend developer. Thank you for your time and I
            look forward to connecting with you!
          </SectionText>
        </LeftSection>
        <Portrait src={about.photo} />
      </Container>
    </Section>
  );
};

export default About;
