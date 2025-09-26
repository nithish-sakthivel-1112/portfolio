import React from 'react';
import { Cloud, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
                <span className="text-lg sm:text-xl font-bold">Nithish Sakthivel</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                AWS Certified Solutions Architect passionate about cloud migration, 
                infrastructure automation, and helping organizations modernize their technology stack.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Expertise</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>AWS Cloud Migration</li>
                <li>Infrastructure Automation</li>
                <li>CI/CD Pipeline Development</li>
                <li>Middleware Systems</li>
                <li>Cost Optimization</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-700 mb-4 sm:mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-gray-400 text-sm sm:text-base text-center md:text-left">
              <span>© {currentYear} Nithish Sakthivel. Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 fill-current" />
              <span>and passion for cloud technology</span>
            </div>
            
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-right">
              <span>AWS Certified Solutions Architect - Associate (SAA-C03)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;