
import React from 'react';
import { Publication } from '../../types';
import { FileText, ExternalLink, Quote } from 'lucide-react';
import { SketchButton } from '../SketchUI';

// Selected papers (High priority)
const SELECTED_PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: "Cognitive Load in Augmented Reality Interfaces",
    authors: "Menan, B. & Smith, J.",
    venue: "CHI 2024",
    year: 2024,
    abstract: "We investigate the relationship between information density in AR heads-up displays and user retention rates, proposing a new framework for 'calm' AR design.",
    tags: ["HCI", "AR/VR"],
    citationCount: 14
  },
  {
    id: 'p2',
    title: "Ethics of Autonomous Decision Making in Healthcare",
    authors: "Menan, B., Doe, A., & Ray, C.",
    venue: "FAccT 2023",
    year: 2023,
    abstract: "A critical review of algorithmic bias in patient triage systems, highlighting disparities in training data across three major hospital networks.",
    tags: ["Ethics", "AI"],
    citationCount: 42
  }
];

// Full list (Chronological)
const FULL_PUBLICATIONS: Publication[] = [
  ...SELECTED_PUBLICATIONS,
  {
    id: 'p3',
    title: "Urban Data Ecology: A Longitudinal Study",
    authors: "Menan, B.",
    venue: "CSCW 2022",
    year: 2022,
    tags: ["Urban Computing"],
    citationCount: 8
  },
  {
    id: 'p4',
    title: "Visualizing Neural Pathways in Real-Time",
    authors: "Lee, K. & Menan, B.",
    venue: "NeurIPS Workshop 2021",
    year: 2021,
    tags: ["Viz", "ML"],
    citationCount: 5
  },
  {
    id: 'p5',
    title: "The Sociology of Chatbots",
    authors: "Menan, B.",
    venue: "CHI Late-Breaking Work 2021",
    year: 2021,
    tags: ["NLP", "Sociology"],
    citationCount: 12
  }
];

export const Publications: React.FC = () => {
  return (
    <div className="py-12 max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="font-hand text-4xl md:text-6xl mb-4">Publications</h2>
          <p className="text-xl text-gray-500 max-w-2xl">
            My research spans Human-Computer Interaction, AI Ethics, and Urban Computing.
          </p>
        </div>
        
        <a 
          href="https://scholar.google.com/citations?user=8dn_dfcAAAAJ&hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <SketchButton variant="secondary" className="flex items-center gap-2 text-sm">
             <Quote size={16} /> Google Scholar Profile
          </SketchButton>
        </a>
      </div>
      
      {/* Selected Publications Section */}
      <div className="mb-20">
        <h3 className="font-hand text-2xl font-bold mb-8 border-b-2 border-ink inline-block pb-1">Selected Papers</h3>
        <div className="grid gap-8">
          {SELECTED_PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="border-2 border-ink p-6 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] transition-all bg-white">
              <div className="flex justify-between items-start mb-2">
                 <span className="font-mono text-xs font-bold text-gray-400 border border-gray-300 px-2 py-1 rounded-sm uppercase">
                   {pub.venue}
                 </span>
                 <span className="font-hand text-xl font-bold text-gray-400">{pub.year}</span>
              </div>
              
              <h4 className="text-2xl md:text-3xl font-bold font-hand mb-3 leading-tight">
                {pub.title}
              </h4>
              
              <p className="text-gray-600 italic mb-4 font-sans text-lg">
                {pub.authors}
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed border-l-2 border-gray-200 pl-4">
                {pub.abstract}
              </p>

              <div className="flex gap-4">
                 <button className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:underline">
                   <FileText size={16} /> PDF
                 </button>
                 <button className="flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:underline text-gray-500">
                   <ExternalLink size={16} /> DOI
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full List Section */}
      <div>
        <h3 className="font-hand text-2xl font-bold mb-8 border-b-2 border-gray-300 inline-block pb-1 text-gray-500">Full List</h3>
        <div className="space-y-6 border-l-2 border-dashed border-gray-300 pl-6 md:pl-8 relative">
          {FULL_PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="relative">
               {/* Timeline dot */}
               <div className="absolute -left-[33px] md:-left-[41px] top-2 w-4 h-4 bg-gray-200 rounded-full border-2 border-white"></div>
               
               <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-baseline hover:bg-gray-50 p-2 -ml-2 rounded transition-colors">
                 <div className="font-mono text-sm font-bold text-gray-400 w-12 shrink-0">
                   {pub.year}
                 </div>
                 
                 <div className="flex-grow">
                    <h4 className="text-xl font-bold font-hand text-charcoal leading-snug">
                      {pub.title}
                    </h4>
                    <div className="flex flex-wrap gap-x-3 text-gray-500 text-sm mt-1 font-sans">
                      <span className="italic">{pub.authors}</span>
                      <span className="font-bold text-gray-400">•</span>
                      <span className="font-bold text-ink">{pub.venue}</span>
                    </div>
                 </div>
                 
                 {pub.citationCount && (
                   <div className="shrink-0 text-xs font-bold text-gray-400 uppercase tracking-widest">
                     {pub.citationCount} Citations
                   </div>
                 )}
               </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <a 
            href="https://scholar.google.com/citations?user=8dn_dfcAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block font-hand text-xl border-b-2 border-ink hover:text-gray-600 hover:border-gray-400 transition-colors pb-1"
           >
             View all on Google Scholar &rarr;
           </a>
        </div>
      </div>
    </div>
  );
};
