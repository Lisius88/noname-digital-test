import styled from '@emotion/styled';

export const Container = styled.div`
  min-height: calc(100vh - 179px);
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  background-color: #fcd5ba;
  max-width: 320px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  @media (min-width: 450px) {
    max-width: 450px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 15px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
