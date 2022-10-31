import React, { useEffect, useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  EducationTabList,
  EducationTab,
  EducationTrack,
  EducationInfo,
  EducationTitle,
  EducationText,
} from "./EducationStyles";
import { education } from "../../constants/constants";

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
      <br />
      <SectionTitle>Education</SectionTitle>
      <SectionText>
        These are the courses and workshops in which I trained.
      </SectionText>
      <EducationTabList role="tablist">
        <>
          {education.map((item, index) => (
            <EducationTab
              index={index}
              id={`education__item-${index}`}
              role="tab"
              aria-selected="false"
            >
              <EducationTrack selected={index === selected}></EducationTrack>
              <EducationInfo>
                <EducationTitle selected={index === selected}>{item.study}</EducationTitle>
                <EducationText>{item.school}</EducationText>
              </EducationInfo>
            </EducationTab>
          ))}
        </>
      </EducationTabList>
    </Section>
  );
};

export default Education;
