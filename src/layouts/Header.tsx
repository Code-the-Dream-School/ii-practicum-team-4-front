import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import burger from '../assets/images/icons/burger.svg';
import close from '../assets/images/icons/close.svg';
import cart from '../assets/images/icons/cart.svg';
import user from '../assets/images/icons/user.svg';
import logo from '../assets/images/icons/logo.svg';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = activeMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeMenu]);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-background bg-primary px-4 py-2 rounded-4xl'
      : 'hover:text-primary transition-colors';

  return (
    <div className="bg-background sticky top-0">
      {/* off-screen menu */}
      <div
        className={`bg-background fixed top-0 left-0 ${activeMenu ? 'translate-x-0' : '-translate-x-full'} h-screen w-[400px] transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end px-5 pt-5 pb-0">
          <button onClick={() => setActiveMenu(false)}>
            <img
              src={close}
              alt="Close Icon"
              className="text-primary h-6 w-6"
            />
          </button>
        </div>

        <ul className="text-success mt-2 p-5 text-center text-2xl font-semibold">
          <li onClick={() => setActiveMenu(false)} className="mx-0 my-5">
            <NavLink className={navLinkClasses} to="/">
              HOME
            </NavLink>
          </li>
          <li className="mx-0 my-5">
            <NavLink
              onClick={() => setActiveMenu(false)}
              className={navLinkClasses}
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li className="mx-0 my-5">
            <NavLink
              onClick={() => setActiveMenu(false)}
              className={navLinkClasses}
              to="/shop"
            >
              SHOP
            </NavLink>
          </li>
        </ul>
        <div className="mt-1 flex justify-center gap-8">
          <button onClick={() => setActiveMenu(false)}>
            <NavLink to="/account">
              <img src={user} alt="User Icon" className="h-6 w-6" />
            </NavLink>
          </button>
          <button onClick={() => setActiveMenu(false)}>
            <NavLink to="/cart">
              <img src={cart} alt="Cart Icon" className="h-6 w-6" />
            </NavLink>
          </button>
        </div>
      </div>

      {/* Header */}
      <nav className="bg-background flex w-full justify-evenly py-6 md:p-6">
        <NavLink to="/" className="pt-2 pr-26 md:mr-15 md:ml-12">
          <img src={logo} alt="Logo" />
        </NavLink>

        {/* Inline menu for Desktop */}
        <ul className="text-success m-auto hidden items-center gap-x-12 text-lg font-medium md:flex">
          <li>
            <NavLink className={navLinkClasses} to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClasses} to="/about">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink className={navLinkClasses} to="/shop">
              SHOP
            </NavLink>
          </li>
        </ul>

        {/** Cart and User buttons for Desktop navigation */}
        <div className="mr-12 ml-auto hidden gap-8 md:flex">
          <button>
            <NavLink to="/account">
              <img src={user} alt="User Icon" className="h-6 w-6" />
            </NavLink>
          </button>
          <button>
            <NavLink to="/cart">
              <img src={cart} alt="Cart Icon" className="h-6 w-6" />
            </NavLink>
          </button>
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        {!activeMenu && (
          <button
            onClick={() => setActiveMenu(true)}
            className="h-10 cursor-pointer md:hidden"
          >
            <img
              src={burger}
              alt="Hamburger Icon"
              className="text-primary h-6 w-7"
            />
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
