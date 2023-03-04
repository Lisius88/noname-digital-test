import { useState, useEffect } from 'react';
import { ProductsList } from 'components/ProductsList/ProductsList';
import React, { useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import {
  FlexContainer,
  Select,
  Button,
  FlexContainerSecond,
} from './Products.styled';
import axios from 'axios';

export const Products = () => {
  const selectRef = useRef(null);
  const selectRefSecond = useRef(null);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState('');
  const [sortProducts, setSortProducts] = useState(null);
  const [categoties, setCategories] = useState(null);
  const [cat, setCat] = useState(null);
  const [productsByCategory, setproductsByCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    const selectedValue = selectRef.current.value;
    console.log(selectedValue);
    if (selectedValue === 'default') {
      setSortProducts(products);
      setproductsByCategory(productsByCategory);
    }
    if (selectedValue === 'higher') {
      const high = [...products].sort(
        (higher, lower) => lower.price - higher.price
      );
      const highByCategory = [...productsByCategory].sort(
        (higher, lower) => lower.price - higher.price
      );
      setSortProducts(high);
      setproductsByCategory(highByCategory);
    }
    if (selectedValue === 'lower') {
      const low = [...products].sort(
        (lower, higher) => lower.price - higher.price
      );
      const lowByCategory = [...productsByCategory].sort(
        (lower, higher) => lower.price - higher.price
      );
      setSortProducts(low);
      setproductsByCategory(lowByCategory);
    }
    if (selectedValue === 'popular') {
      const rating = [...products].sort(
        (lower, higher) => lower.rating - higher.rating
      );
      const ratingByCategory = [...productsByCategory].sort(
        (lower, higher) => lower.rating - higher.rating
      );
      setSortProducts(rating);
      setproductsByCategory(ratingByCategory);
    }
  };

  const handleButtonClickSecond = () => {
    const selectedValue = selectRefSecond.current.value;
    if (selectedValue === 'all products') {
      setCat(null);
      setProducts(products);
    } else setCat(selectedValue);
  };

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products/?limit=100')
      .then(res => {
        setProducts(res.data.products);
      })
      .catch(error => setError(error))
      .finally();
  }, [products]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://dummyjson.com/products/categories')
      .then(res => {
        setCategories(['all products', ...res.data]);
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${cat}`)
      .then(res => {
        setproductsByCategory(res.data.products);
      })
      .catch(error => setError(error))
      .finally();
  }, [cat]);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <Loader />}
      <FlexContainer>
        <FlexContainerSecond>
          <Select ref={selectRefSecond}>
            {categoties &&
              categoties.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </Select>
          <Button type="button" onClick={handleButtonClickSecond}>
            Select category
          </Button>
        </FlexContainerSecond>
        <FlexContainerSecond>
          <Select ref={selectRef}>
            <option value="default">default</option>
            <option value="higher">from higher to lower price</option>
            <option value="lower">from lower to higher price</option>
            <option value="popular">by popularity</option>
          </Select>
          <Button type="button" onClick={handleButtonClick}>
            Select filter
          </Button>
        </FlexContainerSecond>
      </FlexContainer>
      {!sortProducts && products && !cat && (
        <ProductsList products={products} />
      )}
      {sortProducts && !cat && <ProductsList products={sortProducts} />}
      {products && cat && productsByCategory && (
        <ProductsList products={productsByCategory} />
      )}
    </>
  );
};
