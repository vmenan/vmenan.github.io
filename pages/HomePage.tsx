import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Quotes from '../components/Quotes';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream selection:bg-yellow-200 w-full">
      <Header />
      <main>
        <Hero />
        <Quotes />
      </main>
      
      <footer className="py-12 text-center text-gray-400 font-hand text-sm">
        <p>&copy; {new Date().getFullYear()} Menan Velayutham. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
