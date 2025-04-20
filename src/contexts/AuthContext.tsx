import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

type LoginResponseType = {
    user: string;
    token: string;
  };
  
  interface ProviderProps {
    user: string | null;
    token: string;
    login(data: LoginResponseType): void;
    logout(): void;
  }

const AuthContext = createContext<ProviderProps>({
    user: null,
    token: '',
    login: () => {},
    logout: () => {}
})

export const randomAlphaNumeric = (length: number) => {
    let s = '';
    Array.from({ length }).some(() => {
      s += Math.random().toString(36).slice(2);
      return s.length >= length;
    });
    return s.slice(0, length);
};

export const AuthProvider = ({ children }: { children: React.ReactNode}) => {
    const storedInfo = JSON.parse(localStorage.getItem('user') || 'null');
    const [user, setUser ] = useState<string | null>(storedInfo?.email);
    const [ token, setToken ] = useState( storedInfo?.token || '');
    const navigate = useNavigate()

    const login = (data: LoginResponseType) => {
        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      };

    const logout = () => {
        setUser(null);
        setToken('');
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user,token, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}