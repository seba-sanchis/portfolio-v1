import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: column;
  padding: ${(props) => (props.main ? null : "117px 48px 27px")};
  margin: 48px auto;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  background-color: #fff;
  align-items: ${(props) => (props.center ? "center" : null)};
  @media ${(props) => props.theme.breakpoints.tablet} {
    padding: 24px 48px 0;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding: 16px 16px 0;

    width: calc(100vw - 32px);
  }
`;

export const SectionTitle = styled.h2`
  font-weight: ${(props) => (props.main ? "600" : "400")};
  font-size: ${(props) => (props.main ? "60px" : "40px")};
  line-height: ${(props) => (props.main ? "68px" : "48px")};
  width: max-content;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "48px 0 16px" : "0")};
  color: #202124;
  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
  }
`;

export const SectionText = styled.p`
  max-width: ${(props) => (props.maxwith ? "768px" : "1024px")};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  padding-bottom: ${(props) => (props.nopadding ? null : "24px")};

  @media ${(props) => props.theme.breakpoints.tablet} {
    max-width: 670px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    padding-bottom: 16px;
  }
`;

export const Button = styled.button`
  margin: ${(props) => (props.margin ? "6px 0" : "0")};
  border-radius: 4px;
  color: #fff;
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  padding: 8px 20px;
  background: #1967d2;
  transition: 0.4s ease;
  font-size: 16px;
  font-weight: 500;
  font-optical-sizing: none;
  line-height: 24px;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(25, 24, 24, 0.16),
        rgba(25, 24, 24, 0.16)
      ),
      rgb(25, 103, 210);
    box-shadow: rgb(66 63 63 / 30%) 0px 1px 2px,
      rgb(66 63 63 / 15%) 0px 1px 3px 1px;
  }
  &:focus {
    outline: none;
  }
  &:active {
    background: linear-gradient(
        0deg,
        rgba(25, 24, 24, 0.2),
        rgba(25, 24, 24, 0.2)
      ),
      rgb(25, 103, 210);
    box-shadow: rgb(66 63 63 / 30%) 0px 1px 2px,
      rgb(66 63 63 / 15%) 0px 2px 6px 2px;
    border-color: #fff;
  }

  &:disabled {
    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15),
      inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    font-size: ${({ alt }) => (alt ? "20px" : "16px")};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    font-size: 14px;
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => (large ? "24px" : "16px")};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    margin-left: ${({ large }) => (large ? "16px" : "8px")};
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    margin-left: ${({ large }) => (large ? "0" : "8px")};
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => (large ? "32px" : "24px")};

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: ${({ nav }) => (nav ? "16px" : "24px")};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    height: ${({ large }) => (large ? "32px" : "16px")};
  }
`;
