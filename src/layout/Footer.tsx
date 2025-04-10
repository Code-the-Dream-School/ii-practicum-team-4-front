import React from "react";
import fb from '../assets/images/icons/fb.svg';
import ig from  '../assets/images/icons/ig.svg';
import twitter from '../assets/images/icons/twitter.svg';
import logo from '../assets/images/logo.svg';

const currentYear = new Date().getFullYear();
const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-yellow-200 py-6 px-4 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-3">
            <img
                src={logo}
                alt="Farm2You Logo"
                className="w-10 h-10"
            />
          <span className="text-l font-semibold">
            <ul>
                <li>Mon-Fri: 9 AM - 6 PM</li>
                <li>Sat: 10 AM - 4 PM</li>
                <li>Sun: Taking a break!</li>
            </ul>
          </span>
        </div>
        <div className=''>
            <h3 className=''>Quick Links</h3>
            <ul className=''>
                <li>
                    <a href="/about" className=''>About Us</a>
                </li>
                <li>
                    <a href="/account" className=''>Account</a>
                </li>
                <li>
                    <a href="/checkout" className=''>Checkout</a>
                </li>
                <li>
                    <a href="/shop" className=''>Shop Now</a>
                </li>
            </ul>
        </div>
        <span className="text-l font-semibold">
            <ul>
                <li>example@gmail.com</li>
                <li>000-000-0000</li>
                <li>000-000-0000</li>
            </ul>
          </span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <img
              src={fb}
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <img
              src={twitter}
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <img
              src={ig}
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
      <div className="text-center mt-4 text-sm">
        <p>&copy; {currentYear} Farm2You. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;