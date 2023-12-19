import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import {
  Background,
  Job,
  Position,
  Date,
  TaskList,
  Task,
} from "./ExperienceStyles";

const Experience = ({ experienceRef }) => {
  return (
    <Section id="experience" ref={experienceRef} nopadding>
      <Background>
        <SectionTitle>Experience</SectionTitle>
        <Job>
          <Position>Vulcano S.A. | Web Project Manager</Position>
          <Date>Sep, 2017 - Ago, 2023</Date>
        </Job>

        <TaskList>
          <Task>- Lead a team in a good work environment.</Task>
          <Task>
            - Develop short and long term roadmaps aligned to the company's
            business plans.
          </Task>
          <Task>
            - Plan the tasks of the team, coordinating with different areas and
            giving the necessary visibility to the competent people.
          </Task>
          <Task>
            - Organize the working group to meet the objectives in a timely
            manner.
          </Task>
          <Task>
            - Collaborate in the generation of the new website together with
            development, design and writing professionals.
          </Task>
          <Task>
            - Participate in the complete development cycle of the website and
            guarantee excellence in execution.
          </Task>
        </TaskList>
      </Background>
    </Section>
  );
};
export default Experience;
