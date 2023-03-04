import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../firebase';
import { Button } from 'pages/Profile/Profile.styled';
import { ToRegister } from 'pages/Login/Login.styled';
import { AuthContext } from 'components/AuthContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('');
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate replace to="/profile" />;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    seterror('Passwords do not match');
    setEmail('');
    setPassword('');
    const res = await signUp(email, password);
    if (res.error) seterror(res.error);
  };

  return (
    <>
      <div>
        {error ? <p style={{ textAlign: 'center' }}>{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Your Email"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Your Password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">Register</Button>
        </form>
        <ToRegister>
          Already registered?{' '}
          <Link
            style={{ textDecoration: 'underline', display: 'inline-block' }}
            to="/login"
          >
            Login
          </Link>
        </ToRegister>
      </div>
    </>
  );
};
