import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import InputWithLabel from '../components/InputWithLabel';
import Button from '../components/Button';
import basket from '../assets/images/basket.png';

const SignInPage = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setUserSession } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validation
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill in both fields.');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // const message = `Error has ocurred: ${response.status}`;
        setErrorMessage(errorData.msg || 'Sign in failed. Please try again.');
        console.error(`Login failed: ${errorData.msg || 'Unknown error'}`);
        // throw new Error(message);
        return;
      }

      const data = await response.json();
      const { token } = data;

      setUserSession({ token });

      navigate('/account');
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : 'Failed to sign in';
      setErrorMessage(errorMsg);
      console.error(errorMsg);
    }
  };

  return (
    <div className="bg-background mb-20">
      <img src={basket} alt="Veggie Basket" className="mx-auto" />
      <form
        className="bg-form-light text-primary mx-4 h-auto w-auto rounded-3xl px-6 py-8 md:mx-auto md:w-1/3 lg:px-15 lg:pt-13 lg:pb-20"
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
            // value={(formData.email = 'test@test.com')}
            value={formData.email}
            name={'email'}
            placeholder="Enter your email"
            type="email"
            onChange={handleChange}
          />
          <InputWithLabel
            id="password"
            label="PASSWORD"
            // value={(formData.password = 'testtest')}
            value={formData.password}
            name={'password'}
            placeholder="Enter password"
            type="password"
            onChange={handleChange}
          ></InputWithLabel>
        </div>
        {errorMessage && <p className="text-error">{errorMessage}</p>}
        <p className="mb-15">
          <Link
            to="/"
            className="text-error font-subtext weight-700 text-left underline hover:opacity-80"
          >
            Forgot password?
          </Link>
        </p>
        <div className="text-center">
          <Button type="submit" text="Sign In" />
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
