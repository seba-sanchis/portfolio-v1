import React from 'react';

import { Section, SectionText, SectionTitle, Button } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        I currently live in San Isidro, Buenos Aires and I am looking for a personal and professional challenge by undertaking dynamic and innovative projects.
      </SectionText>
      <Button onClick={() => window.location = ""}>Contact me</Button>
    </LeftSection>    
  </Section>
);

export default Hero;