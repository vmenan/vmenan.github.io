import React from 'react';
import Header from '../components/Header';
import { Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream selection:bg-yellow-200 w-full">
      <Header />
      
      <main className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
        
        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-hand font-bold mb-4">Get in Touch</h1>
          <div className="w-24 h-1 bg-black" style={{ 
            borderRadius: '100px',
            transform: 'rotate(-1deg)' 
          }} />
          <p className="font-hand text-xl text-gray-600 mt-6">
            I'm always open to discussing research, collaboration opportunities, or just having a chat about NLP and society.
          </p>
        </div>

        {/* Contact Information Card */}
        <div 
          className="bg-white/70 p-10 md:p-12 rounded-xl border-2 border-black max-w-3xl mx-auto mb-16"
          style={{ 
            boxShadow: '12px 12px 0px 0px rgba(0,0,0,0.1)',
            transform: 'rotate(-0.5deg)'
          }}
        >
          <h2 className="text-3xl font-hand font-bold mb-8 text-center">Let's Connect</h2>
          
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4 justify-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-hand text-xl font-bold text-gray-800 mb-2">Email</h3>
                <a 
                  href="mailto:m.velayuthan@uu.nl" 
                  className="font-mono text-base text-blue-600 hover:text-blue-800 transition-colors"
                >
                  m.velayuthan@uu.nl
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h3 className="font-hand text-xl font-bold text-gray-800 mb-4 text-center">Connect with me</h3>
              <div className="flex gap-4 justify-center flex-wrap">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.platform} 
                    href={link.url}
                    className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all hover:scale-110"
                    aria-label={link.platform}
                    title={link.platform}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div 
          className="bg-white/50 border-l-4 border-yellow-400 p-8 rounded-md"
          style={{ boxShadow: '6px 6px 0px 0px rgba(0,0,0,0.05)' }}
        >
          <h3 className="font-hand text-2xl font-bold text-gray-800 mb-4">Response Time</h3>
          <p className="font-hand text-lg text-gray-700 leading-relaxed">
            I typically respond to emails within 2-3 working days. For urgernt matter please use [URGENT] in the subject of the email.
          </p>
        </div>

      </main>

      <footer className="py-12 text-center text-gray-400 font-hand text-sm">
        <p>&copy; {new Date().getFullYear()} Menan Velayuthan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPage;
