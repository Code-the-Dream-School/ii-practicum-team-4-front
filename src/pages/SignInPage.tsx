import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputWithLabel from '../components/InputWithLabel';
import Button from '../components/Button';
import basket from '../assets/images/basket.png';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="bg-background mb-20">
      <img src={basket} alt="Veggie Basket" className="mx-auto" />
      <form
        className="bg-form-light text-primary mx-4 h-auto w-auto rounded-3xl px-6 py-12 md:mx-auto md:w-1/3"
        onSubmit={handleSubmit}
      >
        <h1 className="text-primary font-heading weight-700 pb-4 text-center text-4xl">
          {' '}
          Sign In
        </h1>
        <div className="">
          <InputWithLabel
            id="email"
            label="EMAIL"
            value={formData.email}
            name={'email'}
            placeholder="Enter your email"
            type="email"
            onChange={handleChange}
          />
          <InputWithLabel
            id="password"
            label="PASSWORD"
            value={formData.password}
            name={'password'}
            placeholder="Enter password"
            type="password"
            onChange={handleChange}
          ></InputWithLabel>
        </div>
        <p className="mb-15 pl-8 text-left md:pl-10">
          <Link
            to="/"
            className="text-error weight-700 underline hover:opacity-80"
          >
            Forgot password?
          </Link>
        </p>
        <div className="text-center">
          <Button text="Sign In" />
          <p className="mt-4 text-center">
            Don&apos;t have an account{' '}
            <Link
              to="/sign-up"
              target="_self"
              className="text-error weight-700 underline hover:opacity-80"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
