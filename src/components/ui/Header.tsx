import { Link } from 'react-router';
import { useAuth } from '../../provider/AuthProvider';
import { LogOutIcon } from 'lucide-react';

export const Header = () => {
  const { userDetails, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <nav>
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              My Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">{userDetails?.firstName}</span>
            <button
              onClick={handleLogout}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Logout"
            >
              <LogOutIcon size="20" className="text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};