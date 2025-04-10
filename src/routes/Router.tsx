import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import AccountPage from '../pages/AccountPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import ThankYouPage from '../pages/ThankYouPage';
import NotFoundPage from '../assets/images/404.png';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/order-history" element={<OrderHistoryPage />} />
      <Route path="/thanku" element={<ThankYouPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
