import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects'; // Mapped from 'Research' nav
import { Publications } from './components/sections/Publications';
import { Talks } from './components/sections/Talks';
import { Contact } from './components/sections/Contact';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigate={setActiveTab} />;
      case 'research':
        return <Projects />;
      case 'publications':
        return <Publications />;
      case 'talks':
        return <Talks />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <Navigation activeTab={activeTab} onNavigate={setActiveTab} />
      
      <main className="flex-grow w-full">
        <div className="animate-in fade-in duration-500 slide-in-from-bottom-2">
          {renderContent()}
        </div>
      </main>

      <footer className="py-8 text-center text-gray-400 text-sm font-hand">
        © {new Date().getFullYear()} Menan.
      </footer>
    </div>
  );
};

export default App;