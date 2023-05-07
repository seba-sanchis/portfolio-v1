import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from "react-icons/ai";

import {
  FooterWrapper,
  Slogan,
  SocialContainer,
  FooterContainer,
  SocialIcons,
} from "./FooterStyles";

import { about } from "../../constants/constants";

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <Slogan>Sebastian Sanchis. San Isidro, Buenos Aires, Argentina.</Slogan>
      <SocialContainer>
        <SocialIcons href={about.gitHub} target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href={about.linkedIn}
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons
          href={about.resume}
          target="_blank"
        >
          <AiFillFilePdf size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterContainer>
  </FooterWrapper>
);
export default Footer;
