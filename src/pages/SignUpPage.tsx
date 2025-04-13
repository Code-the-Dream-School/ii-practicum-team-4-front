import { useState } from 'react';
import InputWithLabel from '../components/InputWithLabel';
import basket from '../components/assets/images/icons/basket.svg';
import Button from '../components/Button';
import vector from '../components/assets/images/icons/vector.svg';
import { NavLink } from 'react-router-dom';

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
        className="bg-form-light text-primary mx-4 h-auto w-auto rounded-3xl md:w-2/3 md:mx-auto md:py-20"
        onSubmit={handleSubmit}
      >
        <h1 className="text-primary font-display weight-700 px-2 py-4 text-center text-4xl">
          {' '}
          Create Account
        </h1>
        <div className="md:flex md:flex-row md:gap-4 md:mx-30">
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
        <div className="md:flex md:flex-row md:gap-4 md:mx-30">
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
        <p className="text-center mb-5 md:mb-8 md:text-left md:pl-30">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            required
            className="peer relative appearance-none shrink-0 w-6 h-6 border-2 border-orange-500/50 rounded-sm mt-1 bg-background
            focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-error align-bottom
            checked:bg-background checked:border-orange-500" 
          />{' '}
          I agree to the <a href="#" target="_self" className="text-error weight-700 underline hover:opacity-80">Terms And Conditions</a>
        </p>

        <div className="text-center pb-5">
          <Button text="Sign Up"/>
          <p className="text-center mt-4">Already have an account <NavLink to="/sign-in" target="_self" className="text-error weight-700 underline hover:opacity-80">Sign In</NavLink></p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
