import React from 'react';
import { ExternalLink, Github, Cloud, Shield, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Serverless Email Notification System',
      description: 'Built an event-driven serverless architecture integrated with CRICAPI to send real-time cricket match notifications via email/SMS every 30 minutes.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AWS Lambda', 'SNS', 'EventBridge', 'IAM', 'Serverless'],
      icon: Cloud,
      color: 'blue'
    },
    {
      title: '3-Tier AWS Architecture',
      description: 'Designed secure infrastructure with least privilege access controls, separating presentation, application, and database layers following AWS best practices.',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['VPC', 'EC2', 'Auto Scaling', 'Load Balancer', 'NAT Gateway'],
      icon: Shield,
      color: 'green'
    },
    {
      title: 'Legacy Application Migration',
      description: 'Modernized and migrated legacy applications to AWS cloud environments, achieving 40% cost reduction and 99% uptime with automated CI/CD pipelines.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AWS Migration', 'GitLab CI/CD', 'Terraform', 'Cost Optimization'],
      icon: Zap,
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string, text: string, border: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Showcasing cloud infrastructure projects that deliver scalable, secure, 
              and cost-effective solutions for enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color);
              const IconComponent = project.icon;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 ${colorClasses.bg} rounded-full p-1.5 sm:p-2 shadow-lg`}>
                      <IconComponent className={`h-4 w-4 sm:h-5 sm:w-5 ${colorClasses.text}`} />
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <button className="flex items-center justify-center sm:justify-start gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium text-sm sm:text-base">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        View Project
                      </button>
                      <button className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 font-medium text-sm sm:text-base">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;