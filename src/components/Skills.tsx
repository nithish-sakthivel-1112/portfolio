import React from 'react';
import { Cloud, Database, Settings, GitBranch, Lock, Monitor } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'AWS Cloud Services',
      icon: Cloud,
      color: 'blue',
      skills: ['EC2', 'ECS', 'EKS', 'S3', 'EFS', 'RDS', 'VPC', 'IAM', 'CloudWatch', 'DataSync']
    },
    {
      title: 'Infrastructure as Code',
      icon: GitBranch,
      color: 'green',
      skills: ['Terraform', 'GitLab CI/CD', 'GitHub Actions', 'ArgoCD']
    },
    {
      title: 'Operating Systems',
      icon: Database,
      color: 'purple',
      skills: ['Linux', 'Windows', 'Server Administration', 'System Monitoring']
    },
    {
      title: 'Programming & Scripting',
      icon: Lock,
      color: 'red',
      skills: ['Python', 'Shell Scripting', 'Infrastructure Automation']
    },
    {
      title: 'Monitoring & Logging',
      icon: Monitor,
      color: 'yellow',
      skills: ['Grafana', 'CloudWatch', 'Application Monitoring', 'Incident Resolution']
    },
    {
      title: 'Middleware & Legacy Systems',
      icon: Settings,
      color: 'indigo',
      skills: ['WebSphere', 'IBM MQ 9.1', 'Message Queues', 'Legacy Migration']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string, text: string, border: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive expertise across cloud platforms, DevOps tools, and modern technologies 
              to deliver robust and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color);
              const IconComponent = category.icon;
              
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`${colorClasses.bg} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${colorClasses.text}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} border rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200`}
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;