import styled from "styled-components";

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ExperienceTabList = styled.ul`
  display: block;
  // grid-gap: 36px;
  // grid-template-columns: 1fr;
  // grid-column-start: 1;
  // grid-column-end: span 6;
  // grid-row-gap: 36px;
  // grid-row: 1;
  padding: 0;
`;

export const ExperienceTab = styled.li`
  display: block;
  position: relative;
  padding-left: 24px;
  margin-left: 10px;
  cursor: pointer;
`;

export const ExperienceTrack = styled.div`
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

export const ExperienceInfo = styled.div`
  color: #5f6368;
`;

export const ExperienceTitle = styled.h3`
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  color: ${(props) => (props.selected ? "#1a73e8" : null)};
`;

export const ExperienceSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const ExperienceExpand = styled.div`
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

export const ExperienceDisplay = styled.div`
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

export const ExperienceInstitution = styled.div`
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

export const ExperienceText = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ExperienceCompany = styled.div`
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

export const ExperienceDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #70757a;
`;

export const ExperienceBtn = styled.button`
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

export const ExperienceNotification = styled.span`
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

export const ExperienceImage = styled.img`
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

export const ExperienceDetails = styled.ul`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dadce0;
  padding: 13px 15px 16px 15px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 13px 15px 16px 0;
  }
`;

export const ExperiencePosition = styled.span`
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

export const ExperienceSummary = styled.li`
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
