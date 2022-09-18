import React from 'react';

import { TextContainer, Portrait } from './AboutStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { about } from '../../constants/constants';

const About = () => {
  return (
    <Section id="about" nopadding>
      <TextContainer>
        <SectionTitle>About me</SectionTitle>
        <SectionText about>
          I am a very organized and detailed person who constantly seeks to continue learning tools that allow me to contribute to the creation of products. I love working in a team with commitment and dedication to guarantee quality code and implementation effectiveness.<br />
          I currently live in San Isidro, Buenos Aires and I am looking for a personal and professional challenge by undertaking dynamic and innovative projects.
        </SectionText>
        <Portrait src={about.image} />
      </TextContainer>
    </Section>
  );
};

export default About;
