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

export const Article = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Statement = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: initial;
  line-height: 28px;
  max-width: 900px;
  color: #5f6368;
  margin: 0 auto;
  text-align: center;
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
`;
