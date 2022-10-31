import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";

import {
  CompanyContainer,
  FooterWrapper,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
  SocialIcons,
} from "./FooterStyles";

const Footer = () => (
  <FooterWrapper>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Sebastian Sanchis. San Isidro, Buenos Aires, Argentina.</Slogan>
      </CompanyContainer>
      <SocialContainer>
        <SocialIcons href="https://github.com/seba-sanchis" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/sebastian-sanchis/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://drive.google.com/file/d/1gB9A1LZdpYeXp_pepnQn0MWJRiM9o7jk/view?usp=sharing"
          target="_blank"
        >
          <AiFillFilePdf size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
  </FooterWrapper>
);
export default Footer;
