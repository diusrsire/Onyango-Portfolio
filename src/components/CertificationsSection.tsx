
import { useState, useEffect, useRef } from 'react';

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'Certificate in Supply Chain Management',
      institution: 'Professional Institute',
      year: '2023',
      icon: '📦',
      skills: ['Logistics Management', 'Process Optimization', 'Vendor Relations']
    },
    {
      title: 'Professional Caregiver Course',
      institution: 'Healthcare Academy',
      year: '2022',
      icon: '❤️',
      skills: ['Client Care', 'Communication', 'Empathy & Support']
    },
    {
      title: 'Virtual Assistant Certification',
      institution: 'Remote Work Institute',
      year: '2021',
      icon: '💻',
      skills: ['Administrative Tasks', 'Time Management', 'Digital Tools']
    },
    {
      title: 'Customer Service Excellence',
      institution: 'Service Quality Center',
      year: '2021',
      icon: '🏆',
      skills: ['Client Relations', 'Problem Solving', 'Quality Assurance']
    },
    {
      title: 'Digital Marketing Fundamentals',
      institution: 'Marketing Academy',
      year: '2022',
      icon: '📱',
      skills: ['Social Media', 'Content Creation', 'Analytics']
    },
    {
      title: 'Project Management Basics',
      institution: 'PM Institute',
      year: '2023',
      icon: '📊',
      skills: ['Planning', 'Coordination', 'Resource Management']
    }
  ];

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Certifications & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development ensure I deliver the highest quality service with up-to-date industry knowledge.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-200 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-105 transition-transform duration-200 text-center">
                {cert.icon}
              </div>

              {/* Certificate Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {cert.title}
              </h3>

              {/* Institution & Year */}
              <p className="text-blue-600 font-semibold mb-2">
                {cert.institution}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                {cert.year}
              </p>

              {/* Skills */}
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 text-sm">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills & Proficiencies */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Technical Proficiencies
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: 'Communication', skills: ['Email Management', 'Client Relations', 'Cross-cultural Communication'] },
                { category: 'Organization', skills: ['Calendar Management', 'File Systems', 'Process Documentation'] },
                { category: 'Technology', skills: ['CRM Systems', 'Cloud Platforms', 'Automation Tools'] },
                { category: 'Analysis', skills: ['Data Entry', 'Report Generation', 'Quality Assurance'] }
              ].map((category) => (
                <div key={category.category} className="text-center">
                  <h4 className="text-lg font-bold text-blue-600 mb-4">
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-gray-700 text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Committed to lifelong learning and staying current with industry best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Continuous Learner', 'Industry Updates', 'Best Practices', 'Innovation Focused'].map((trait) => (
                  <span
                    key={trait}
                    className="px-6 py-3 bg-white rounded-full text-blue-700 font-semibold shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
