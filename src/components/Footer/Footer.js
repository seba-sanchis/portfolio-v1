import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Thanks for your time.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/seba-sanchis" target="_blank" small>
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/sebastian-sanchis/" target="_blank" small>
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://drive.google.com/file/d/1gB9A1LZdpYeXp_pepnQn0MWJRiM9o7jk/view?usp=sharing" target="_blank" small>
            <AiFillFilePdf size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
