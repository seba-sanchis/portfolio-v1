import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  border-bottom: 1px solid #dadce0;
`;

export const ListItems = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 6px;
  border-top: ${(props) => (props.noborder ? null : "1px solid #dadce0")};

  @media ${(props) => props.theme.breakpoints.mobile} {
    border-top: ${(props) => (props.border ? "1px solid #dadce0" : null)};
  }
`;

export const ListTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: initial;
  line-height: 24px;
  color: ${(props) => (props.toggle ? "#174ea6" : "#1a73e8")};
  flex: 1 1 auto;
  align-self: center;
  margin-left: 8px;
`;

export const ToggleButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 0 4px;
  border: none;
  background: none;
  color: ${(props) => (props.toggle ? "#174ea6" : "#1a73e8")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.1s ease-out;
  transform: ${(props) => (props.toggle ? "rotate(180deg)" : null)};
`;

export const ListContainer = styled.div`
  display: flex;
  padding: 28px 0 27px;
  width: 100%;
  border-top: 1px solid #dadce0;
  cursor: pointer;
  border-bottom: ${(props) => (props.toggle ? "2px solid #174ea6" : null)};

  &:hover ${ListTitle} {
    color: #174ea6;
  }

  &:hover ${ToggleButton} {
    color: #174ea6;
  }
`;

export const ListContent = styled.div`
  display: flex;
  border-top: 1px solid #dadce0;
  width: 100%;
  padding: 24px 2px;
  display: grid;
  grid-template-columns: repeat(4, minmax(5px, 1fr));
  grid-column-gap: 48px;

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: repeat(2, minmax(5px, 1fr));
  }
`;

export const ListParagraph = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #3c4043;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0 16px 0;
  margin-bottom: auto;
  margin-left: 16px;
  margin-top: auto;
`;

// Social Icons
export const ListIcon = styled.div`
  color: #3c4043;
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
`;
