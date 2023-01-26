import React from 'react';

import { Section, SectionText, SectionTitle, Button } from '../../styles/GlobalComponents';
import { LeftSection } from './HomeStyles';

const Home = ({homeRef}) => (
  <Section id="home" ref={homeRef} row>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        Hi there, I'm Sebastian Sanchis 👋, <br />
        Jr. Full Stack Developer (MERN) with experience in frontend-oriented web development languages such as React, Redux and Sass with the support of Node and Express.
      </SectionText>
      <Button onClick={() => window.location = "#contact"}>Contact me</Button>
    </LeftSection>    
  </Section>
);

export default Home;