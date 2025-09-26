import React from 'react';
import { Server, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              AWS Certified Solutions Architect with expertise in cloud migration, infrastructure automation, 
              and DevOps implementation. Currently working at Hapag Lloyd Technology Center.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Modernizing Infrastructure with AWS Cloud Solutions
              </h3>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                With 3+ years of experience in cloud engineering and middleware systems, I specialize in 
                modernizing legacy applications and building scalable AWS infrastructure. My expertise 
                includes Terraform automation, GitLab CI/CD pipelines, and container orchestration.
              </p>
              
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Currently at Hapag Lloyd, I've successfully migrated legacy applications to cloud 
                environments, reducing costs by 40% while maintaining 99% uptime. I'm passionate about 
                infrastructure automation, observability, and creating technical content to help others 
                learn cloud technologies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Server className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Infrastructure</h4>
                  <p className="text-xs sm:text-sm text-gray-600">AWS & Terraform</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Security</h4>
                  <p className="text-xs sm:text-sm text-gray-600">IAM & VPC</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-100 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Performance</h4>
                  <p className="text-xs sm:text-sm text-gray-600">CI/CD & Monitoring</p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 sm:p-6 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Cloud infrastructure" 
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl shadow-lg mb-4 sm:mb-6"
                />
                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-center">
                  <div className="bg-white/80 rounded-lg p-2 sm:p-4">
                    <div className="text-lg sm:text-2xl font-bold text-blue-600 mb-1">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600">AWS Services</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-2 sm:p-4">
                    <div className="text-lg sm:text-2xl font-bold text-green-600 mb-1">20+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Microservices</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-2 sm:p-4">
                    <div className="text-lg sm:text-2xl font-bold text-purple-600 mb-1">60%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Automation Gain</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-2 sm:p-4">
                    <div className="text-lg sm:text-2xl font-bold text-orange-600 mb-1">99.9%</div>
                    <div className="text-xs sm:text-sm text-gray-600">Server Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;