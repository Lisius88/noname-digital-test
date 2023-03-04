import styled from '@emotion/styled';

export const Button = styled.button`
  margin-top: 5px;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 40px;
  display: block;
  text-decoration: none;
  border: 2px solid #ffffff;
  border-radius: 3px;

  overflow: hidden;
  font-size: 15px;
  line-height: 20px;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  font-family: 'Roboto Condensed', Тahoma, sans-serif;
  background: #fca94d;
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
  z-index: 1;

  :hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Descr = styled.p`
  margin-bottom: 5px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DetailsContainer = styled.div`
  margin-left: 0px;

  @media (min-width: 768px) {
    margin-left: 10px;
  }
`;
