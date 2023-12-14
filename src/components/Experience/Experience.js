import React, { useEffect, useState } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  ExperienceContainer,
  ExperienceTabList,
  ExperienceTab,
  ExperienceTrack,
  ExperienceInfo,
  ExperienceTitle,
  ExperienceSubtitle,
  ExperienceExpand,
  ExperienceDisplay,
  ExperienceInstitution,
  ExperienceText,
  ExperienceCompany,
  ExperienceDescription,
  ExperienceBtn,
  ExperienceNotification,
  ExperienceImage,
  ExperienceDetails,
  ExperiencePosition,
  ExperienceSummary,
} from "./ExperienceStyles";
import { experience } from "../../constants/constants";
import { IoShareSocialSharp } from "react-icons/io5";

const Experience = ({ experienceRef }) => {
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
          if (selected === experience.length - 1) {
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
    <Section id="experience" ref={experienceRef}>
      <SectionTitle>Experience</SectionTitle>
      <SectionText>
        I have 3 years of experience creating visually appealing and
        user-friendly websites. I have successfully translated design mockups
        into responsive interfaces. With a collaborative mindset, I have worked
        alongside designers, writers and backend developers to deliver
        exceptional results.
      </SectionText>
      <ExperienceContainer>
        <ExperienceTabList role="tablist">
          {experience.map((item, index) => (
            <React.Fragment key={index}>
              <ExperienceTab
                index={index}
                onClick={handleSelect}
                id={`experience__item-${index}`}
                role="tab"
                aria-selected="false"
                key={`experience__tab-${index}`}
              >
                <ExperienceTrack
                  selected={index === selected}
                ></ExperienceTrack>
                <ExperienceInfo>
                  <ExperienceTitle selected={index === selected}>
                    {item.position}
                  </ExperienceTitle>
                  <ExperienceSubtitle>
                    {item.company}
                    {` (${item.startDate} - ${item.endDate})`}
                  </ExperienceSubtitle>
                </ExperienceInfo>
              </ExperienceTab>
              <ExperienceExpand selected={index === selected} key={index}>
                <ExperienceInstitution>
                  <ExperienceText>
                    <ExperienceCompany>{item.company}</ExperienceCompany>
                    <ExperienceDescription>
                      {item.description}
                    </ExperienceDescription>
                  </ExperienceText>
                  <ExperienceBtn data-value={item.link} onClick={handleCopy}>
                    <IoShareSocialSharp />
                  </ExperienceBtn>
                </ExperienceInstitution>
                <ExperienceImage src={item.image} key={index} />
                <ExperienceDetails>
                  <ExperiencePosition>{item.position}</ExperiencePosition>
                  {item.skill?.map((item, index) => (
                    <ExperienceSummary index={index} key={index}>
                      {item}
                    </ExperienceSummary>
                  ))}
                </ExperienceDetails>
              </ExperienceExpand>
            </React.Fragment>
          ))}
        </ExperienceTabList>
        {experience.map((item, index) => (
          <ExperienceDisplay
            selected={index === selected}
            index={index}
            id={`experience__item-${index}`}
            role="tab"
            aria-selected="false"
            key={index}
          >
            <ExperienceInstitution>
              <ExperienceText>
                <ExperienceCompany>{item.company}</ExperienceCompany>
                <ExperienceDescription>
                  {item.description}
                </ExperienceDescription>
              </ExperienceText>
              <ExperienceBtn data-value={item.link} onClick={handleCopy}>
                <IoShareSocialSharp />
              </ExperienceBtn>
            </ExperienceInstitution>
            <ExperienceImage src={item.image} key={index} />
            <ExperienceDetails>
              <ExperiencePosition>{item.position}</ExperiencePosition>
              {item.skill?.map((item, index) => (
                <ExperienceSummary index={index} key={index}>
                  {item}
                </ExperienceSummary>
              ))}
            </ExperienceDetails>
          </ExperienceDisplay>
        ))}
      </ExperienceContainer>
      <ExperienceNotification open={open}>
        Link copied to clipboard
      </ExperienceNotification>
    </Section>
  );
};

export default Experience;
