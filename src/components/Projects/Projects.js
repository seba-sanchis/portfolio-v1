import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalButton,
  ExternalLink,
  GridContainer,
  HeaderThree,
  Technologies,
  TitleContent,
  UtilityList,
  Img,
  ImgContainer,
} from "./ProjectsStyles";
import { HiChevronRight } from "react-icons/hi";
import {
  Section,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = ({ projectsRef }) => (
  <Section id="projects" ref={projectsRef}>
    <SectionTitle>Projects</SectionTitle>
    <SectionText>
      These are the projects in which I was acquiring and implementing new
      concepts.
    </SectionText>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, technologies, source, visit }) => (
          <BlogCard key={id}>
            <ImgContainer>
              <Img src={image} />
            </ImgContainer>
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <Technologies>
              {technologies}
            </Technologies>
            <UtilityList>
              <ExternalButton
                href={visit}
                disabled={visit === null}
                target="_blank"
              >
                View
              </ExternalButton>
              <ExternalLink href={source} target="_blank">
                Source code <HiChevronRight />
              </ExternalLink>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
