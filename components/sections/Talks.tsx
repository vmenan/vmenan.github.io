import React from 'react';
import { Talk } from '../../types';

const TALKS: Talk[] = [
  {
    id: 'vid1',
    title: "The Future of Interfaces",
    event: "TEDx University",
    date: "2023-09-15",
    videoId: "dQw4w9WgXcQ", 
    description: "Exploring organic design patterns and how they influence human creativity."
  },
  {
    id: 'vid2',
    title: "Deep Learning in Public Spaces",
    event: "Tech Summit 2022",
    date: "2022-11-20",
    videoId: "ScMzIvxBSi4", 
    description: "Privacy-first computer vision: Challenges and opportunities in modern urban planning."
  }
];

export const Talks: React.FC = () => {
  return (
    <div className="py-12 max-w-5xl mx-auto px-6">
       <h2 className="font-hand text-4xl md:text-5xl mb-12 border-b-2 border-ink inline-block pb-2">Talks & Lectures</h2>

      <div className="space-y-16">
        {TALKS.map((talk) => (
          <div key={talk.id} className="flex flex-col gap-4">
             <div>
               <h3 className="text-2xl font-bold font-hand">{talk.title}</h3>
               <div className="text-gray-500 text-sm uppercase tracking-wider mt-1">
                 {talk.event} • {talk.date}
               </div>
             </div>

             <div className="w-full aspect-video bg-gray-100 border-2 border-ink rounded-sm overflow-hidden">
                 <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${talk.videoId}`} 
                    title={talk.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
             </div>
             
             <p className="text-gray-600 max-w-3xl">
               {talk.description}
             </p>
          </div>
        ))}
      </div>
    </div>
  );
};