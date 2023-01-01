import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFilePdf,
} from "react-icons/ai";

import {
  Container,
  Menu,
  MenuIcon,
  Sections,
  SocialIcons,
  Icon,
  Sidenav,
  NavHeader,
  NavSections,
  Backdrop,
} from "./HeaderStyles";

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrollTop, setScrollTop] = useState(false);
  const [toggleSidenav, setToggleSidenav] = useState(false);

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

  const handleSidenav = () => {
    setToggleSidenav((state) => !state);

    if (toggleSidenav) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <Container
      scrollDown={scrollDirection === "down"}
      scrollUp={scrollDirection === "up"}
      scrollTop={scrollTop}
    >
      <Menu onClick={handleSidenav}>
        <MenuIcon>
          <AiOutlineMenu size="3rem" />
        </MenuIcon>
      </Menu>
      <Sections>
        <li>
          <Link href={"#top"}>Home</Link>
        </li>
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
          <Link href="#experience">Experience</Link>
        </li>
        <li>
          <Link href="#education">Education</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </Sections>
      {/* <LineSelected style={false ? {display: "block", left: "0px", right: "684.25px"} : {display: "none", left: "0px", right: "684.25px"}}></LineSelected> */}

      <SocialIcons>
        <Icon href="https://github.com/seba-sanchis" target="_blank">
          <AiFillGithub size="3rem" />
        </Icon>
        <Icon
          href="https://www.linkedin.com/in/sebastian-sanchis/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </Icon>
        <Icon
          href="https://drive.google.com/file/d/1gB9A1LZdpYeXp_pepnQn0MWJRiM9o7jk/view?usp=sharing"
          target="_blank"
        >
          <AiFillFilePdf size="3rem" />
        </Icon>
      </SocialIcons>

      <Sidenav active={toggleSidenav} id="sidenav">
        <NavHeader></NavHeader>
        <NavSections>
          <li onClick={handleSidenav}>
            <Link href="#">Home</Link>
          </li>
          <li onClick={handleSidenav}>
            <Link href="#about">About</Link>
          </li>
          <li onClick={handleSidenav}>
            <Link href="#projects">Projects</Link>
          </li>
          <li onClick={handleSidenav}>
            <Link href="#skills">Skills</Link>
          </li>
          <li onClick={handleSidenav}>
            <Link href="#experience">Experience</Link>
          </li>
          <li onClick={handleSidenav}>
            <Link href="#education">Education</Link>
          </li>
          <li onClick={handleSidenav}>
            <Link href="#contact">Contact</Link>
          </li>
        </NavSections>
      </Sidenav>
      <Backdrop active={toggleSidenav} onClick={handleSidenav}></Backdrop>
    </Container>
  );
};

export default Header;
