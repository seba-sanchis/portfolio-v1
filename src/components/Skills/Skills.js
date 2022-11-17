import React, { useState } from "react";

import { DiJavascript1, DiCss3, DiHtml5, DiSass } from "react-icons/di";
import { IoIosArrowDown } from "react-icons/io";
import {
  SiAngular,
  SiAmazonaws,
  SiGooglecloud,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiExpress,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiSequelize,
  SiAdobexd,
  SiFigma,
  SiInvision,
  SiSketch,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListItems,
  ListItem,
  ListContainer,
  ListTitle,
  ToggleButton,
  ListContent,
  ListParagraph,
  ListIcon,
} from "./SkillsStyles";

const Skills = () => {
  const [toggleList1, setToggleList1] = useState(false);
  const [toggleList2, setToggleList2] = useState(false);
  const [toggleList3, setToggleList3] = useState(false);

  return (
    <Section id="skills">
      <br />
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
        These are the skills that I have been learning since last year by taking
        courses, attending workshops and practicing on my own.
      </SectionText>
      <List>
        {/* First List */}
        <ListItems>
          <ListContainer
            toggle={toggleList1}
            role={"button"}
            tabIndex={0}
            onClick={() => setToggleList1((state) => !state)}
          >
            <ListTitle toggle={toggleList1}>Frontend</ListTitle>
            <ToggleButton toggle={toggleList1}>
              <IoIosArrowDown size="3rem" />
            </ToggleButton>
          </ListContainer>

          {toggleList1 && (
            <ListContent>
              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiAngular size="3rem" />
                </ListIcon>
                <ListParagraph>Angular</ListParagraph>
              </ListItem>

              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <DiCss3 size="3rem" />
                </ListIcon>
                <ListParagraph>CSS</ListParagraph>
              </ListItem>

              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <DiHtml5 size="3rem" />
                </ListIcon>
                <ListParagraph>HTML</ListParagraph>
              </ListItem>

              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <DiJavascript1 size="3rem" />
                </ListIcon>
                <ListParagraph>JavaScript</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiJest size="3rem" />
                </ListIcon>
                <ListParagraph>Jest</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiNextdotjs size="3rem" />
                </ListIcon>
                <ListParagraph>Next</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiReact size="3rem" />
                </ListIcon>
                <ListParagraph>React</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiRedux size="3rem" />
                </ListIcon>
                <ListParagraph>Redux</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <DiSass size="3rem" />
                </ListIcon>
                <ListParagraph>Sass</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiStyledcomponents size="3rem" />
                </ListIcon>
                <ListParagraph>styled-components</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiTailwindcss size="3rem" />
                </ListIcon>
                <ListParagraph>Tailwind CSS</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiTypescript size="3rem" />
                </ListIcon>
                <ListParagraph>Typescript</ListParagraph>
              </ListItem>
            </ListContent>
          )}
        </ListItems>

        {/* Second List */}
        <ListItems>
          <ListContainer
            toggle={toggleList2}
            role={"button"}
            tabIndex={0}
            onClick={() => setToggleList2((state) => !state)}
          >
            <ListTitle toggle={toggleList2}>Backend</ListTitle>
            <ToggleButton toggle={toggleList2}>
              <IoIosArrowDown size="3rem" />
            </ToggleButton>
          </ListContainer>
          {toggleList2 && (
            <ListContent>
              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiAmazonaws size="3rem" />
                </ListIcon>
                <ListParagraph>AWS</ListParagraph>
              </ListItem>

              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiExpress size="3rem" />
                </ListIcon>
                <ListParagraph>Express</ListParagraph>
              </ListItem>

              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiGooglecloud size="3rem" />
                </ListIcon>
                <ListParagraph>GCP</ListParagraph>
              </ListItem>

              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <DiJavascript1 size="3rem" />
                </ListIcon>
                <ListParagraph>JavaScript</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiJest size="3rem" />
                </ListIcon>
                <ListParagraph>Jest</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiMongodb size="3rem" />
                </ListIcon>
                <ListParagraph>MongoDB</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiMysql size="3rem" />
                </ListIcon>
                <ListParagraph>MySQL</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiNodedotjs size="3rem" />
                </ListIcon>
                <ListParagraph>Node</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiSequelize size="3rem" />
                </ListIcon>
                <ListParagraph>Sequelize</ListParagraph>
              </ListItem>

              <ListItem>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiTypescript size="3rem" />
                </ListIcon>
                <ListParagraph>Typescript</ListParagraph>
              </ListItem>
            </ListContent>
          )}
        </ListItems>

        {/* Third list */}
        <ListItems>
          <ListContainer
            toggle={toggleList3}
            role={"button"}
            tabIndex={0}
            onClick={() => setToggleList3((state) => !state)}
          >
            <ListTitle toggle={toggleList3}>UI/UX</ListTitle>
            <ToggleButton toggle={toggleList3}>
              <IoIosArrowDown size="3rem" />
            </ToggleButton>
          </ListContainer>
          {toggleList3 && (
            <ListContent>
              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiAdobexd size="3rem" />
                </ListIcon>
                <ListParagraph>Adobe Xd</ListParagraph>
              </ListItem>

              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiFigma size="3rem" />
                </ListIcon>
                <ListParagraph>Figma</ListParagraph>
              </ListItem>

              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiInvision size="3rem" />
                </ListIcon>
                <ListParagraph>Invision</ListParagraph>
              </ListItem>

              <ListItem top>
                <ListIcon href="https://github.com/seba-sanchis">
                  <SiSketch size="3rem" />
                </ListIcon>
                <ListParagraph>Sketch</ListParagraph>
              </ListItem>
            </ListContent>
          )}
        </ListItems>
      </List>
    </Section>
  );
};

export default Skills;
