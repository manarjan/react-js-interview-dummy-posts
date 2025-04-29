import { FC, PropsWithChildren } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { Header } from '../components/ui/Header';
import { useAuth } from '../provider/AuthProvider';

export const ProtectedLayout: FC<PropsWithChildren> = ({ }) => {
  const { userDetails } = useAuth();
  const location = useLocation();

  if (!userDetails) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
