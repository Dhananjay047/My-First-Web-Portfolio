import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href={'tel:9589438577'}>+91 9589438577</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href={'mailto:aroneagle007@gmail.com'}>aroneagle007@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Innovating one product at a time.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Dhananjay047">
            <AiFillGithub size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/dhananjay-sahu-a68a061b8/">
            <AiFillLinkedin size="3rem"/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/d_e_a_d___pool/">
            <AiFillInstagram size="3rem"/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
