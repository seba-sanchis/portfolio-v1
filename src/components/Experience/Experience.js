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
          I have 3 years of experience creating visually appealing and
          user-friendly websites. Proficient in HTML, CSS, and JavaScript, I
          have successfully translated design mockups into responsive
          interfaces. With a collaborative mindset, I have worked alongside
          designers, writers and backend developers to deliver exceptional
          results. Passionate about continuous learning, I stay updated on the
          latest industry trends and technologies.
        </Statement>
      </Background>
    </Section>
  );
};

export default Experience;
