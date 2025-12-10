import React from 'react';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="py-12 max-w-4xl mx-auto px-6 min-h-[60vh] flex flex-col justify-center">
      <h2 className="font-hand text-5xl md:text-7xl mb-8">Get in Touch.</h2>
      
      <p className="text-xl text-gray-600 mb-12 max-w-xl">
        I am always open to discussing new research collaborations, speaking opportunities, or just chatting about the future of ethical AI.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
         <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-400">Email</h3>
            <a href="mailto:menan@university.edu" className="text-2xl font-hand hover:underline decoration-2 underline-offset-4">
               menan@university.edu
            </a>
         </div>

         <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-widest text-sm text-gray-400">Socials</h3>
            <div className="flex gap-6">
               <a href="#" className="hover:opacity-60 transition-opacity"><Twitter size={28} strokeWidth={1.5}/></a>
               <a href="#" className="hover:opacity-60 transition-opacity"><Linkedin size={28} strokeWidth={1.5}/></a>
               <a href="#" className="hover:opacity-60 transition-opacity"><Github size={28} strokeWidth={1.5}/></a>
            </div>
         </div>
      </div>
    </div>
  );
};