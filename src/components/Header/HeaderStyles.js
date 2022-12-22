import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 8px;
  background-color: #fff;
  width: 100%;
  height: 64px;
  padding: 0 20px;
  align-items: center;
  position: fixed;
  transform: ${(props) =>
    props.scrollDown ? "translate3d(0,-140px,0)" : "none"};
  box-shadow: ${(props) =>
    props.scrollUp && !props.scrollTop
      ? "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
      : "none"};
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  z-index: 3;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    height: 55px;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: 55px;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 2 / 1 / 4;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Sections = styled.ul`
  grid-area: 1 / 5 / 1 / 6;
  display: flex;
  justify-content: center;

  a {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #5f6368;
    padding: 0 12px;
    &:hover {
      color: #202124;
      cursor: pointer;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;

export const LineSelected = styled.div`
  bottom: 0;
  height: 2px;
  position: absolute;
  transform: translateZ(0);
  will-change: right, left;
  background-color: #4285f4;
`;

export const Div3 = styled.div`
  grid-area: 1 / 7 / 1 / 9;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.mobile} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Mobile and tablet menu
export const Menu = styled.button`
  display: none;
  border: none;
  background: none;
  color: #3c4043;
  width: 24px;
  height: 24px;
  margin-right: 20px;

  & svg {
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
    align-items: center;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: flex;
  }
`;

// Social Icons
export const SocialIcons = styled.a`
  color: #5f6368;
  display: flex;
  align-items: center;
  width: ${(props) => (props.small ? "20px" : "24px")};
  height: ${(props) => (props.small ? "20px" : "24px")};
  margin-left: 24px;

  &:hover {
    color: #202124;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-left: 8px;
  }
`;
