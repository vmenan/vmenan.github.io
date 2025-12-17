import React from 'react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-start gap-12 mt-12 md:mt-20 px-6 md:px-12 w-full">
      
      {/* Avatar Circle - Hand-drawn Organic Style */}
      <div className="flex-shrink-0 mx-auto md:mx-0 relative">
        <div className="relative w-64 h-64 md:w-72 md:h-72">
          <div 
            className="w-full h-full border-[4px] border-black bg-gray-200 flex items-center justify-center overflow-hidden"
            style={{ 
              // Hand-drawn, balanced organic circle
              borderRadius: '54% 46% 52% 48% / 48% 54% 46% 52%',
              transform: 'rotate(-3deg)',
              boxShadow: '10px 12px 0px 0px rgba(0,0,0,0.1)',
              // Slightly imperfect border for hand-drawn effect
              border: '3.5px solid black',
            }}
          >
            {/* Profile Picture */}
            <img 
              src={`${import.meta.env.BASE_URL}IMG-20251001-WA0014.jpg`}
              alt={PROFILE.name}
              className="w-full h-full object-cover"
              style={{
                filter: 'contrast(1.05) saturate(0.9)',
                transform: 'rotate(2deg)',
                objectPosition: 'center 20%',
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-8 text-center md:text-left w-full">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-hand font-bold mb-2">{PROFILE.name}</h1>
            <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
              <p className="text-2xl font-hand text-gray-600">{PROFILE.role}</p>
              {PROFILE.badge && (
                <>
                  <span className="text-gray-400">|</span>
                  <a 
                    href={PROFILE.badge.credlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-hand font-bold border-2 border-black hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                    style={{ boxShadow: '2px 2px 0px 0px rgba(0,0,0,0.2)' }}
                  >
                    🔥 PyTorch Ambassador
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Terminal / Path block */}
          <div 
            className="bg-gradient-to-br from-white to-yellow-50 border-2 border-black text-left inline-block overflow-hidden"
            style={{ 
              borderRadius: '10px',
              transform: 'rotate(-0.5deg)',
              boxShadow: '6px 6px 0px 0px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* macOS-style header */}
            <div className="bg-gradient-to-b from-yellow-100 to-yellow-50 px-3 py-2 flex items-center gap-2 border-b-2 border-black">
              <div className="w-3 h-3 rounded-full bg-red-400 border-2 border-black"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-black"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-black"></div>
              <span className="ml-2 text-xs text-gray-600 font-mono font-bold">terminal</span>
            </div>
            
            {/* Terminal content */}
            <div className="p-3 font-mono text-xs md:text-sm leading-relaxed">
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">$</span>
                <span className="text-teal-600 font-semibold">pwd</span>
              </div>
              <div className="text-purple-600 mt-1 whitespace-nowrap font-medium">
                {PROFILE.path.split('\n')[1]}
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl font-hand leading-relaxed text-gray-800 pt-2 max-w-4xl">
            {(() => {
              let bioText = typeof PROFILE.bio === 'string' ? PROFILE.bio : PROFILE.bio.text;
              const links = typeof PROFILE.bio === 'object' ? PROFILE.bio.links : {};
              
              const parts = [];
              let lastIndex = 0;
              
              Object.entries(links).forEach(([phrase, url]) => {
                const index = bioText.indexOf(phrase, lastIndex);
                if (index !== -1) {
                  parts.push(bioText.substring(lastIndex, index));
                  parts.push(
                    <a 
                      key={phrase}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 underline decoration-2 underline-offset-2 transition-colors"
                    >
                      {phrase}
                    </a>
                  );
                  lastIndex = index + phrase.length;
                }
              });
              
              parts.push(bioText.substring(lastIndex));
              return parts;
            })()}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;