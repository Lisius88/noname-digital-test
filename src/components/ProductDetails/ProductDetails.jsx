import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from 'components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import {
  Button,
  Descr,
  FlexContainer,
  DetailsContainer,
} from './ProductDetails.styled';
import { Loader } from 'components/Loader/Loader';

export const ProductDetails = () => {
  const [
    { id, title, description, price, rating, brand, category, thumbnail },
    setProduct,
  ] = useState({});
  const { productId } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onButtonClick = e => {
    if (!user) {
      toast.error('You need to login.');
      navigate('/login', { replace: true });
    }
    if (user) {
      dispatch({
        type: 'ADD_TO_BASKET',
        payload: { id, title, price, thumbnail },
      });
      toast.success('Product added to basket');
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${productId}`)
      .then(resp => resp.json())
      .then(data => {
        setProduct(data);
      })
      .catch()
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <>
      {loading && <Loader />}
      {title && (
        <div>
          <FlexContainer>
            <img src={thumbnail} alt={title} />
            <DetailsContainer>
              <p>
                Model: <span>{title}</span>
              </p>
              <p>
                Brand: <span>{brand}</span>
              </p>
              <p>
                Price: <span>{price}$</span>
              </p>
              <p>
                Rating: <span>{rating}</span>
              </p>
              <Descr>
                Category: <span>{category}</span>
              </Descr>
              <p>Description: {description}</p>
              <Button type="button" onClick={onButtonClick}>
                Add to the basket
              </Button>
            </DetailsContainer>
          </FlexContainer>
        </div>
      )}
    </>
  );
};
