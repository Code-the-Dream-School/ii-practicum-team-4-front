import { Link } from "react-router-dom";

const AccountPage = () => {
    return (
        <div className="account">
            <h1>Account </h1>
            <Link to="/">Home </Link>
            <Link to="/sign-in">Sign In </Link>
            <Link to="/order-history">Order History </Link>
        </div>
    )
}

export default AccountPage;