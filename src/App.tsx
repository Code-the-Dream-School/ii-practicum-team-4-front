import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Router from './routes/Router';

function App() {
  return (
    <div className="bd-background">
      <BrowserRouter>
        <MainLayout>
          <Router />
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
