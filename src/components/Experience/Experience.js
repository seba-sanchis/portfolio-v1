import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Statement } from "./ExperienceStyles";

const Experience = () => {

  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <SectionText></SectionText>
      <Statement>
        I have been doing projects as a team and individually for more than a year, applying in each of them<br />
        new technologies and methodologies that allow me to grow in my approach as a Frontend Developer.<br />
        Unfortunately I don't have work experience as a developer yet.
      </Statement>
    </Section>
  );
};

export default Experience;
