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
  EducationSubtitle,
  EducationDisplay,
  EducationInstitution,
  EducationText,
  EducationSchool,
  EducationDescription,
  EducationBtn,
  EducationNotification,
  EducationImage,
  EducationDetails,
  EducationStudy,
  EducationSummary,
} from "./EducationStyles";
import { education } from "../../constants/constants";
import { IoShareSocialSharp } from "react-icons/io5";

const Education = () => {
  const [seconds, setSeconds] = useState(0);
  const [seconds2, setSeconds2] = useState(0);
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [stop, setStop] = useState(false);

  let timer;

  useEffect(() => {
    if (!stop) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);

        if (seconds === 4) {
          setSeconds(0);
          setSelected(selected + 1);
          if (selected === education.length - 1) {
            setSelected(0);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  });

  let timerClipboard;

  useEffect(() => {
    if (open) {
      timerClipboard = setInterval(() => {
        setSeconds2(seconds2 + 1);

        if (seconds2 === 2) {
          setSeconds2(0);
          setOpen(false);
        }
      }, 1000);
    }
    return () => clearInterval(timerClipboard);
  });

  const handleCopy = (e) => {
    navigator.clipboard
      .writeText(e.currentTarget.getAttribute("data-value"))
      .then(() => {
        setOpen(true);
      });
  };

  const handleSelect = (e) => {
    setSelected(parseInt(e.currentTarget.getAttribute("id").slice(-1)));
    setStop(true);
  };

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
              onClick={handleSelect}
              key={index}
            >
              <EducationTrack selected={index === selected}></EducationTrack>
              <EducationInfo>
                <EducationTitle selected={index === selected}>
                  {item.study}
                </EducationTitle>
                <EducationSubtitle>
                  {item.school}
                  {`(${item.startDate} - ${item.endDate})`}
                </EducationSubtitle>
              </EducationInfo>
            </EducationTab>
          ))}
        </EducationTabList>
        {education.map((item, index) => (
          <EducationDisplay
            selected={index === selected}
            index={index}
            id={`education__item-${index}`}
            role="tab"
            aria-selected="false"
            key={index}
          >
            <EducationInstitution>
              <EducationText>
                <EducationSchool>{item.school}</EducationSchool>
                <EducationDescription>{item.description}</EducationDescription>
              </EducationText>
              <EducationBtn data-value={item.link} onClick={handleCopy}>
                <IoShareSocialSharp />
              </EducationBtn>
            </EducationInstitution>
            <EducationImage src={item.image} key={index} />
            <EducationDetails>
              <EducationStudy>{item.study}</EducationStudy>
              {item.skill?.map((item, index) => (
                <EducationSummary index={index} key={index}>{item}</EducationSummary>
              ))}
            </EducationDetails>
          </EducationDisplay>
        ))}
      </EducationContainer>
      <EducationNotification open={open}>
        Link copied to clipboard
      </EducationNotification>
    </Section>
  );
};

export default Education;
