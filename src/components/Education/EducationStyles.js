import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EducationTabList = styled.ul`
  display: grid;
  grid-gap: 36px;
  grid-template-columns: 1fr;
  grid-column-start: 1;
  grid-column-end: span 6;
  grid-row-gap: 36px;
  grid-row: 1;
  padding: 0;
`;

export const EducationTab = styled.li`
  display: block;
  position: relative;
  padding-left: 24px;
  margin-left: 10px;
  cursor: pointer;
`;

export const EducationTrack = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: -8px;
  width: 4px;
  height: 100%;
  background: #f1f3f4;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
    transform: ${(props) => (props.selected ? "scaleY(1)" : "scaleY(0)")};
    transform-origin: top center;
    background: #1a73e8;
  }
`;

export const EducationInfo = styled.div`
  color: #5f6368;
`;

export const EducationTitle = styled.h3`
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  color: ${(props) => (props.selected ? "#1a73e8" : null)};
`;

export const EducationSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const EducationExpand = styled.div`
  display: none;
  flex-wrap: wrap;
  width: 415px;
  padding-left: 24px;
  margin-left: 10px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: ${(props) => (props.selected ? "flex" : "none")};
    max-width: 415px;
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    max-width: 315px;
  }
`;

export const EducationDisplay = styled.div`
  display: ${(props) => (props.selected ? "flex" : "none")};
  flex-wrap: wrap;
  border: 1px solid #dadce0;
  border-radius: 8px;
  width: 415px;
  height: 100%;
  margin-left: 36px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;

export const EducationInstitution = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 150px);
  font-size: 30px;
  font-weight: 400;
  padding: 12px 15px 12px 15px;

  animation: fadeIn 1.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 12px 15px 12px 0;
    width: calc(100% - 100px);
  }
`;

export const EducationText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EducationSchool = styled.div`
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
  color: #202124;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
  }
`;

export const EducationDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #70757a;
`;

export const EducationBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #70757a;
  width: 40px;
  height: 40px;
  border-radius: 999rem;
  padding: 10px;
  background-color: inherit;
  cursor: pointer;

  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
    color: #4d5156;
  }

  &:active {
    background-color: rgba(60, 64, 67, 0.24);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const EducationNotification = styled.span`
  align-items: center;
  position: fixed;
  left: 0px;
  top: 860px;
  min-width: 288px;
  min-height: 48px;
  max-width: 288px;
  max-height: 48px;
  background-color: #0f0f0f;
  color: #fff;
  border-radius: 8px;
  padding: 12px;
  margin: 16px;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.1);
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 400;
  transform: ${(props) =>
    props.open ? "translateY(0px)" : "translateY(100px)"};
  opacity: ${(props) => (props.open ? "1" : "0")};
  transition: transform 0.3s, opacity 0.3s;
  z-index: 3;
`;

export const EducationImage = styled.img`
  display: flex;
  width: 140px;
  height: 140px;
  animation: fadeIn 1.5s;
  margin: 5px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 90px;
    height: 90px;
  }
`;

export const EducationDetails = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dadce0;
  padding: 13px 15px 16px 15px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 13px 15px 16px 0;
  }
`;

export const EducationStudy = styled.span`
  color: #202124;
  font-size: 14px;
  line-height: 1.58;
  font-weight: bolder;

  animation: fadeIn 1.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const EducationSummary = styled.li`
  font-size: 14px;
  color: #4d5156;
  line-height: 1.58;

  animation: fadeIn 1.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
