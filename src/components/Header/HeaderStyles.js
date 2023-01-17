import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  background-color: #fff;
  width: 100%;
  height: 64px;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  position: fixed;
  /* transform: ${(props) =>
    props.scrollDown ? "translate3d(0,-140px,0)" : "none"}; */
  box-shadow: ${(props) =>
    (props.scrollUp || props.scrollDown) && !props.scrollTop
      ? "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
      : "none"};
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  z-index: 3;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const Menu = styled.div`
  grid-area: 1 / 1 / 1 / 1;
  display: none;
  flex-direction: row;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: flex;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  grid-area: 1 / 1 / 1 / 1;
  color: #3c4043;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  padding-left: ${(props) => (props.sidenav ? "18px" : null)};

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: ${(props) => (props.sidenav ? null : "none")};
  }
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export const Nav = styled.nav`
  grid-area: 1 / 2 / 1 / 2;
  display: inline-block;
  position: relative;
  max-width: 520px;
  margin: 0 auto;
  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;

export const Sections = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
`;

export const Section = styled.li`
  padding: 0 12px;
  height: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: ${(props) => (props.selected ? "#202124" : "#5f6368")};
    height: 100%;
    padding: 10px 0;

    &:hover {
      color: #202124;
      cursor: pointer;
    }

    &:active {
      color: #3367d6;
    }
  }
`;

export const SectionSelected = styled.div`
  display: ${(props) => (props.scrollTop ? "none" : "block")};
  left: ${(props) =>
    props.atHome
      ? "0"
      : props.atAbout
      ? "63.84px"
      : props.atProjects
      ? "127.57px"
      : props.atSkills
      ? "204.01px"
      : props.atExperience
      ? "260.73px"
      : props.atEducation
      ? "357px"
      : props.atContact
      ? "446.42px"
      : null};
  right: ${(props) =>
    props.atHome
      ? "457.24px"
      : props.atAbout
      ? "393.51px"
      : props.atProjects
      ? "317.07px"
      : props.atSkills
      ? "260.35px"
      : props.atExperience
      ? "164.08px"
      : props.atEducation
      ? "74.66px"
      : props.atContact
      ? "0"
      : null};
  background-color: ${(props) => (props.atHome !== undefined ? "#4285f4" : null)};
  transition: ${(props) =>
    props.scrollDown
      ? "left .35s cubic-bezier(.35,0,.25,1),right .18s cubic-bezier(.35,0,.25,1)"
      : "left .18s cubic-bezier(.35,0,.25,1),right .35s cubic-bezier(.35,0,.25,1);"};
  bottom: 0;
  height: 2px;
  position: absolute;
  transform: translateZ(0);
  will-change: right, left;
`;

export const SocialIcons = styled.div`
  grid-area: 1 / 3 / 1 / 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-area: 1 / 8 / 1 / 10;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-area: 1 / 4 / 1 / 6;
  }
`;

// Mobile and tablet menu
export const MenuIcon = styled.button`
  display: flex;
  border: none;
  background: none;
  color: #3c4043;
  width: 24px;
  height: 24px;
  margin-right: 20px;
  align-items: center;

  & svg {
    align-items: center;
  }
`;

// Social Icons
export const Icon = styled.a`
  color: #5f6368;
  display: flex;
  align-items: center;
  width: ${(props) => (props.small ? "20px" : "24px")};
  height: ${(props) => (props.small ? "20px" : "24px")};
  margin-left: ${(props) => (props.nomargin ? null : "16px")};

  &:hover {
    color: #202124;
    cursor: pointer;
  }

  &:active {
    color: #3367d6;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-left: 16px;
  }
`;

export const Sidenav = styled.div`
  width: calc(100% - 56px);
  max-width: 400px;
  height: 100%;
  background: #fff;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 56px;
  position: fixed;
  margin-right: 56px;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transform: ${(props) =>
    props.active ? "translate3d(0,0,0)" : "translate3d(-100%,0,0)"};
  box-shadow: ${(props) => (props.active ? "none" : "0 0 0 0 transparent")};
  transition: ${(props) =>
    props.active
      ? "all 0.3s cubic-bezier(0.24, 1, 0.32, 1)"
      : "all .3s ease,background .3s ease,box-shadow .3s ease"};
  z-index: 6;
`;

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
  height: 64px;

  &::after {
    background-color: #dadce0;
    content: " ";
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    top: 63px;
    width: 100%;
  }
`;

export const NavSections = styled.ul`
  display: block;
  padding-bottom: 23px;
  padding-top: 30px;
`;

export const NavSection = styled.li`
  display: flex;
  height: 52px;
  width: 100%;
  background-color: ${(props) => (props.selected ? "#f8f9fa" : null)};

  & a {
    display: flex;
    align-items: center;
    padding-left: 18px;
    padding-right: 12px;
    color: ${(props) => (props.selected ? "#202124" : "#5f6368")};
    height: 48px;
    width: calc(100% - 8px);
    line-height: 1.5;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.25px;
    transition: background-color 0.3s, box-shadow 0.3s, color 0.3s;

    &:hover {
      background-color: #f8f9fa;
      color: #202124;
    }
  }
`;

export const Backdrop = styled.div`
  opacity: 1;
  background: rgba(0, 0, 0, 0.4);
  bottom: 0;
  display: block;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 5;
`;
