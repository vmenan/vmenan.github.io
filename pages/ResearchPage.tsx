import React from 'react';
import Header from '../components/Header';
import { BookOpen, ExternalLink, FileText, Award } from 'lucide-react';

const ResearchPage: React.FC = () => {
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
              My research sits at the intersection of Natural Language Processing and societal structures, 
              exploring how computational methods can be designed to respect and enhance human values.
            </p>
            <p className="font-hand text-lg text-gray-600 leading-relaxed">
              I'm particularly interested in developing ethical frameworks for AI systems and understanding 
              the broader implications of technology on society.
            </p>
          </div>
        </section>

        {/* Publications Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <FileText className="w-7 h-7 text-green-600" />
            <h2 className="text-4xl font-hand font-bold">Publications</h2>
          </div>

          <div className="space-y-8">
            
            {/* Featured Publication */}
            <div 
              className="bg-gradient-to-br from-white to-blue-50 border-l-4 border-blue-600 p-8 rounded-lg hover:shadow-xl transition-all"
              style={{ 
                boxShadow: '8px 8px 0px 0px rgba(59, 130, 246, 0.15)' 
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-hand text-2xl font-bold text-gray-800 mb-2">
                    Cognitive Density in Human-Computer Interaction
                  </h3>
                  <p className="font-mono text-sm text-blue-600 mb-4">
                    CHI 2025 • October 2024 • [Accepted]
                  </p>
                </div>
              </div>
              <p className="font-hand text-lg text-gray-700 leading-relaxed mb-6">
                This paper explores how cognitive load affects user interaction patterns in modern interfaces, 
                introducing the concept of "cognitive density" as a measurable metric for interface design.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-hand text-base"
                >
                  Read Paper <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors font-hand text-base"
                >
                  View Code
                </a>
              </div>
            </div>

            {/* Regular Publications */}
            <div 
              className="bg-white border-l-4 border-gray-400 p-8 rounded-lg hover:shadow-lg transition-all"
              style={{ 
                boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.06)' 
              }}
            >
              <h3 className="font-hand text-2xl font-bold text-gray-800 mb-2">
                Your Publication Title Here
              </h3>
              <p className="font-mono text-sm text-gray-500 mb-4">
                Conference/Journal Name • Publication Date
              </p>
              <p className="font-hand text-lg text-gray-700 leading-relaxed mb-6">
                A brief description of your research paper, its key findings, and contributions to the field.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 font-mono text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  READ PAPER <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  CITE
                </a>
              </div>
            </div>

            <div 
              className="bg-white border-l-4 border-gray-400 p-8 rounded-lg hover:shadow-lg transition-all"
              style={{ 
                boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.06)' 
              }}
            >
              <h3 className="font-hand text-2xl font-bold text-gray-800 mb-2">
                Another Research Paper
              </h3>
              <p className="font-mono text-sm text-gray-500 mb-4">
                Conference/Journal Name • Publication Date
              </p>
              <p className="font-hand text-lg text-gray-700 leading-relaxed mb-6">
                Another description highlighting the main contributions and impact of this work.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 font-mono text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  READ PAPER <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  CITE
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Current Projects */}
        <section className="mb-20">
          <h2 className="text-4xl font-hand font-bold mb-10">Current Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Project Card 1 */}
            <div 
              className="bg-gradient-to-br from-white to-yellow-50 p-8 rounded-xl border-2 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
              style={{ 
                boxShadow: '12px 12px 0px 0px rgba(0,0,0,0.1)',
                borderRadius: '16px'
              }}
            >
              <h3 className="font-hand text-2xl font-bold text-gray-800 mb-4">
                Ethical NLP Frameworks
              </h3>
              <p className="font-hand text-lg text-gray-700 leading-relaxed mb-4">
                Developing comprehensive frameworks for building NLP systems that prioritize human values, 
                fairness, and societal impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-200 text-gray-800 text-xs font-mono rounded-full">NLP</span>
                <span className="px-3 py-1 bg-yellow-200 text-gray-800 text-xs font-mono rounded-full">Ethics</span>
                <span className="px-3 py-1 bg-yellow-200 text-gray-800 text-xs font-mono rounded-full">AI Safety</span>
              </div>
            </div>

            {/* Project Card 2 */}
            <div 
              className="bg-gradient-to-br from-white to-green-50 p-8 rounded-xl border-2 border-black hover:translate-x-1 hover:translate-y-1 transition-transform"
              style={{ 
                boxShadow: '12px 12px 0px 0px rgba(0,0,0,0.1)',
                borderRadius: '16px'
              }}
            >
              <h3 className="font-hand text-2xl font-bold text-gray-800 mb-4">
                Your Project Title
              </h3>
              <p className="font-hand text-lg text-gray-700 leading-relaxed mb-4">
                Brief description of your ongoing research project and its goals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-200 text-gray-800 text-xs font-mono rounded-full">Tag1</span>
                <span className="px-3 py-1 bg-green-200 text-gray-800 text-xs font-mono rounded-full">Tag2</span>
              </div>
            </div>

            {/* Add more project cards as needed */}

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
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">→</span>
                <span>NLP & Society Lab, Utrecht University</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">→</span>
                <span>Your Collaboration Partner</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">→</span>
                <span>Another Research Group</span>
              </li>
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
