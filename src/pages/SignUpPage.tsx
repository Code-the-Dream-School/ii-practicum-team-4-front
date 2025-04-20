import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import InputWithLabel from '../components/InputWithLabel';
import Button from '../components/Button';
import basket from '../assets/images/basket.png';

const SignUpPage = () => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const { setUserSession } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event: {
    // eslint-disable-next-line no-unused-vars
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // validation
    if (
      !formData.fullname ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullname,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // const message = `Error has ocurred: ${response.status}`;
        console.error(`Login failed: ${errorData.message || 'Unknown error'}`);
        alert(`Login failed: ${errorData.message || 'Unknown error'}`);
        // throw new Error(message);
        return;
      }

      const data = await response.json();
      const { token } = data;

      setUserSession({ token });

      navigate('/account');
    } catch (error) {
      let errorMessage = 'Failed to register';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error(errorMessage);
    }
  };

  return (
    <div className="bg-background mb-20">
      <img src={basket} alt="Veggie Basket" className="mx-auto" />
      <form
        className="bg-form-light text-primary mx-4 h-auto w-auto rounded-3xl px-6 py-12 md:mx-auto md:w-2/3 md:py-20"
        onSubmit={handleSubmit}
      >
        <h1 className="text-primary font-heading weight-700 px-2 py-4 text-center text-4xl">
          {' '}
          Create Account
        </h1>
        <div className="md:mx-20 md:flex md:flex-row md:gap-4">
          <InputWithLabel
            id="fullname"
            label="NAME"
            value={formData.fullname}
            name={'fullname'}
            placeholder="Enter your name"
            type="text"
            onChange={handleChange}
          />
          <InputWithLabel
            id="email"
            label="EMAIL"
            value={formData.email}
            name={'email'}
            placeholder="Enter your email"
            type="email"
            onChange={handleChange}
          ></InputWithLabel>
        </div>
        <div className="md:mx-20 md:flex md:flex-row md:gap-4">
          <InputWithLabel
            id="password"
            label="PASSWORD"
            value={formData.password}
            name={'password'}
            placeholder="Enter password"
            type="password"
            onChange={handleChange}
          ></InputWithLabel>
          <InputWithLabel
            id="confirmPassword"
            label="CONFIRM PASSWORD"
            value={formData.confirmPassword}
            name={'confirmPassword'}
            placeholder="Enter password"
            type="password"
            onChange={handleChange}
          ></InputWithLabel>
        </div>
        <p className="mb-5 text-left md:mb-8 md:pl-20">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
            className="peer bg-background focus:ring-error checked:bg-background relative mt-1 h-6 w-6 shrink-0 appearance-none rounded-sm border-2 border-orange-500/50 align-bottom checked:border-orange-500 focus:ring-1 focus:ring-offset-0 focus:outline-none"
          />{' '}
          I agree to the{' '}
          <Link
            to="/"
            target="_self"
            className="text-error weight-700 underline hover:opacity-80"
          >
            Terms And Conditions
          </Link>
        </p>

        <div className="pb-5 text-center">
          <Button type="submit" text="Sign Up" />
          <p className="mt-4 text-center">
            Already have an account{' '}
            <Link
              to="/sign-in"
              target="_self"
              className="text-error weight-700 underline hover:opacity-80"
            >
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
