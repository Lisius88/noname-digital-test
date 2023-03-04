import styled from '@emotion/styled';

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.li`
  padding: 0;
  margin: 0;
  margin-left: 0;
  border: 3px solid #ffffff;
  background-color: #f5be97;
  border-radius: 5px;
  margin-top: 15px;
  padding: 5px;
`;

export const Button = styled.button`
  margin-left: 5px;
  margin-right: 5px;
  height: 30px;
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

export const Img = styled.img`
  background-color: #ffffff;
  width: 50px;
  height: 50px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  object-fit: contain;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const Total = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-left: auto;
  max-width: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Price = styled.span`
  font-weight: 500;
`;
