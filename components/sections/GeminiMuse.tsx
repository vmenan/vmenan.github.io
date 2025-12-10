import React, { useState, useCallback } from 'react';
import { generateCreativeIdea } from '../../services/geminiService';
import { SketchButton, SketchCard, SketchInput } from '../SketchUI';
import { Lightbulb, Eraser, Loader2 } from 'lucide-react';
import { InteractionState } from '../../types';

export const GeminiMuse: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [idea, setIdea] = useState<string | null>(null);
  const [status, setStatus] = useState<InteractionState>(InteractionState.IDLE);

  const handleBrainstorm = useCallback(async () => {
    if (!topic.trim()) return;
    
    setStatus(InteractionState.LOADING);
    setIdea(null);
    
    try {
      const result = await generateCreativeIdea(topic);
      setIdea(result);
      setStatus(InteractionState.SUCCESS);
    } catch (e) {
      setIdea("Oops, my pencil snapped. Try again.");
      setStatus(InteractionState.ERROR);
    }
  }, [topic]);

  const handleClear = () => {
    setTopic('');
    setIdea(null);
    setStatus(InteractionState.IDLE);
  };

  return (
    <div className="py-12 max-w-4xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold mb-4 flex items-center justify-center gap-3">
          <Lightbulb className="text-yellow-500 fill-yellow-500" />
          Idea Lab
        </h2>
        <p className="text-2xl text-gray-600">
          Stuck on a hypothesis? Use this AI-powered sketchbook to brainstorm new angles.
        </p>
      </div>

      <SketchCard className="min-h-[400px] relative bg-[url('https://www.transparenttextures.com/patterns/lined-paper-2.png')]">
        {/* Notebook Holes */}
        <div className="absolute left-4 top-0 bottom-0 w-8 border-r border-red-200 flex flex-col justify-evenly py-4 hidden sm:flex">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-4 h-4 rounded-full bg-gray-800/10"></div>
          ))}
        </div>

        <div className="sm:pl-12 flex flex-col h-full">
          <div className="mb-8">
            <label className="block text-xl font-bold mb-2 text-gray-500">Research Topic</label>
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="flex-grow">
                <SketchInput 
                  placeholder="e.g., The social impact of urban gardening..." 
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleBrainstorm()}
                  disabled={status === InteractionState.LOADING}
                />
              </div>
              <div className="flex gap-2">
                <SketchButton onClick={handleBrainstorm} disabled={!topic || status === InteractionState.LOADING}>
                  {status === InteractionState.LOADING ? <Loader2 className="animate-spin" /> : 'Brainstorm'}
                </SketchButton>
                {idea && (
                  <button 
                    onClick={handleClear}
                    className="p-3 text-gray-400 hover:text-red-500 border-2 border-transparent hover:border-red-200 rounded-full transition-all"
                    title="Erase"
                  >
                    <Eraser size={24} />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex-grow flex items-center justify-center min-h-[200px] border-2 border-dashed border-gray-300 rounded-lg p-6 bg-white/50">
            {status === InteractionState.LOADING && (
               <div className="text-center">
                 <Loader2 className="w-12 h-12 animate-spin text-pencil mx-auto mb-4" />
                 <p className="text-xl text-gray-500">Consulting the archives...</p>
               </div>
            )}
            
            {status === InteractionState.IDLE && !idea && (
              <p className="text-2xl text-gray-400 italic text-center rotate-1">
                "Enter a subject to spark an idea..."
              </p>
            )}

            {idea && status !== InteractionState.LOADING && (
              <div className="prose prose-xl max-w-none font-hand">
                <p className="text-3xl leading-relaxed text-pencil animate-in fade-in duration-700 slide-in-from-bottom-4">
                  {idea}
                </p>
                <div className="mt-4 text-right">
                  <span className="text-sm text-gray-400 uppercase tracking-widest">- AI Assistant</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </SketchCard>
    </div>
  );
};