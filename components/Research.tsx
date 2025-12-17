import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section className="px-6 md:px-12 mt-24 md:mt-32 mb-20 w-full">
      <div className="flex items-center gap-2 mb-8 border-b-2 border-gray-100 pb-4">
        <BookOpen className="w-6 h-6 text-blue-500" />
        <h2 className="text-3xl font-hand font-bold">Research</h2>
      </div>

      {/* Research Interests */}
      <div className="mb-16">
        <h3 className="text-2xl font-hand font-bold mb-4 text-gray-800">Research Interests</h3>
        <p className="font-hand text-lg text-gray-700 leading-relaxed max-w-4xl">
          My research focuses on the intersection of Natural Language Processing and societal structures, 
          exploring how computational methods can be designed to respect and enhance human values.
        </p>
      </div>

      {/* Publications */}
      <div className="mb-16">
        <h3 className="text-2xl font-hand font-bold mb-8 text-gray-800">Publications</h3>
        <div className="space-y-8">
          
          {/* Publication Item */}
          <div 
            className="bg-white/50 border-l-4 border-black p-6 rounded-md shadow-sm hover:shadow-md transition-shadow"
            style={{ 
              boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.05)' 
            }}
          >
            <h4 className="font-hand text-xl font-bold text-gray-800 mb-2">
              Cognitive Density in Human-Computer Interaction
            </h4>
            <p className="font-mono text-sm text-gray-500 mb-3">
              CHI 2025 • October 2024
            </p>
            <p className="font-hand text-base text-gray-700 leading-relaxed mb-4">
              An exploration of how cognitive load affects user interaction patterns in modern interfaces.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 hover:text-blue-800 transition-colors"
            >
              VIEW PAPER <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Add more publication items here */}
          <div 
            className="bg-white/50 border-l-4 border-gray-300 p-6 rounded-md shadow-sm hover:shadow-md transition-shadow"
            style={{ 
              boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.05)' 
            }}
          >
            <h4 className="font-hand text-xl font-bold text-gray-800 mb-2">
              Your Publication Title Here
            </h4>
            <p className="font-mono text-sm text-gray-500 mb-3">
              Conference/Journal • Date
            </p>
            <p className="font-hand text-base text-gray-700 leading-relaxed mb-4">
              Brief description of your research paper or publication.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 font-mono text-xs text-blue-600 hover:text-blue-800 transition-colors"
            >
              VIEW PAPER <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>

      {/* Current Projects */}
      <div>
        <h3 className="text-2xl font-hand font-bold mb-8 text-gray-800">Current Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project Card */}
          <div 
            className="bg-white/70 p-6 rounded-lg border-2 border-black"
            style={{ 
              borderRadius: '8px',
              boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.1)' 
            }}
          >
            <h4 className="font-hand text-xl font-bold text-gray-800 mb-3">
              Ethical NLP Tools
            </h4>
            <p className="font-hand text-base text-gray-700 leading-relaxed">
              Developing frameworks for building NLP systems that prioritize human values and societal impact.
            </p>
          </div>

          {/* Add more project cards */}
          <div 
            className="bg-white/70 p-6 rounded-lg border-2 border-black"
            style={{ 
              borderRadius: '8px',
              boxShadow: '8px 8px 0px 0px rgba(0,0,0,0.1)' 
            }}
          >
            <h4 className="font-hand text-xl font-bold text-gray-800 mb-3">
              Your Project Title
            </h4>
            <p className="font-hand text-base text-gray-700 leading-relaxed">
              Brief description of your ongoing research project.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Research;
