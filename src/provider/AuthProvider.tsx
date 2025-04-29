import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
import { User } from '../models/User';

export type AuthContextType = {
  userDetails: User | null;
  login: (user: User) => void;
  logout: VoidFunction
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const login = useCallback((user: User) => {
    setUserDetails(user);
  }, []);
  const logout = useCallback(() => {
    setUserDetails(null);
  }, [])

  return (
    <AuthContext.Provider value={{ userDetails, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw Error('Use hook within provider');
  }

  return authContext;
};
