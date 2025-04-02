import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ThankYouPage from './pages/ThankYouPage';
import NotFoundPage from './pages/404NotFound';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import AccountPage from './pages/AccountPage';
import Footer from './layout/Footer';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const App = () => {
  // Define the social media links
  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: <FaFacebook /> },
    { name: 'Instagram', url: 'https://instagram.com', icon: <FaInstagram /> },
    { name: 'Twitter', url: 'https://twitter.com', icon: <FaTwitter /> },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedin /> },
  ];
 return (
    <BrowserRouter>
      <Routes>
        <Route
            path="/"
            element={<HomePage />
            }
          />
        <Route
          path="/shop"
          element={<ShopPage />
          }
        />
        <Route
          path="/about"
          element={<AboutPage />
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
          path="/account"
          element={<AccountPage />
          }
        />
        <Route
          path="/order-history"
          element={<OrderHistoryPage />
          }
        />
        <Route
          path="/thanku"
          element={<ThankYouPage />
          }
        />
        <Route
          path="/404"
          element={<NotFoundPage />
          }
        />
        <Route
          path="/sign-in"
          element={<SignInPage />
          }
        />
        <Route
          path="/sign-up"
          element={<SignUpPage />
          }
        />
      </Routes>
      <Footer 
        brandLogo=''
        socialLinks={socialLinks}
      />
    </BrowserRouter>  
  );
}

export default App;
