import { createContext, useContext, useState, ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';
interface DecodedToken {
  userId: string;
  name: string;
  iat: number;
  exp: number;
}

interface AuthContextType {
  token: string;
  isLoggedIn: boolean;
  userId: string | null;
  // eslint-disable-next-line no-unused-vars
  setUserSession: ({ token }: { token: string }) => void;
  resetUserSession: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

const getUserIdFromToken = (token: string): string | null => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded.userId || null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const initialToken = localStorage.getItem('token') || '';
  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token; // Boolean(token)
  const userId = getUserIdFromToken(token);

  // log in
  const setUserSession = ({ token }: { token: string }) => {
    localStorage.setItem('token', JSON.stringify(token));
    setToken(token);
  };

  // log out
  const resetUserSession = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        userId,
        setUserSession,
        resetUserSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};