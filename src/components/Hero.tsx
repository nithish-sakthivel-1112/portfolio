import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nithish Sakthivel
            <span className="text-blue-600 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">AWS Cloud Engineer</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
            AWS Certified Solutions Architect specializing in cloud migration, 
            infrastructure automation, and DevOps implementation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </button>
            
            <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
              <Download className="h-5 w-5" />
              Download CV
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto text-center px-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">3+</div>
              <div className="text-gray-600 text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">40%</div>
              <div className="text-gray-600 text-sm sm:text-base">Cost Reduction Achieved</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">99%</div>
              <div className="text-gray-600 text-sm sm:text-base">Application Uptime</div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
      </button>
    </section>
  );
};

export default Hero;