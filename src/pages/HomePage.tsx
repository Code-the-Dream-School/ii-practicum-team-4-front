import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="text-3xl font-bold underline">Home Page</h1>
      <Link to="/shop">Shop </Link>
      <Link to="/about">About</Link>
      <Link to="/account">Account </Link>
      <Link to="/cart">Cart </Link>
    </div>
  );
};

export default HomePage;
