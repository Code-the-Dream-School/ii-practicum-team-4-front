import React from "react";

const currentYear = new Date().getFullYear();
const Footer: React.FC = () => {
  return (
    <footer className="bg-green/700 text-primary py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
       
        <div className="flex items-center space-x-3">
            <img
                src={"../assets/images/Logo.svg"}
                alt="Farm2You Logo"
                className="w-12 h-12"
            />
          <span className="text-2xl font-semibold">
            <ul>
                <li>Mon-Fri: 9 AM - 6 PM</li>
                <li>Sat: 10 AM - 4 PM</li>
                <li>Sun: Taking a break!</li>
            </ul>
          </span>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <img
              src={"../assets/icons/Social Icons.svg"}
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
              src={"../assets/icons/Social Icons-twitter.svg"}
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
              src={"../assets/icons/Social Iconsinstagram.svg"}
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