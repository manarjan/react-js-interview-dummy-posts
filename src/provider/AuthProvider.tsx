import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { User } from '../models/User';

export type AuthContextType = {
  userDetails: User | null | undefined;
  login: (user: User) => void;
  logout: VoidFunction
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [userDetails, setUserDetails] = useState<User | null | undefined>(undefined);
  const login = useCallback((user: User) => {
    setUserDetails(user);
    localStorage.setItem('user', JSON.stringify(user));
  }, []);
  const logout = useCallback(() => {
    setUserDetails(null);
    localStorage.removeItem('user');
  }, [])

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUserDetails(JSON.parse(user) as User);
    }
    else {
      setUserDetails(null)
    }
  }, [])

  if (userDetails === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ userDetails, login, logout }}>
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
