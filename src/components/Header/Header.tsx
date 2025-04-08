import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CloseIcon } from './Close';
import { HamburgerIcon } from './Hamburger';
import { UserIcon } from './User';
import { CartIcon } from './Cart';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-background bg-primary px-4 py-2 rounded-4xl'
      : 'hover:text-primary transition-colors';

  return (
    <div className="bg-background h-screen">
      {/* off-screen menu */}
      <div
        className={`${
          activeMenu ? 'right-0' : '-right-[400px]'
        } bg-background absolute top-0 h-screen w-full max-w-[400px] duration-500 md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end px-5 pt-5 pb-0">
          <button onClick={() => setActiveMenu(false)}>
            <CloseIcon className="text-primary h-6 w-6" />
          </button>
        </div>

        <ul className="text-success mt-2 p-5 text-center text-2xl font-semibold">
          <li className="mx-0 my-5">
            <NavLink className={navLinkClasses} to="/">
              HOME
            </NavLink>
          </li>
          <li className="mx-0 my-5">
            <NavLink className={navLinkClasses} to="/about">
              ABOUT
            </NavLink>
          </li>
          <li className="mx-0 my-5">
            <NavLink className={navLinkClasses} to="/shop">
              SHOP
            </NavLink>
          </li>
        </ul>
        <div className="mt-1 flex justify-center gap-8">
          <div>
            <NavLink to="/account">
              <UserIcon className="h-6 w-6" />
            </NavLink>
          </div>
          <div>
            <NavLink to="/cart">
              <CartIcon className="h-6 w-6" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Header */}
      <nav className="bg-background flex w-full justify-evenly py-6 md:p-6">
        <h3 className="text-primary h-10 font-serif text-4xl font-[550] pr-26 md:ml-12 md:mr-15">
          Farm2You
        </h3>


        {/* Inline menu for Desktop */}
        <ul className="text-success hidden items-center gap-x-12 text-lg font-medium m-auto md:flex">
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
        <div className="hidden md:flex ml-auto mr-12 gap-8">
          <button>
            <NavLink to="/account">
              <UserIcon className="h-6 w-6" />
            </NavLink>
          </button>
          <button>
            <NavLink to="/cart">
              <CartIcon className="h-6 w-6" />
            </NavLink>
          </button>
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        {!activeMenu && (
          <button
            onClick={() => setActiveMenu(true)}
            className="h-10 cursor-pointer md:hidden"
          >
            <HamburgerIcon className="text-primary h-6 w-7" />
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
