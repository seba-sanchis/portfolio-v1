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

export const EducationText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const EducationDisplay = styled.div`
  display: flex;
  background-color: #d2e3fc;
  border-radius: 16px;
  width: 526px;
  height: 326px;
  align-items: center;
  justify-content: space-between;
  margin-left: 36px;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: none;
  }
`;

export const EducationIcon = styled.div`
  color: #fff;
  position: relative;
  left: 96px;
`;

export const EducationImage = styled.img`
  display: ${(props) => (props.selected ? "flex" : "none")};
  width: 200px;
  height: 200px;
  animation: fadeIn 6.5s;
  position: relative;
  left: 8px;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
