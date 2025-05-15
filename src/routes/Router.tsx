import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AccountPage from '../pages/AccountPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import ThankYouPage from '../pages/ThankYouPage';
import NotFoundPage from '../pages/NotFoundPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ProtectedRoute from './ProtectedRoute';
import ShoppingPage from '../pages/ShoppingPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import ShoppingCheckoutPage from '../pages/ShoppingCheckoutPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShoppingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/checkout" element={<ShoppingCheckoutPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/thanku" element={<ThankYouPage />} />
      </Route>
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
