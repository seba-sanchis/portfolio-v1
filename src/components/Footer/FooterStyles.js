import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 24px 48px;
  background: #f8f9fa;
  left: 0;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
  }
`;

export const Slogan = styled.p`
  color: #5f6368;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: initial;
  line-height: 24px;

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    line-height: 22px;
    font-size: 14px;
    margin: 0 0 32px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialIcons = styled.a`
  color: #5f6368;
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 24px;

  &:hover {
    color: #202124;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin: 0 8px 0 8px;
  }
`;
