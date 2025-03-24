import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutUsPage from './pages/AboutUs';
import ProduceCategoryPage from './pages/ProduceCategoryPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import FAQPage from './pages/FAQPage';


const App = () => {
 return (
    <BrowserRouter>
      <Routes>
        <Route
            path="/"
            element={<HomePage />}
          />
        <Route
          path="/products"
          element={<ProductPage />
          }
        />
        <Route
          path="/about"
          element={<AboutUsPage />
          }
        />
        <Route
          path="/cart"
          element={<CartPage />
          }
        />
        <Route
          path="/checkout"
          element={<CheckoutPage />
          }
        />
        <Route
          path="/contact"
          element={<ContactPage />
          }
        />
        <Route
          path="/produce-category"
          element={<ProduceCategoryPage />
          }
        />
        <Route
          path="/thanku"
          element={<ThankYouPage />
          }
        />
        <Route
          path="/faq"
          element={<FAQPage />
          }
        />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
