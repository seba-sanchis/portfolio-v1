import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import { skills, stack } from "../../constants/constants";
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
  ListExpand,
  ListContent,
  ListParagraph,
  ListIcon,
} from "./SkillsStyles";

const Skills = ({skillsRef}) => {
  const [toggleList, setToggleList] = useState([]);

  const handleClick = (index) => {
    if (toggleList.includes(index)) {
      setToggleList(toggleList.filter((state) => state !== index));
    } else {
      setToggleList([...toggleList, index]);
    }
  };

  return (
    <Section id="skills" ref={skillsRef}>
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
        These are the skills that I have been learning by taking
        courses, attending workshops and practicing on my own.
      </SectionText>
      <List>
        {stack.map((stack, index) => (
          <ListItems index={index} key={index}>
            <ListContainer
              role={"button"}
              tabIndex={0}
              onClick={() => handleClick(index)}
            >
              <ListTitle toggle={toggleList.includes(index)}>
                {stack.title}
              </ListTitle>
              <ToggleButton toggle={toggleList.includes(index)}>
                <IoIosArrowDown size="3rem" />
              </ToggleButton>
            </ListContainer>
            <ListExpand toggle={toggleList.includes(index)}>
              <ListContent>
                {skills
                  .filter((skill) => skill.stack === stack.title)
                  .map((skill, index) => (
                    <ListItem
                      index={index}
                      key={index}
                      rowMobile={index <= 1}
                      rowTablet={index <= 2}
                      rowLaptop={index <= 3}
                    >
                      <ListIcon>
                        <skill.icon size="3rem" />
                      </ListIcon>
                      <ListParagraph>{skill.technology}</ListParagraph>
                    </ListItem>
                  ))}
              </ListContent>
            </ListExpand>
          </ListItems>
        ))}
      </List>
    </Section>
  );
};

export default Skills;
