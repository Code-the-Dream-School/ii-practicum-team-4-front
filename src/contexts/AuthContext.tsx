import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  token: string;
  isLoggedIn: boolean;
  setUserSession: ({ token }: { token: string }) => void;
  resetUserSession: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

// export const useAuth = () => useContext(AuthContext);
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
  // token = ''; (false)
  // token = '23423' (true)
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

// import React, { createContext, useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// type LoginResponseType = {
//   user: string;
//   token: string;
// };

// interface ProviderProps {
//   user: string | null;
//   token: string;
//   login(data: LoginResponseType): void;
//   logout(): void;
// }

// const AuthContext = createContext<ProviderProps>({
//   user: null,
//   token: '',
//   login: () => {},
//   logout: () => {},
// });

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const storedInfo = JSON.parse(localStorage.getItem('user') || 'null');
//   const [user, setUser] = useState<string | null>(storedInfo?.email);
//   const [token, setToken] = useState(storedInfo?.token || '');
//   const navigate = useNavigate();

//   const login = (data: LoginResponseType) => {
//     setUser(data.user);
//     setToken(data.token);
//     localStorage.setItem('user', JSON.stringify(data));
//     navigate('/');
//   };

//   const logout = () => {
//     setUser(null);
//     setToken('');
//     localStorage.removeItem('user');
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
