import { useSelector, useDispatch } from 'react-redux';
import {
  FlexContainer,
  Item,
  Button,
  Img,
  Total,
  Price,
  Info,
} from './Basket.styled';

export const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector(state => state.basketItems);
  console.log(basketItems);

  const removeFromBasket = itemId => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: itemId });
  };

  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' });
  };

  const price = basketItems.map(item => item.price);
  const total = price.reduce((previousValue, number) => {
    return previousValue + number;
  }, 0);

  return (
    <div>
      {basketItems.length === 0 ? (
        <Info>Your basket is empty</Info>
      ) : (
        <>
          <ul>
            {basketItems.map(item => (
              <Item key={item.id}>
                <FlexContainer>
                  <Img src={item.images[0]} alt={item.title} />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                    }}
                  >
                    <p style={{ marginRight: '20px' }}>{item.title}</p>
                    <Price style={{ marginRight: '15px' }}>{item.price}$</Price>
                    <Button onClick={() => removeFromBasket(item.id)}>x</Button>
                  </div>
                </FlexContainer>
              </Item>
            ))}
          </ul>
          <Total>Total: {total}$</Total>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={clearBasket}>Clear</Button>
            <Button>Pay</Button>
          </div>
        </>
      )}
    </div>
  );
};
