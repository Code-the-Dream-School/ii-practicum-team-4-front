import { useState } from 'react';
import InputWithLabel from '../components/InputWithLabel';
import basket from '../components/assets/images/icons/basket.svg';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="bg-background h-screen">
      <img src={basket} alt="Veggie Basket" className="mx-auto" />
      <form
        className="bg-form-light text-primary mx-4 h-auto w-auto rounded-3xl md:mx-auto md:mb-20 md:w-1/3 md:py-20"
        onSubmit={handleSubmit}
      >
        <h1 className="text-primary font-display weight-700 px-2 py-4 text-center text-4xl">
          {' '}
          Sign In
        </h1>
        <div>
          <InputWithLabel
            id="fullname"
            label="EMAIL"
            value={email}
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputWithLabel
            id="fullname"
            label="PASSWORD"
            value={password}
            placeholder="Enter password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></InputWithLabel>
        </div>
        <p className="mb-15 pl-8 text-left md:pl-10">
          <a
            href="#"
            target="_self"
            className="text-error weight-700 underline hover:opacity-80"
          >
            Forgot password?
          </a>
        </p>
        <div className="pb-15 text-center">
          <Button text="Sign In" />
          <p className="mt-4 text-center">
            Dont' have an account{' '}
            <NavLink
              to="/sign-up"
              target="_self"
              className="text-error weight-700 underline hover:opacity-80"
            >
              Sign Up
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
