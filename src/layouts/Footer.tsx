import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../assets/images/icons/fb.svg';
import ig from '../assets/images/icons/ig.svg';
import twitter from '../assets/images/icons/twitter.svg';
import logo from '../assets/images/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-success text-background px-5 py-8 md:px-[100px]">
      <div className="grid grid-cols-2 gap-7 [grid-template-areas:'logo_logo''links_links''schedule_social''copyright_copyright'] md:grid-cols-3 md:gap-4 md:[grid-template-areas:'logo_links_social''schedule_links_social''copyright_copyright_copyright']">
        <img src={logo} alt="Farm2You Logo" style={{ gridArea: 'logo' }} />

        <nav
          className="mt-2 flex flex-wrap text-sm font-medium md:justify-center"
          style={{ gridArea: 'links' }}
        >
          <div className="flex items-center gap-6 md:flex-col">
            <div className="flex gap-4 self-baseline">
              <Link to="/" className="hover:underline">
                HOME
              </Link>
              <Link to="/" className="hover:underline">
                ABOUT
              </Link>
            </div>
            <div className="flex gap-4 self-baseline">
              <Link to="/" className="hover:underline">
                SHOP
              </Link>
              <Link to="/" className="hover:underline">
                CONTACT
              </Link>
            </div>
          </div>
        </nav>

        <div style={{ gridArea: 'schedule' }}>
          <p>Mon–Fri: 9 AM – 6 PM</p>
          <p>Sat: 10 AM – 4 PM</p>
          <p>Sun: Taking a break!</p>
        </div>
        <div className="flex md:justify-end" style={{ gridArea: 'social' }}>
          <div className="flex flex-col items-baseline">
            <p className="mb-2">
              <a href="mailto:example@gmail.com" className="hover:underline">
                example@gmail.com
              </a>
            </p>
            <p>(000) 000-0000</p>
            <p className="mb-2">(000) 000-0000</p>
            <div className="mb-4 flex items-center gap-4 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <img src={fb} alt="Facebook" className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <img src={twitter} alt="Twitter" className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <img src={ig} alt="Instagram" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-xs" style={{ gridArea: 'copyright' }}>
          &copy; 2025 Farm2You. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;