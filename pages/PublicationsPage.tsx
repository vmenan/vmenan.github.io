import React, { useState } from 'react';
import Header from '../components/Header';
import { ExternalLink, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { PUBLICATIONS } from '../researchData';

const PublicationsPage: React.FC = () => {
  // Sort and group publications by year
  const sortedPubs = [...PUBLICATIONS].sort((a, b) => {
    const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 
                        'july', 'august', 'september', 'october', 'november', 'december'];
    
    const yearA = parseInt(a.date.match(/\d{4}/)?.[0] || '0');
    const yearB = parseInt(b.date.match(/\d{4}/)?.[0] || '0');
    
    const monthA = monthNames.findIndex(m => a.date.toLowerCase().includes(m)) + 1 || 0;
    const monthB = monthNames.findIndex(m => b.date.toLowerCase().includes(m)) + 1 || 0;
    
    if (yearB !== yearA) return yearB - yearA;
    return monthB - monthA;
  });

  // Group by year
  const pubsByYear: { [year: string]: typeof PUBLICATIONS } = {};
  sortedPubs.forEach(pub => {
    const year = pub.date.match(/\d{4}/)?.[0] || 'Unknown';
    if (!pubsByYear[year]) pubsByYear[year] = [];
    pubsByYear[year].push(pub);
  });

  const sortedYears = Object.keys(pubsByYear).sort((a, b) => parseInt(b) - parseInt(a));
  const currentYear = new Date().getFullYear().toString();
  
  // Determine default expanded year: current year if has pubs, else previous year
  const defaultExpandedYear = pubsByYear[currentYear] && pubsByYear[currentYear].length > 0 
    ? currentYear 
    : sortedYears[0];

  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set([defaultExpandedYear]));

  const toggleYear = (year: string) => {
    setExpandedYears(prev => {
      const newSet = new Set(prev);
      if (newSet.has(year)) {
        newSet.delete(year);
      } else {
        newSet.add(year);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-cream selection:bg-yellow-200 w-full">
      <Header />
      
      <main className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
        
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-hand font-bold mb-4">Publications</h1>
          <div className="w-24 h-1 bg-black" style={{ 
            borderRadius: '100px',
            transform: 'rotate(-1deg)' 
          }} />
        </div>

        {/* Publications Section - Year Grouped Timeline */}
        <section className="mb-20">
          {sortedYears.map((year) => {
            const pubs = pubsByYear[year];
            const isExpanded = expandedYears.has(year);
            
            return (
              <div key={year} className="mb-12">
                {/* Year Header - Clickable */}
                <button
                  onClick={() => toggleYear(year)}
                  className="w-full flex items-center gap-4 mb-8 group hover:opacity-80 transition-opacity"
                >
                  <div className="text-6xl font-hand font-bold text-gray-800" style={{
                    textShadow: '3px 3px 0px rgba(0,0,0,0.1)'
                  }}>
                    {year}
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-black to-transparent rounded-full" style={{
                    transform: 'rotate(-0.5deg)'
                  }} />
                  <div className="text-gray-600">
                    {isExpanded ? <ChevronUp className="w-8 h-8" /> : <ChevronDown className="w-8 h-8" />}
                  </div>
                </button>

                {/* Publications for this year */}
                {isExpanded && (
                <div className="relative pl-8 md:pl-12 space-y-6">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200" style={{
                    transform: 'translateX(10px)'
                  }} />

                  {pubs.map((pub, index) => (
                    <div key={index} className="relative">
                      {/* Timeline dot */}
                      <div className="absolute -left-8 md:-left-12 top-3 w-5 h-5 rounded-full bg-gray-800 border-4 border-cream" style={{
                        boxShadow: '0 0 0 2px #000'
                      }} />

                      {/* Publication Card */}
                      <div 
                        className={`${pub.featured 
                          ? 'bg-gradient-to-br from-white to-blue-50 border-l-4 border-blue-600' 
                          : 'bg-white border-l-4 border-gray-300'} p-6 rounded-lg hover:shadow-lg transition-all group`}
                        style={{ 
                          boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.05)' 
                        }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-hand text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                              {pub.title}
                            </h3>
                            <p className="font-mono text-sm text-gray-600 mb-3">
                              {pub.isPreprint ? 'Preprint' : pub.venue} • {pub.date.split(' ')[0]} {pub.status && `• ${pub.status}`}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {pub.links.paper && (
                                <a 
                                  href={pub.links.paper} 
                                  className="inline-flex items-center gap-1 font-mono text-xs text-blue-600 hover:text-blue-800 transition-colors"
                                >
                                  READ PAPER <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                              {pub.links.code && pub.links.code !== '#' && pub.links.code !== '' && (
                                <>
                                  <span className="text-gray-300">|</span>
                                  <a 
                                    href={pub.links.code} 
                                    className="inline-flex items-center gap-1 font-mono text-xs text-gray-600 hover:text-gray-800 transition-colors"
                                  >
                                    CODE <ExternalLink className="w-3 h-3" />
                                  </a>
                                </>
                              )}
                              {pub.links.cite && (
                                <>
                                  <span className="text-gray-300">|</span>
                                  <a 
                                    href={pub.links.cite} 
                                    className="inline-flex items-center gap-1 font-mono text-xs text-gray-600 hover:text-gray-800 transition-colors"
                                  >
                                    CITE
                                  </a>
                                </>
                              )}
                            </div>
                          </div>
                          {pub.featured && (
                            <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                )}
              </div>
            );
          })}
        </section>

      </main>

      <footer className="py-12 text-center text-gray-400 font-hand text-sm">
        <p>&copy; {new Date().getFullYear()} Menan Velayutham. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PublicationsPage;
