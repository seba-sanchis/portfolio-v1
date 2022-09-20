import React, { useState, useRef, useEffect } from "react";

import { DiJavascript1, DiCss3, DiHtml5, DiSass } from "react-icons/di";
import { FaUserCheck } from "react-icons/fa";
import { GoBrowser, GoDatabase } from "react-icons/go";
import { SiAmazonaws, SiGooglecloud, SiNextdotjs, SiReact, SiRedux, SiStyledcomponents, SiExpress, SiJest, SiMongodb, SiMysql, SiNodedotjs, SiSequelize, SiAdobexd, SiFigma, SiInvision, SiSketch, SiTailwindcss, SiTypescript } from "react-icons/si";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode, List, ListContainer, ListItem, ListParagraph, ListTitle, SocialIcons } from "./SkillsStyles";
import { education } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = education.length;

const Skills = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / education.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.9)) * education.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="skills">
      <br />
      <SectionTitle>Skills & Education</SectionTitle>
      <SectionText>
        These are the skills that I have been learning since last year by taking courses, attending workshops and practicing on my own.
      </SectionText>
      <List>
        
        {/* First column */}
        <ListItem>
          <GoBrowser size="3rem" />
          <ListContainer>
            <ListTitle>Frontend</ListTitle>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <DiCss3 size="3rem" />
              </SocialIcons>
              CSS
            </ListParagraph>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <DiHtml5 size="3rem" />
              </SocialIcons>
              HTML
            </ListParagraph>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <DiJavascript1 size="3rem" />
              </SocialIcons>
              JavaScript
            </ListParagraph>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiJest size="3rem" />
              </SocialIcons>
              Jest
            </ListParagraph>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiNextdotjs size="3rem" />
              </SocialIcons>
              Next
            </ListParagraph>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiReact size="3rem" />
              </SocialIcons>
              React
            </ListParagraph>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiRedux size="3rem" />
              </SocialIcons>
              Redux
            </ListParagraph>
            
            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <DiSass size="3rem" />
              </SocialIcons>
              Sass
            </ListParagraph>

            <ListParagraph long>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiStyledcomponents size="3rem" />
              </SocialIcons>
              styled-components
            </ListParagraph>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiTailwindcss size="3rem" />
              </SocialIcons>
              Tailwind CSS
            </ListParagraph>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiTypescript size="3rem" />
              </SocialIcons>
              Typescript
            </ListParagraph>

          </ListContainer>
        </ListItem>

        {/* Second column */}
        <ListItem>
          <GoDatabase size="3rem" />
          <ListContainer>
            <ListTitle>Backend</ListTitle>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiAmazonaws size="3rem" />
              </SocialIcons>
              AWS
            </ListParagraph>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiExpress size="3rem" />
              </SocialIcons>
              Express
            </ListParagraph>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiGooglecloud size="3rem" />
              </SocialIcons>
              GCP
            </ListParagraph>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <DiJavascript1 size="3rem" />
              </SocialIcons>
              JavaScript
            </ListParagraph>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiJest size="3rem" />
              </SocialIcons>
              Jest
            </ListParagraph>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiMongodb size="3rem" />
              </SocialIcons>
              MongoDB
            </ListParagraph>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiMysql size="3rem" />
              </SocialIcons>
              MySQL
            </ListParagraph>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiNodedotjs size="3rem" />
              </SocialIcons>
              Node
            </ListParagraph>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiSequelize size="3rem" />
              </SocialIcons>
              Sequelize
            </ListParagraph>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiTypescript size="3rem" />
              </SocialIcons>
              Typescript
            </ListParagraph>

          </ListContainer>
        </ListItem>

        {/* Third column */}
        <ListItem>
          <FaUserCheck size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>

            <ListParagraph>
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiAdobexd size="3rem" />
              </SocialIcons>
              Adobe Xd
            </ListParagraph>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiFigma size="3rem" />
              </SocialIcons>
              Figma
            </ListParagraph>

            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiInvision size="3rem" />
              </SocialIcons>
              Invision
            </ListParagraph>
            
            <ListParagraph >
              <SocialIcons href="https://github.com/seba-sanchis">
                <SiSketch size="3rem" />
              </SocialIcons>
              Sketch
            </ListParagraph>

          </ListContainer>
        </ListItem>
      </List>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
      <>
        {education.map((item, index) => (
          <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT -1}>
            <CarouselItem
              index={index}
              id={`carousel__item-${index}`}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
            >
              <CarouselItemTitle>
                {item.year}
                <CarouselItemImg
                  width="208"
                  height="6"
                  viewBox="0 0 208 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                    fill="url(#paint0_linear)"
                    fillOpacity="0.33"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="-4.30412e-10"
                      y1="0.5"
                      x2="208"
                      y2="0.500295"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3C4043" />
                      <stop
                        offset="0.79478"
                        stopColor="#3C4043"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
      </>
    </CarouselContainer>
    <CarouselButtons>
      {education.map((item, index) =>
        <CarouselButton
          key={index}
          index={index}
          active={activeItem}
          onClick={(e) => handleClick(e, index)}
          type="button"
        >
          <CarouselButtonDot active={activeItem}/>
        </CarouselButton>
      )}
    </CarouselButtons>
    </Section>
  );
};

export default Skills;
