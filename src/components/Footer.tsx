// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../utils/contactData';
// Import contact details

const Footer = () => {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Brittney Thomas</h3>
            <div className="space-y-2">
              {contactInfo.map((item, index) => (
                <p key={index} className="flex items-center">
                  {item.icon}
                  {item.link ? (
                    <a href={item.link} className="ml-2 hover:text-sage">
                      {item.description}
                    </a>
                  ) : (
                    <span className="ml-2">{item.description}</span>
                  )}
                </p>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sage">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sage">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sage">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-sage">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-sage">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sage">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Expertise Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Expertise Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio?category=adventure" className="hover:text-sage">
                  Outdoor Adventure
                </Link>
              </li>
              <li>
                <Link to="/portfolio?category=gardening" className="hover:text-sage">
                  Gardening & Horticulture
                </Link>
              </li>
              <li>
                <Link to="/portfolio?category=homesteading" className="hover:text-sage">
                  Homesteading
                </Link>
              </li>
              <li>
                <Link to="/portfolio?category=sustainable" className="hover:text-sage">
                  Sustainable Living
                </Link>
              </li>
              <li>
                <Link to="/portfolio?category=travel" className="hover:text-sage">
                  Travel Writing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Brittney Thomas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;