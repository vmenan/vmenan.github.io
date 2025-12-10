import React from 'react';
import { Tool } from '../../types';
import { Github } from 'lucide-react';

const TOOLS: Tool[] = [
  {
    id: 't1',
    name: "NeuroViz",
    description: "Visualizing neural network activation patterns in real-time using WebGL.",
    language: "Python",
    stars: 142,
    url: "#",
    icon: "box"
  },
  {
    id: 't2',
    name: "UrbanScraper",
    description: "CLI tool for aggregating open municipal data.",
    language: "Rust",
    stars: 89,
    url: "#",
    icon: "terminal"
  },
  {
    id: 't3',
    name: "EthicCheck",
    description: "Library for auditing UI accessibility and inclusivity compliance.",
    language: "TypeScript",
    stars: 205,
    url: "#",
    icon: "code"
  }
];

export const SoftwareTools: React.FC = () => {
  return (
    <div className="py-12 max-w-6xl mx-auto px-6">
       <h2 className="font-hand text-4xl md:text-5xl mb-12 border-b-2 border-ink inline-block pb-2">Software Tools</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TOOLS.map((tool) => (
          <div key={tool.id} className="border-2 border-gray-100 p-6 hover:border-ink transition-colors duration-300 rounded-sm">
             <div className="flex justify-between items-start mb-4">
                 <h4 className="font-hand text-2xl font-bold">{tool.name}</h4>
                 <Github size={20} className="text-gray-400" />
             </div>
             <p className="text-sm text-gray-600 mb-4 min-h-[60px]">
               {tool.description}
             </p>
             <div className="flex justify-between items-center text-xs uppercase tracking-widest font-bold text-gray-400">
                <span>{tool.language}</span>
                <span>{tool.stars} Stars</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};