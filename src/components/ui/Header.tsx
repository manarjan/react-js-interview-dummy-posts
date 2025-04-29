import { Link } from 'react-router';
import { useAuth } from '../../provider/AuthProvider';
import { LogOutIcon } from 'lucide-react';

export const Header = () => {
  const { userDetails, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: '#AAA',
        padding: '1em',
      }}
    >
      <nav>
        <Link to="/">
          <a>My Blog</a>
        </Link>
      </nav>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.25em',
        }}
      >
        {userDetails?.firstName}
        <button
          onClick={handleLogout}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <LogOutIcon size="20" color="red" />
        </button>
      </span>
    </header>
  );
};
