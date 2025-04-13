import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InputWithLabel from '../components/InputWithLabel';
import Button from '../components/Button';
import basket from '../components/assets/images/icons/basket.png';

const SignUpPage = () => {
  const [fullname, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="bg-background h-screen">
      <img src={basket} alt="Veggie Basket" className="mx-auto" />
      <form
        className="bg-form-light text-primary mx-4 h-auto w-auto rounded-3xl md:mx-auto md:w-2/3 md:py-20"
        onSubmit={handleSubmit}
      >
        <h1 className="text-primary font-display weight-700 px-2 py-4 text-center text-4xl">
          {' '}
          Create Account
        </h1>
        <div className="md:mx-30 md:flex md:flex-row md:gap-4">
          <InputWithLabel
            id="fullname"
            label="NAME"
            value={fullname}
            placeholder="Enter your name"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputWithLabel
            id="fullname"
            label="EMAIL"
            value={email}
            placeholder="Enter your email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          ></InputWithLabel>
        </div>
        <div className="md:mx-30 md:flex md:flex-row md:gap-4">
          <InputWithLabel
            id="fullname"
            label="PASSWORD"
            value={password}
            placeholder="Enter password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></InputWithLabel>
          <InputWithLabel
            id="fullname"
            label="CONFIRM PASSWORD"
            value={confirmPassword}
            placeholder="Enter password"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></InputWithLabel>
        </div>
        <p className="mb-5 text-center md:mb-8 md:pl-30 md:text-left">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
            className="peer bg-background focus:ring-error checked:bg-background relative mt-1 h-6 w-6 shrink-0 appearance-none rounded-sm border-2 border-orange-500/50 align-bottom checked:border-orange-500 focus:ring-1 focus:ring-offset-0 focus:outline-none"
          />{' '}
          I agree to the{' '}
          <a
            href="#"
            target="_self"
            className="text-error weight-700 underline hover:opacity-80"
          >
            Terms And Conditions
          </a>
        </p>

        <div className="pb-5 text-center">
          <Button text="Sign Up" />
          <p className="mt-4 text-center">
            Already have an account{' '}
            <NavLink
              to="/sign-in"
              target="_self"
              className="text-error weight-700 underline hover:opacity-80"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
