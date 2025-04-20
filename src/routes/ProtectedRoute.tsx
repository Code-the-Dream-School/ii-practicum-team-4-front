import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = () => {
  const auth = useAuth();

  if (auth.token === '') return <Navigate to="/sign-in" />;
  return <Outlet />;
};

export default ProtectedRoute;
