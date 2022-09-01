import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.mobile} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  
  @media ${(props) => props.theme.breakpoints.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
