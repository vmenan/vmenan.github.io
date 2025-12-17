import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between font-hand text-lg md:text-xl">
      <Link to="/" className="text-2xl font-bold tracking-wide hover:text-gray-700 transition-colors">
        Menan.
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-gray-600">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`hover:text-black transition-colors ${location.pathname === item.href ? 'text-black hand-underline' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 right-6 bg-cream shadow-lg md:hidden flex flex-col items-end py-6 px-6 space-y-4 z-50 border-2 border-black rounded-lg">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`hover:text-black transition-colors ${location.pathname === item.href ? 'text-black font-bold' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;