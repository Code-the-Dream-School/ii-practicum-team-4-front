import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Router from './routes/Router';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="bg-background">
      <BrowserRouter>
        <AuthProvider>
          <MainLayout>
            <Router />
          </MainLayout>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
