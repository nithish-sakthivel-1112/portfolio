import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Junior Technical Support - AWS',
      company: 'Hapag Lloyd Technology Center',
      location: 'Chennai, IN',
      duration: 'Apr 2024 - Present',
      description: 'Leading cloud migration initiatives and infrastructure automation projects, focusing on modernizing legacy systems while ensuring high availability and cost efficiency.',
      achievements: [
        'Successfully migrated legacy applications to AWS cloud environments, achieving 40% cost reduction while maintaining 99% uptime',
        'Designed and implemented GitLab CI/CD pipelines for automated deployments, patching, and workload maintenance, reducing manual intervention by 60%',
        'Automated infrastructure provisioning using Terraform with GitLab CI/CD integration for consistent deployments',
        'Built comprehensive Grafana dashboards for 20+ microservice applications, improving observability and reducing incident resolution time'
      ]
    },
    {
      title: 'Junior Technical Support (Middleware)',
      company: 'Solverminds Solutions and Technology',
      location: 'Chennai, IN',
      duration: 'Mar 2022 - Mar 2024',
      description: 'Managed enterprise middleware systems and Linux server infrastructure, ensuring reliable message processing and maintaining high system availability across production environments.',
      achievements: [
        'Administered middleware systems including WebSphere and IBM MQ 9.1, ensuring reliable message transfers through custom queue configurations',
        'Managed 15+ Linux servers with responsibilities including disk space management, patching, and uptime monitoring, achieving 99.9% availability',
        'Resolved critical P1/P2 incidents within SLA requirements by analyzing domain, server, and security logs for root cause identification'
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A track record of delivering innovative cloud solutions and leading 
              infrastructure transformations across diverse industries.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 lg:left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} ml-10 sm:ml-12 lg:ml-0`}>
                    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3 sm:mb-4">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 lg:mb-0">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-1 text-blue-600 font-medium text-sm sm:text-base">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                        <span>•</span>
                        <span className="text-sm sm:text-base">{exp.location}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;