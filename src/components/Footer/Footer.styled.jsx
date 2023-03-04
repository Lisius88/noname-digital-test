import styled from '@emotion/styled';

export const FooterStyled = styled.footer`
  background-color: #fca94d;
`;

export const Container = styled.div`
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  max-width: 320px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1200px) {
    max-width: 1230px;
  }
`;
