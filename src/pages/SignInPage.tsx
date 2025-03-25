import { Link } from "react-router-dom";

const SignInPage = () => {
    return (
        <div className="sign-in">
            <h1>Sign In</h1>
            <Link to="/">Home </Link>
            <Link to="/sign-up">Sign Up </Link>
        </div>
    )
}

export default SignInPage;