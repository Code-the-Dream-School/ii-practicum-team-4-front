import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Router from './routes/Router';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <MainLayout>
              <Router />
            </MainLayout>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
