import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";

import {
  FooterWrapper,
  Slogan,
  SocialContainer,
  FooterContainer,
  SocialIcons,
} from "./FooterStyles";

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <Slogan>Sebastian Sanchis. San Isidro, Buenos Aires, Argentina.</Slogan>
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
    </FooterContainer>
  </FooterWrapper>
);
export default Footer;
