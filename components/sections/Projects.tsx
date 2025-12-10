import React from 'react';
import { Project } from '../../types';
import { SketchCard } from '../SketchUI';
import { ArrowUpRight } from 'lucide-react';

const SAMPLE_RESEARCH: Project[] = [
  {
    id: 1,
    title: "Cognitive Patterns in Digital Interfaces",
    description: "Investigating the relationship between digital interface density and user cognitive load through longitudinal studies.",
    tags: ["HCI", "Psychology", "Thesis"],
    imageUrl: "https://picsum.photos/800/600?grayscale&random=1"
  },
  {
    id: 2,
    title: "Urban Data Ecology",
    description: "A study on how smart city sensors impact local community behavior and the ethics of surveillance in public spaces.",
    tags: ["Urban Planning", "Sociology"],
    imageUrl: "https://picsum.photos/800/600?grayscale&random=2"
  },
  {
    id: 3,
    title: "The Ethics of Automation",
    description: "A framework for evaluating the ethical implications of automated decision-making in healthcare triage systems.",
    tags: ["Ethics", "AI", "Healthcare"],
    imageUrl: "https://picsum.photos/800/600?grayscale&random=3"
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="py-12 max-w-6xl mx-auto px-6">
      <h2 className="font-hand text-4xl md:text-5xl mb-12 border-b-2 border-ink inline-block pb-2">Selected Research</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SAMPLE_RESEARCH.map((item) => (
          <SketchCard key={item.id} className="group transition-all hover:shadow-lg cursor-pointer h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
               <h3 className="font-hand text-3xl font-bold group-hover:underline decoration-2 underline-offset-4">
                 {item.title}
               </h3>
               <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map(tag => (
                <span key={tag} className="text-xs uppercase tracking-widest font-bold border border-gray-300 px-2 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </SketchCard>
        ))}
      </div>
    </div>
  );
};