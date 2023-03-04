import { NavLink } from 'react-router-dom';
import { BsFillBasket2Fill } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from 'components/AuthContext';
import styled from '@emotion/styled';

export const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <HeaderStyled>
      <Container>
        <FlexContainer>
          <SecondContainer>
            <NavLinkStyledLogo to="/">Noname|Digital</NavLinkStyledLogo>
            <NavLinkStyled to="/">Main</NavLinkStyled>
            <NavLinkStyled to="/products">Products</NavLinkStyled>
          </SecondContainer>
          <SecondContainer>
            {!user && <NavLinkStyled to="/login">Login</NavLinkStyled>}
            {user && <NavLinkStyled to="/profile">Profile</NavLinkStyled>}
            {user && (
              <NavLinkStyled to="/basket">
                {<BsFillBasket2Fill />}
              </NavLinkStyled>
            )}
          </SecondContainer>
        </FlexContainer>
      </Container>
    </HeaderStyled>
  );
};

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const SecondContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const NavLinkStyled = styled(NavLink)`
  padding: 15px;
  display: block;
  font-size: 20px;
  color: #feffff;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #060116;
  }

  &.active {
    color: #060116;
  }
`;

export const NavLinkStyledLogo = styled(NavLink)`
  display: none;
  @media (min-width: 768px) {
    padding: 20px;
    display: block;
    font-size: 25px;
    color: #0052b1;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 320px;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1200px) {
    max-width: 1230px;
  }
`;

const HeaderStyled = styled.header`
  background-color: #fca94d;
`;
