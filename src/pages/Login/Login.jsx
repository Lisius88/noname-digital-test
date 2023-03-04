import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../firebase';
import { signInWithGoogle } from '../../firebase';
import { Button } from 'pages/Profile/Profile.styled';
import { ToRegister } from './Login.styled';
import { AuthContext } from 'components/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const [authorizied, setAuthorizied] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('');
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate replace to="/profile" />;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
    const res = await signIn(email, password);
    if (res === true) {
      console.log(authorizied);
      setAuthorizied(res);
    }
    if (res.error) seterror(res.error);
  };
  return (
    <>
      {error ? <div>{error}</div> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Your Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Your Password"
          onChange={e => setPassword(e.target.value)}
        />
        <div>
          <Button type="submit" onClick={handleSubmit}>
            Login{' '}
          </Button>
          <Button
            style={{ width: '200px' }}
            type="button"
            onClick={signInWithGoogle}
          >
            Login with Google
          </Button>
        </div>
      </form>
      <ToRegister>
        If you don't have an account, let's{' '}
        <Link
          to="/register"
          style={{ textDecoration: 'underline', display: 'inline-block' }}
        >
          Register
        </Link>
      </ToRegister>
    </>
  );
};
