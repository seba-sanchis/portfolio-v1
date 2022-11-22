import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 24px 48px;
  background: #f8f9fa;
  left: 0;
  display: flex;
  justify-content: center;
  margin-top: 60px;

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: flex;
    justify-content: space-between;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;
  flex: 1 1 auto;

  @media ${(props) => props.theme.breakpoints.tablet} {
    flex-direction: column;
    align-items: baseline;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;

export const Slogan = styled.p`
  color: #202124;
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
    min-width: 100px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.tablet} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const SocialIcons = styled.a`
  color: #202124;
  display: flex;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-left: 24px;

  &:hover {
    color: #1967d2;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-left: 8px;
  }
`;
