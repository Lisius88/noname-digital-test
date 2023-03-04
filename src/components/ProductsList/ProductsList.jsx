import { Link, useLocation } from 'react-router-dom';
import { List, Img, Item, Descr } from './ProductsList.styled';

export const ProductsList = ({ products }) => {
  const location = useLocation();

  return (
    <section>
      <List>
        {products.map(({ id, title, price, brand, thumbnail }) => (
          <Item key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <Img src={thumbnail} alt={title} />
              <Descr>
                <h3>{title}</h3>
                <p style={{ fontWeight: '600' }}>{price}$</p>
                <p>{brand}</p>
              </Descr>
            </Link>
          </Item>
        ))}
      </List>
    </section>
  );
};
