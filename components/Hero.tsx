import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-start gap-12 mt-12 md:mt-20 px-6 md:px-12 w-full">
      
      {/* Avatar Circle - Clean Organic Style */}
      <div className="flex-shrink-0 mx-auto md:mx-0 relative w-64 h-64 md:w-72 md:h-72">
        <div 
          className="w-full h-full border-[3px] border-black bg-gray-200 flex items-center justify-center overflow-hidden"
          style={{ 
            // Organic circle shape (slightly imperfect)
            borderRadius: '56% 44% 52% 48% / 52% 52% 48% 48%',
            transform: 'rotate(-2deg)',
            boxShadow: '12px 12px 0px 0px rgba(0,0,0,0.1)' 
          }}
        >
            {/* Placeholder Text */}
            <div className="font-hand text-7xl text-gray-500 opacity-70 select-none mt-2">
              MV
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-8 text-center md:text-left w-full">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-hand font-bold mb-2">{PROFILE.name}</h1>
            <p className="text-2xl font-hand text-gray-600">{PROFILE.role}</p>
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

        {/* Bottom Section: Actions (Left) and Quote (Right) */}
        <div className="flex flex-col lg:flex-row gap-10 w-full items-center lg:items-end">
          
          {/* Left Column: Socials & Buttons */}
          <div className="flex flex-col gap-6 shrink-0 lg:w-auto w-full items-center md:items-start">
             {/* Social Icons */}
            <div className="flex gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url}
                  className="text-gray-400 hover:text-black transition-colors"
                  aria-label={link.platform}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 font-hand text-lg w-full sm:w-auto">
              <button className="bg-gray-800 text-white px-8 py-3 rounded hover:bg-black transition-colors shadow-md whitespace-nowrap">
                Get in touch
              </button>
              <button className="border-2 border-black bg-transparent px-8 py-3 rounded hover:bg-gray-100 transition-colors whitespace-nowrap">
                View Research
              </button>
            </div>
          </div>

          {/* Right Column: Quote */}
          <div className="flex-1 w-full lg:pl-10 pb-2">
             <blockquote className="font-hand text-2xl md:text-3xl italic leading-tight text-gray-500 border-l-4 border-yellow-400 pl-6 py-2">
                {PROFILE.quote}
             </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;