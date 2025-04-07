import { NavLink } from 'react-router-dom';
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-background bg-primary px-4 py-2 rounded-4xl"
    : "hover:text-primary transition-colors";

  return (
      <div className="h-screen bg-background">
      {/* off-screen menu */}
        <div
          className={`${
            activeMenu ? "right-0" : "-right-[400px]"
          } h-screen w-full max-w-[400px] bg-background absolute top-0 duration-500 md:hidden`}
        >
          <ul className="text-success p-5 text-2xl font-semibold mt-20 text-center">
            <li><NavLink className= {navLinkClasses} to="/">HOME</NavLink></li>
            <li><NavLink className= {navLinkClasses} to="/about">ABOUT</NavLink></li>
            <li><NavLink className= {navLinkClasses} to="/shop">SHOP</NavLink></li> 
            <li><NavLink to="/account"><FontAwesomeIcon icon={faUser} className="text-primary" /></NavLink></li>
            <li><NavLink to="/cart"><FontAwesomeIcon icon={faCartShopping} className="text-primary"/></NavLink></li>
          </ul>
        </div>
        
        {/* Header */}
        <nav className="w-full bg-background p-6 flex justify-evenly">
          <h3 className="text-4xl font-[550] font-serif text-primary w-159 h-24">Farm2You</h3>

          {/* Inline menu for md+ */}
          <ul className="hidden md:flex gap-x-8 text-success text-lg font-medium items-center">
            <li><NavLink className= {navLinkClasses} to="/">HOME</NavLink></li>
            <li><NavLink className= {navLinkClasses} to="/about">ABOUT</NavLink></li>
            <li><NavLink className= {navLinkClasses} to="/shop">SHOP</NavLink></li> 
            <li><NavLink to="/account"><FontAwesomeIcon icon={faUser} className="text-primary" /></NavLink></li>
            <li><NavLink to="/cart"><FontAwesomeIcon icon={faCartShopping} className="text-primary"/></NavLink></li>
          </ul>

          {/* Hamburger icon (mobile only) */}
          <div
            onClick={() => {
              setActiveMenu(!activeMenu);
            }}
            className={`${activeMenu && "active"} ham-menu md:hidden`}
          >
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </div>
        </nav>
    </div>
  );
};
  
  export default Header;


