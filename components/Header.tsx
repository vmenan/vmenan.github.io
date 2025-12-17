import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 px-6 md:px-12 flex items-center justify-between font-hand text-lg md:text-xl">
      <div className="text-2xl font-bold tracking-wide">
        Menan.
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8 text-gray-600">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`hover:text-black transition-colors ${item.isActive ? 'text-black hand-underline' : ''}`}
          >
            {item.label}
          </a>
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
        <div className="absolute top-20 left-0 w-full bg-cream shadow-lg md:hidden flex flex-col items-center py-6 space-y-4 z-50">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`hover:text-black transition-colors ${item.isActive ? 'text-black font-bold' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;