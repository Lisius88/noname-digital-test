import { FooterStyled, Container } from './Footer.styled';
import { NavLink } from 'react-router-dom';
import { NavLinkStyledLogo } from 'components/Header/Header';
import { BsTelegram, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import styled from '@emotion/styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <NavLinkStyledLogo>Noname|Digital</NavLinkStyledLogo>
        <div>
          <p>+380675555555</p>
          <p>noname@gmail.com</p>
          <address>
            <p>Kyiv, Stepan Bandera Avenue 28</p>
          </address>
        </div>
        <div>
          <NavLinkStyled to="https://t.me/Jelisiej">
            <IconStyledFirst />
          </NavLinkStyled>
          <NavLinkStyled to="https://github.com/Lisius88">
            <IconStyledSecond />
          </NavLinkStyled>
          <NavLinkStyled to="https://github.com/Lisius88">
            <IconStyledThird />
          </NavLinkStyled>
          <NavLinkStyled to="https://www.linkedin.com/in/elisey-makarov/">
            <IconStyledFourth />
          </NavLinkStyled>
        </div>
      </Container>
    </FooterStyled>
  );
};

const NavLinkStyled = styled(NavLink)`
  margin-left: 10px;
`;

const IconStyledFirst = styled(BsTelegram)`
  width: 30px;
  height: 30px;
  color: #00142e;

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #fcecec;
  }
`;
const IconStyledSecond = styled(BsTwitter)`
  width: 30px;
  height: 30px;
  color: #00142e;

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #fcecec;
  }
`;
const IconStyledThird = styled(BsGithub)`
  width: 30px;
  height: 30px;
  color: #00142e;

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #fcecec;
  }
`;
const IconStyledFourth = styled(BsLinkedin)`
  width: 30px;
  height: 30px;
  color: #00142e;

  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #fcecec;
  }
`;
