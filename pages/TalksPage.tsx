import React from 'react';
import Header from '../components/Header';
import { Construction } from 'lucide-react';

const TalksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream selection:bg-yellow-200 w-full">
      <Header />
      
      <main className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
        
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-hand font-bold mb-4">Talks & Lectures</h1>
          <div className="w-24 h-1 bg-black" style={{ 
            borderRadius: '100px',
            transform: 'rotate(-1deg)' 
          }} />
        </div>

        {/* Under Construction Card */}
        <div 
          className="bg-gradient-to-br from-white to-yellow-50 p-12 md:p-16 rounded-xl border-2 border-black text-center max-w-2xl mx-auto"
          style={{ 
            boxShadow: '12px 12px 0px 0px rgba(0,0,0,0.1)',
            transform: 'rotate(-1deg)'
          }}
        >
          <Construction className="w-20 h-20 text-gray-400 mx-auto mb-6" />
          
          <h2 className="text-4xl font-hand font-bold text-gray-800 mb-4">
            Under Construction
          </h2>
          
          <p className="font-hand text-xl text-gray-600 leading-relaxed">
            This section is currently being built. Check back soon for my talks, lectures, and presentations!
          </p>
          
          {/* Decorative elements */}
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>

      </main>

      <footer className="py-12 text-center text-gray-400 font-hand text-sm">
        <p>&copy; {new Date().getFullYear()} Menan Velayuthan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TalksPage;
