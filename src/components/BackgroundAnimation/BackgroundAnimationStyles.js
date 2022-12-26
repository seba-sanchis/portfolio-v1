import styled from "styled-components";

export const Background = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: none;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: none;
  }
`;
