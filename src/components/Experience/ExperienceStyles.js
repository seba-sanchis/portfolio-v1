import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  width: 100%;
  background-color: #f8f8f8;
  padding: 48px;
  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 48px 16px;
  }
`;

export const Job = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;

  @media ${(props) => props.theme.breakpoints.tablet} {
    flex-direction: column;
  }
`;

export const Position = styled.span`
  font-weight: 600;

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin-bottom: 8px;
  }
`;

export const Date = styled.span``;

export const TaskList = styled.ul`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: initial;
  line-height: 28px;
  //  max-width: 900px;
  color: #5f6368;
  margin: 0 auto;
  //  text-align: center;
`;

export const Task = styled.li``;
