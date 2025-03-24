import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <Link to="/about">About Us </Link>
            <Link to="/contact">Contact </Link>
            <Link to="/faq">FAQs </Link>
            <Link to="/products">Products </Link>
            <Link to="/produce-category">Produce Category </Link>
            <Link to="/cart">Cart </Link>
            <Link to="/checkout">Checkout</Link>
        </div>
    )
}

export default HomePage;