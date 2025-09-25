import React from 'react';
import { Server, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AWS Certified Solutions Architect with expertise in cloud migration, infrastructure automation, 
              and DevOps implementation. Currently working at Hapag Lloyd Technology Center.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Modernizing Infrastructure with AWS Cloud Solutions
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                With 3+ years of experience in cloud engineering and middleware systems, I specialize in 
                modernizing legacy applications and building scalable AWS infrastructure. My expertise 
                includes Terraform automation, GitLab CI/CD pipelines, and container orchestration.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Currently at Hapag Lloyd, I've successfully migrated legacy applications to cloud 
                environments, reducing costs by 40% while maintaining 99% uptime. I'm passionate about 
                infrastructure automation, observability, and creating technical content to help others 
                learn cloud technologies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Server className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Infrastructure</h4>
                  <p className="text-sm text-gray-600">AWS & Terraform</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                  <p className="text-sm text-gray-600">IAM & VPC</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                  <p className="text-sm text-gray-600">CI/CD & Monitoring</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Cloud infrastructure" 
                  className="w-full h-48 object-cover rounded-xl shadow-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                    <div className="text-sm text-gray-600">AWS Services</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">20+</div>
                    <div className="text-sm text-gray-600">Microservices</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1">60%</div>
                    <div className="text-sm text-gray-600">Automation Gain</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600 mb-1">99.9%</div>
                    <div className="text-sm text-gray-600">Server Uptime</div>
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