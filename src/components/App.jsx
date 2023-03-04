import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Products } from 'pages/Products/Products';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { Profile } from 'pages/Profile/Profile';
import { ProductDetails } from './ProductDetails/ProductDetails';
import { Basket } from 'pages/Basket/Basket';
import { Container } from './Container.styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Container>
      <Footer />
      <Toaster />
    </>
  );
};
