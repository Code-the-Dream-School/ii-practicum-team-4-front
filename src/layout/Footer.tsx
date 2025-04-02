import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

// interface for social media links
interface SocialLink {
    name: string;
    url: string;
    icon: React.ReactNode;
}

// interface for Footer props
interface FooterProps {
    brandLogo:string;
    socialLinks: SocialLink[];
}

const currentYear = new Date().getFullYear();

const Footer: React.FC<FooterProps> = ({ brandLogo, socialLinks }) => {
    return (
        <footer className='bg-yellow-500 text-primary py-8'>
            <div className=''>
                <div className=''>
                    {/* Brand section */}
                    <div>
                        <img src={brandLogo} alt="Farm2You Logo" className=''/>
                        <p className=''>
                            Enjoy fresh, local produce delivered straight from our farm to your table
                        </p>
                    </div>
                    {/* Navigation links */}
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

                    {/* Social Media Links */}
                    <div className=''>
                        <h3 className=''>Follow Us</h3>
                        <div className=''>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className=''
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Newsletter section
                    <div className=''>
                        <h3>Subscribe to our Newsletter</h3>
                        <p>Get the latest updates on fresh farm produce and discounts.</p>
                        <input type="email" placeholder="Enter your email" className='' />
                        <button className=''>Subscribe</button>
                    </div> */}
                </div>
                {/* Bottom section */}
                    <div className=''>
                        <p>&copy; {currentYear} Farm2You. All Rights Reserved.</p>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;