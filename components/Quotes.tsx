import React from 'react';
import { Quote } from 'lucide-react';
import { QUOTES } from '../constants';

const Quotes: React.FC = () => {
  return (
    <section className="px-6 md:px-12 mt-20 md:mt-28 mb-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {QUOTES.map((quote, index) => (
          <div 
            key={index}
            className="relative bg-white/50 p-8 md:p-10 rounded-lg border-2 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
            style={{ 
              boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.1)',
              transform: index === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'
            }}
          >
            {/* Quote Icon */}
            <Quote className="w-10 h-10 text-yellow-400 mb-4 opacity-50" />
            
            {/* Quote Text */}
            <blockquote className="font-hand text-xl md:text-2xl leading-relaxed text-gray-800 mb-6">
              {quote.text}
            </blockquote>
            
            {/* Author */}
            <p className="font-hand text-lg text-gray-600 text-right">
              — {quote.author}
            </p>

            {/* Decorative element */}
            <div 
              className="absolute -bottom-2 -right-2 w-16 h-16 bg-yellow-200 rounded-full -z-10 opacity-50"
              style={{
                filter: 'blur(20px)'
              }}
            />
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default Quotes;
