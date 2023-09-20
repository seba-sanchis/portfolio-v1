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
  Logo,
  Span,
  Nav,
  Sections,
  Section,
  SectionSelected,
  SocialIcons,
  Icon,
  Sidenav,
  NavHeader,
  NavSections,
  NavSection,
  Backdrop,
  Features,
  Portrait,
} from "./HeaderStyles";

import { about } from "../../constants/constants";

const Header = ({ sectionRefs, headerRef }) => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [scrollTop, setScrollTop] = useState(false);
  const [toggleSidenav, setToggleSidenav] = useState(false);

  const [visibleSection, setVisibleSection] = useState();

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;
    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = (e) => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5) &&
        document.body.style.overflow !== "hidden"
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
      ref={headerRef}
    >
      <Features>
        <Menu onClick={handleSidenav}>
          <MenuIcon>
            <AiOutlineMenu size="3rem" />
          </MenuIcon>
        </Menu>
        <Link href="/">
          <Span>
            <Portrait src={about.photo} />
            {about.me}
          </Span>
        </Link>
        <Nav>
          <Sections>
            {sectionRefs.map((item, index) => (
              <Section key={index} selected={item.section === visibleSection}>
                <Link href={item.link}>{item.section}</Link>
              </Section>
            ))}
          </Sections>
          <SectionSelected
            scrollTop={scrollTop}
            scrollDown={scrollDirection === "down"}
            atHome={visibleSection === "Home"}
            atAbout={visibleSection === "About"}
            atProjects={visibleSection === "Projects"}
            atSkills={visibleSection === "Skills"}
            atExperience={visibleSection === "Experience"}
            atEducation={visibleSection === "Education"}
            atContact={visibleSection === "Contact"}
          ></SectionSelected>
        </Nav>
        <SocialIcons>
          <Icon nomargin href={about.gitHub} target="_blank">
            <AiFillGithub size="3rem" />
          </Icon>
          <Icon href={about.linkedIn} target="_blank">
            <AiFillLinkedin size="3rem" />
          </Icon>
          <Icon href={about.resume} target="_blank">
            <AiFillFilePdf size="3rem" />
          </Icon>
        </SocialIcons>

        <Sidenav active={toggleSidenav} id="sidenav">
          <NavHeader>
            <Link href="/">
              <Span sidenav>
                <Logo src={about.logo} />
                {about.me}
              </Span>
            </Link>
          </NavHeader>
          <NavSections>
            {sectionRefs.map((item, index) => (
              <NavSection
                onClick={handleSidenav}
                key={index}
                selected={item.section === visibleSection}
              >
                <Link href={item.link}>{item.section}</Link>
              </NavSection>
            ))}
          </NavSections>
        </Sidenav>
        <Backdrop active={toggleSidenav} onClick={handleSidenav}></Backdrop>
      </Features>
    </Container>
  );
};

export default Header;
