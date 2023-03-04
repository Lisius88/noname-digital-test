import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  FlexContainer,
  Item,
  Button,
  Img,
  Total,
  Price,
} from './Basket.styled';

export const Basket = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const basketItems = useSelector(state => state.cartItems);
  console.log(basketItems);

  const removeFromCart = itemId => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const price = basketItems.map(item => item.price);
  const total = price.reduce((previousValue, number) => {
    return previousValue + number;
  }, 0);

  return (
    <div>
      {basketItems.length === 0 ? (
        <p>Your cart is empty</p>
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
                    <Button onClick={() => removeFromCart(item.id)}>x</Button>
                  </div>
                </FlexContainer>
              </Item>
            ))}
          </ul>
          <Total>Total: {total}$</Total>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={clearCart}>Clear</Button>
            <Button>Pay</Button>
          </div>
        </>
      )}
    </div>
  );
};
