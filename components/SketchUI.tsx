import React from 'react';

interface SketchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const SketchButton: React.FC<SketchButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary',
  ...props 
}) => {
  const baseStyles = "font-hand text-xl px-6 py-2 transition-transform duration-200 active:scale-95 border-2 border-ink rounded-sm";
  const variants = {
    primary: `bg-ink text-paper hover:bg-charcoal hover:shadow-sketch`,
    secondary: `bg-transparent text-ink hover:bg-gray-100`
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

interface SketchCardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const SketchCard: React.FC<SketchCardProps> = ({ 
  children, 
  className = '', 
  noPadding = false
}) => {
  return (
    <div className={`
      bg-white
      sketch-border
      ${noPadding ? 'p-0' : 'p-8'} 
      ${className} 
    `}>
      {children}
    </div>
  );
};

export const SketchInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input 
      className="w-full bg-transparent border-b-2 border-ink px-2 py-2 font-hand text-xl focus:outline-none focus:border-charcoal placeholder-gray-400"
      {...props}
    />
  );
};