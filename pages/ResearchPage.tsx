import React from 'react';
import Header from '../components/Header';
import { BookOpen } from 'lucide-react';
import { RESEARCH_OVERVIEW, PROJECTS, COLLABORATIONS } from '../researchData';

const ResearchPage: React.FC = () => {
  const getColorClasses = (theme: string) => {
    const colors = {
      yellow: { bg: 'from-white to-yellow-50', tag: 'bg-yellow-200' },
      green: { bg: 'from-white to-green-50', tag: 'bg-green-200' },
      blue: { bg: 'from-white to-blue-50', tag: 'bg-blue-200' },
      purple: { bg: 'from-white to-purple-50', tag: 'bg-purple-200' }
    };
    return colors[theme as keyof typeof colors] || colors.yellow;
  };
  return (
    <div className="min-h-screen bg-cream selection:bg-yellow-200 w-full">
      <Header />
      
      <main className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-hand font-bold mb-4">Research</h1>
          <div className="w-24 h-1 bg-black" style={{ 
            borderRadius: '100px',
            transform: 'rotate(-1deg)' 
          }} />
        </div>

        {/* Research Overview */}
        <section className="mb-20">
          <div className="bg-white/50 border-l-4 border-black p-8 rounded-md" style={{
            boxShadow: '10px 10px 0px 0px rgba(0,0,0,0.08)'
          }}>
            <h2 className="text-3xl font-hand font-bold mb-6 flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-blue-500" />
              Research Focus
            </h2>
            <p className="font-hand text-xl text-gray-700 leading-relaxed mb-4">
              {RESEARCH_OVERVIEW.focus}
            </p>
            <p className="font-hand text-lg text-gray-600 leading-relaxed">
              {RESEARCH_OVERVIEW.interests}
            </p>
          </div>
        </section>

        {/* Current Projects */}
        <section className="mb-20">
          <h2 className="text-4xl font-hand font-bold mb-10">Current Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {PROJECTS.map((project, index) => {
              const colors = getColorClasses(project.colorTheme);
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${colors.bg} p-8 rounded-xl border-2 border-black hover:translate-x-1 hover:translate-y-1 transition-transform`}
                  style={{ 
                    boxShadow: '12px 12px 0px 0px rgba(0,0,0,0.1)',
                    borderRadius: '16px'
                  }}
                >
                  <h3 className="font-hand text-2xl font-bold text-gray-800 mb-4">
                    {project.title}
                  </h3>
                  <p className="font-hand text-lg text-gray-700 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className={`px-3 py-1 ${colors.tag} text-gray-800 text-xs font-mono rounded-full`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* Collaborations */}
        <section className="mb-20">
          <h2 className="text-4xl font-hand font-bold mb-10">Collaborations & Partnerships</h2>
          
          <div className="bg-white/70 border-2 border-gray-300 p-8 rounded-lg" style={{
            boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.06)'
          }}>
            <p className="font-hand text-lg text-gray-700 leading-relaxed mb-6">
              I actively collaborate with researchers and institutions around the world. 
              Current partnerships include:
            </p>
            <ul className="space-y-3 font-hand text-lg text-gray-700">
              {COLLABORATIONS.map((collab, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">→</span>
                  <span>{collab.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      <footer className="py-12 text-center text-gray-400 font-hand text-sm">
        <p>&copy; {new Date().getFullYear()} Menan Velayutham. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResearchPage;
