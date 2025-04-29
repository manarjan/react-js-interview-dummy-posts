import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useLogin } from '../../services/hooks/useLogin';
import { AlertCircle, Loader2 } from 'lucide-react';

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { mutateAsync: login, isError, error, isPending } = useLogin();

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await login({
      username,
      password,
    });

    navigate(location.state?.from?.pathName || '/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {isError && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center gap-3 text-red-700">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium">Login failed</h3>
              <p className="text-sm mt-1">{(error as Error)?.message || 'An error occurred during login'}</p>
            </div>
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                disabled={isPending}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                disabled={isPending}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in...
                </span>
              ) : (
                'Sign in'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};