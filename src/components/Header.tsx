import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Education',
    path: '/education'
  }, {
    name: 'Experience',
    path: '/experience'
  }, {
    name: 'Skills',
    path: '/skills'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Blog',
    path: '/blog'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          Cynthia Joy
        </Link>
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map(item => <li key={item.name}>
                <Link to={item.path} className={`hover:text-[#0033CC] transition-colors ${location.pathname === item.path ? 'text-[#0033CC] font-medium' : ''}`}>
                  {item.name}
                </Link>
              </li>)}
          </ul>
        </nav>
      </div>
      {/* Mobile navigation */}
      {isMenuOpen && <nav className="md:hidden">
          <ul className="flex flex-col bg-white border-t border-gray-100">
            {navItems.map(item => <li key={item.name}>
                <Link to={item.path} className={`block px-4 py-3 hover:bg-gray-50 hover:text-[#0033CC] ${location.pathname === item.path ? 'text-[#0033CC] font-medium' : ''}`} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>)}
          </ul>
        </nav>}
    </header>;
}