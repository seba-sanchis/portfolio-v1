import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFilePdf,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Sections,
  LineSelected,
  Div3,
  Menu,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      if (scrollY === 0) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return (
    <Container
      scrollDown={scrollDirection === "down"}
      scrollUp={scrollDirection === "up"}
      scrollTop={scrollTop}
    >
      <Div1>
        <Menu>
          <AiOutlineMenu size="3rem" />
        </Menu>
        <Link href="/">
          <a
            style={{ display: "flex", alignItems: "center", color: "#3c4043" }}
          >
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </Link>
      </Div1>
      <Sections>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#education">Education</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </Sections>
      {/* <LineSelected style={false ? {display: "block", left: "0px", right: "684.25px"} : {display: "none", left: "0px", right: "684.25px"}}></LineSelected> */}

      <Div3>
        <SocialIcons href="https://github.com/seba-sanchis" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/sebastian-sanchis/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://drive.google.com/file/d/1gB9A1LZdpYeXp_pepnQn0MWJRiM9o7jk/view?usp=sharing"
          target="_blank"
        >
          <AiFillFilePdf size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
