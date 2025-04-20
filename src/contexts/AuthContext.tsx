import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  token: string;
  isLoggedIn: boolean;
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

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const initialToken = localStorage.getItem('token') || '';
  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token; // Boolean(token)

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
        setUserSession,
        resetUserSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
