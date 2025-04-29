import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useLogin } from '../../services/hooks/useLogin';

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { mutateAsync: login } = useLogin();

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

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await login({
      username, password
    });

    navigate(location.state?.from?.pathName || '/');
  };

  return (
    <div style={{ height: '100vh', display: 'grid', placeContent: 'center' }}>
      <form onSubmit={handleLogin} style={{ padding: '5em', background: '#999', borderRadius: '1em', display: 'grid', gap: '1em' }}>
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
    </div>
  );
};
