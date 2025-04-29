import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../provider/AuthProvider';
import { useState } from 'react';

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setPassword(e.target.value);
  };

  const handleLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(e);
    login({
      id: 1,
      username: 'emilys',
      email: 'emily.johnson@x.dummyjson.com',
      firstName: 'Emily',
      lastName: 'Johnson',
      gender: 'female',
      image: 'https://dummyjson.com/icon/emilys/128',
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
      refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    });

    navigate(location.state?.from?.pathName || '/');
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          autoComplete="username"
          type="text"
          required
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          autoComplete="current-password"
          required
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
