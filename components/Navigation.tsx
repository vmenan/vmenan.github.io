import React, { useState } from 'react';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onNavigate: (path: string) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', path: 'home' },
  { label: 'Research', path: 'research' },
  { label: 'Publications', path: 'publications' },
  { label: 'Talks & Lectures', path: 'talks' },
  { label: 'Contact', path: 'contact' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-paper py-6 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')} 
          className="font-hand text-2xl md:text-3xl font-bold tracking-wide hover:opacity-70 transition-opacity"
        >
          Menan.
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`
                font-sans text-xl relative transition-colors duration-200
                ${activeTab === item.path ? 'text-ink font-bold' : 'text-gray-500 hover:text-ink'}
              `}
            >
              {item.label}
              {activeTab === item.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-ink rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-paper border-b border-ink absolute w-full px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                onNavigate(item.path);
                setIsOpen(false);
              }}
              className={`text-left font-sans text-2xl ${activeTab === item.path ? 'underline' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};