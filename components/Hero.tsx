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
          <div className="bg-white/50 p-4 rounded-md border-l-4 border-black font-mono text-sm md:text-base text-gray-700 shadow-sm text-left w-full">
            <div className="whitespace-pre overflow-x-auto leading-relaxed scrollbar-hide">
              {PROFILE.path}
            </div>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl font-hand leading-relaxed text-gray-800 pt-2 max-w-4xl">
            {PROFILE.bio}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;