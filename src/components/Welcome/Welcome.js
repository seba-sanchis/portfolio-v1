import React from 'react';

import { Section, SectionText, SectionTitle, Button } from '../../styles/GlobalComponents';
import { LeftSection } from './WelcomeStyles';

const Welcome = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        Hi there, I'm Sebastian Sanchis 👋, <br />
        Jr. Full Stack Developer (MERN) with some experience in frontend-oriented web development languages such as React, Redux and Sass with the support of Node and Express.
      </SectionText>
      <Button onClick={() => window.location = "#contact"}>Contact me</Button>
    </LeftSection>    
  </Section>
);

export default Welcome;