import { signOutUser } from '../../firebase';
import { useContext } from 'react';
import { AuthContext } from 'components/AuthContext';
import { Navigate } from 'react-router-dom';
import { Title } from './Profile.styled';
import { Button, Img } from './Profile.styled';

export const Profile = () => {
  const { user } = useContext(AuthContext);
  const handleLogout = async () => {
    await signOutUser();
  };

  if (!user) {
    return <Navigate replace to="/login" />;
  }
  return (
    <>
      <Title>Hello, dear {user.email}</Title>
      <Button onClick={handleLogout}>Logout</Button>
      <Img
        src="https://img.freepik.com/free-psd/sale-discount-coupon-tag-icon-isolated-3d-render-illustration_47987-8275.jpg?w=1060&t=st=1677877047~exp=1677877647~hmac=dc3a9587a12a9a8407c35b5577615a08671f83abb8c58b32d87c76c66a09ce0f"
        alt="banner"
      />
    </>
  );
};
