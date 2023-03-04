import styled from '@emotion/styled';

export const Title = styled.h3`
  text-align: center;
`;

export const Button = styled.button`
  margin-bottom: 10px;
  margin-right: auto;
  margin-left: auto;
  width: 100px;
  height: 40px;
  margin-top: 10px;
  display: block;
  text-decoration: none;
  border: 2px solid #ffffff;
  border-radius: 3px;
  text-align: center;

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

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
