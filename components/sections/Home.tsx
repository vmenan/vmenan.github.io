import React from 'react';
import { SketchButton, SketchCard } from '../SketchUI';
import { ArrowRight, Sparkles, Twitter, Github, Linkedin } from 'lucide-react';
import { NewsItem } from '../../types';

interface HomeProps {
  onNavigate: (path: string) => void;
}

const NEWS_ITEMS: NewsItem[] = [
  { id: '1', date: 'Oct 2024', content: 'Paper on "Cognitive Density" accepted at CHI 2025!' },
  { id: '2', date: 'Sep 2024', content: 'Joined the NLP & Society Lab as a visiting researcher.' },
  { id: '3', date: 'Aug 2024', content: 'Delivered a guest lecture at Utrecht University.' },
];

const BlueskyIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
     <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565-.139 2.038-.074 2.129.184 2.818c1.904 5.07 7.423 7.26 9.273 7.982-2.173.692-7.863 1.233-9.177 4.145-.583 1.292-.583 2.583-.004 3.018.667.5 1.77.633 4.296-.95 3.197-2.003 5.922-6.914 7.428-10.8 1.506 3.886 4.23 8.797 7.428 10.8 2.526 1.583 3.63 1.45 4.296.95.58-.435.58-1.726-.004-3.018-1.314-2.912-7.004-3.453-9.177-4.145 1.85-.722 7.37-2.912 9.273-7.982.258-.69.323-.78-.718-1.253-.66-.299-1.664-.621-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" fill="currentColor" stroke="none"/>
  </svg>
);

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col justify-center min-h-[80vh] px-6 max-w-5xl mx-auto py-12 gap-20">
      
      {/* Top Section: Intro */}
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        
        {/* Profile Picture */}
        <div className="shrink-0 relative mt-4">
          <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-200 sketch-border-round overflow-hidden shadow-sketch rotate-2">
            <img 
              src="https://placehold.co/400x400/png?text=MV" 
              alt="Menan Velayuthan" 
              className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          {/* Decorative scribble */}
          <svg className="absolute -bottom-6 -right-6 w-16 h-16 text-gray-300 -z-10 rotate-180" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10,50 Q30,20 50,50 T90,50" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="flex-grow text-center md:text-left">
          <h1 className="font-hand text-5xl md:text-7xl font-bold text-ink leading-tight mb-2">
            Menan Velayuthan.
          </h1>
          <p className="font-sans text-2xl md:text-3xl text-gray-500 mb-6">
            Researcher & PhD Candidate
          </p>

          <div className="mb-8 p-4 border-l-4 border-ink bg-gray-50 font-mono text-sm md:text-base text-gray-700 text-left mx-auto md:mx-0 max-w-2xl">
              <span className="font-bold mr-2 text-black">$</span> 
              pwd <br/>
              <span className="block mt-1 text-gray-500 break-all">
                /PhD/Netherlands/UtrechtUniversity/NLPandSocietyLab/DataDivers
              </span>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-charcoal mb-6 max-w-2xl">
            I research the intersection of Natural Language Processing and societal structures. 
            My work focuses on building tools and theories for the future of ethical computing.
          </p>

          {/* Socials */}
          <div className="flex gap-5 justify-center md:justify-start mb-10 items-center">
            <a href="#" className="text-gray-400 hover:text-ink transition-colors transform hover:-translate-y-1" aria-label="Twitter">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:-translate-y-1" aria-label="Bluesky">
              <BlueskyIcon size={22} />
            </a>
            <a href="#" className="text-gray-400 hover:text-ink transition-colors transform hover:-translate-y-1" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition-colors transform hover:-translate-y-1" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <SketchButton onClick={() => onNavigate('contact')}>
              Get in touch
            </SketchButton>
            <SketchButton variant="secondary" onClick={() => onNavigate('research')}>
              View Research
            </SketchButton>
          </div>
        </div>
      </div>

      {/* Bottom Section: News */}
      <div className="w-full border-t border-gray-200 pt-12">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-yellow-500 w-6 h-6" />
            <h3 className="font-hand text-3xl font-bold">Latest News</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item) => (
              <div key={item.id} className="group border-l-2 border-gray-300 pl-4 hover:border-ink transition-colors">
                <div className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                  {item.date}
                </div>
                <p className="text-lg text-charcoal font-hand leading-snug group-hover:text-ink transition-colors">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:text-right">
            <button onClick={() => onNavigate('news')} className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-ink transition-colors">
              Read Archive &rarr;
            </button>
          </div>
      </div>
    </div>
  );
};