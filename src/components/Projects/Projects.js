import React from "react";

import { BlogCard, CardInfo, ExternalLinks1, ExternalLinks2, GridContainer, HeaderThree, Tag, TagList, TitleContent, UtilityList, Img, ImgContainer } from "./ProjectsStyles";
import { HiChevronRight } from "react-icons/hi";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="projects">
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <ImgContainer>
            <Img src={image} />
          </ImgContainer>
          <TitleContent>
            <HeaderThree>{title}</HeaderThree>
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks1 href={visit} target="_blank">View</ExternalLinks1>
            <ExternalLinks2 href={source} target="_blank">Source code <HiChevronRight /></ExternalLinks2>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;