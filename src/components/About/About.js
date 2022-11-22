import React from 'react';

import { Container, LeftSection, Portrait } from './AboutStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { about } from '../../constants/constants';

const About = () => {
  return (
    <Section id="about" center>
      <Container>
        <LeftSection>
          <SectionTitle>About me</SectionTitle>
          <SectionText maxwith nopadding>
            I am a very organized and detailed person who constantly seeks to continue learning tools that allow me to contribute to the creation of products. I love working in a team with commitment and dedication to guarantee quality code and implementation effectiveness.<br />
            I currently live in San Isidro, Buenos Aires and I am looking for a personal and professional challenge by undertaking dynamic and innovative projects.
          </SectionText>
        </LeftSection>
        <Portrait src={about.image} />
      </Container>
    </Section>
  );
};

export default About;
