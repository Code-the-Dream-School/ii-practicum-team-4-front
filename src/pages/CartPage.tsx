import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <Link to="/">Home </Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/thanku">Thank You </Link>
    </div>
  );
};

export default CartPage;
