import Link from "next/link";
import React from "react";
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
  Div2,
  LineSelected,
  Div3,
  Menu,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Menu>
        <AiOutlineMenu size="3rem" />
      </Menu>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "#3c4043" }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#education">
          <NavLink>Education</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
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

export default Header;
