import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { NEWS_ITEMS } from '../constants';

const News: React.FC = () => {
  return (
    <section className="px-6 md:px-12 mt-24 md:mt-32 mb-20 w-full">
      <div className="flex items-center gap-2 mb-8 border-b-2 border-gray-100 pb-4">
        <Sparkles className="w-6 h-6 text-yellow-500" />
        <h2 className="text-3xl font-hand font-bold">Latest News</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {NEWS_ITEMS.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 group cursor-pointer">
            <div className="flex items-center gap-2">
               <span className="text-xs font-mono font-bold text-gray-400 tracking-wider uppercase border-l-2 border-gray-300 pl-2">
                {item.date}
               </span>
            </div>
            <p className="font-hand text-xl text-gray-800 leading-snug group-hover:underline decoration-gray-400 underline-offset-4">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-end">
        <a 
          href="#archive" 
          className="inline-flex items-center gap-2 font-mono text-xs text-gray-400 hover:text-black transition-colors tracking-widest"
        >
          READ ARCHIVE <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default News;