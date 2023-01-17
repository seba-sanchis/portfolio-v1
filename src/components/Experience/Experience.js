import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Background, Statement } from "./ExperienceStyles";

const Experience = ({ experienceRef }) => {
  return (
    <Section id="experience" ref={experienceRef} nopadding>
      <Background>
        <SectionTitle>Experience</SectionTitle>
        <SectionText></SectionText>
        <Statement>
          I have been doing projects as a team and individually for more than a
          year, applying in each of them new technologies and methodologies that
          allow me to grow in my approach as a Frontend Developer. Unfortunately
          I don't have work experience as a developer yet.
        </Statement>
      </Background>
    </Section>
  );
};

export default Experience;
