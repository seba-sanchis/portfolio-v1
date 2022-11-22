import React, { useEffect, useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  EducationContainer,
  EducationTabList,
  EducationTab,
  EducationTrack,
  EducationInfo,
  EducationTitle,
  EducationText,
  EducationDisplay,
  EducationIcon,
  EducationImage,
} from "./EducationStyles";
import { education } from "../../constants/constants";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  const [seconds, setSeconds] = useState(0);
  const [selected, setSelected] = useState(0);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 5) {
        setSeconds(0);
        setSelected(selected + 1);
        if (selected === education.length - 1) {
          setSelected(0);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <Section id="education">
      <SectionTitle>Education</SectionTitle>
      <SectionText>
        These are the courses and workshops in which I trained.
      </SectionText>
      <EducationContainer>
        <EducationTabList role="tablist">
          {education.map((item, index) => (
            <EducationTab
              index={index}
              id={`education__item-${index}`}
              role="tab"
              aria-selected="false"
              key={index}
            >
              <EducationTrack selected={index === selected}></EducationTrack>
              <EducationInfo>
                <EducationTitle selected={index === selected}>
                  {item.study}
                </EducationTitle>
                <EducationText>
                  {item.school}
                  {` (${item.startDate} - ${item.endDate})`}
                </EducationText>
              </EducationInfo>
            </EducationTab>
          ))}
        </EducationTabList>
        <EducationDisplay>
          <EducationIcon>
            <IoSchool size="15rem" />
          </EducationIcon>
          {education.map((item, index) => (
            <EducationImage
              selected={index === selected}
              index={index}
              id={`education__item-${index}`}
              role="tab"
              aria-selected="false"
              src={item.image}
              key={index}
            />
          ))}
        </EducationDisplay>
      </EducationContainer>
    </Section>
  );
};

export default Education;
