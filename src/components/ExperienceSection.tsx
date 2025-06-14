
import { useState, useEffect, useRef } from 'react';

const ExperienceSection = () => {
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

  const experiences = [
    {
      year: '2023 - Present',
      company: 'Remote Platform',
      position: 'Senior Virtual Assistant',
      description: 'Leading virtual assistance operations for multiple high-profile clients, managing complex calendars, communication systems, and project coordination.',
      achievements: ['Increased client productivity by 40%', 'Managed 15+ concurrent projects', 'Implemented automation systems']
    },
    {
      year: '2022 - 2023',
      company: 'Captive Africa',
      position: 'Customer Support Specialist',
      description: 'Provided exceptional customer service and support, managing client relationships and resolving complex queries with a 98% satisfaction rate.',
      achievements: ['98% customer satisfaction rate', 'Reduced response time by 50%', 'Trained 5 team members']
    },
    {
      year: '2021 - 2022',
      company: 'CCI Kenya',
      position: 'Administrative Assistant',
      description: 'Coordinated administrative operations, managed documentation systems, and supported executive team with daily operations.',
      achievements: ['Streamlined filing systems', 'Improved office efficiency by 30%', 'Coordinated major events']
    },
    {
      year: '2020 - 2021',
      company: 'Freelance',
      position: 'Virtual Assistant',
      description: 'Started my journey as a freelance virtual assistant, working with coaches, consultants, and small business owners to optimize their operations.',
      achievements: ['Served 20+ clients', 'Built strong referral network', 'Developed specialized VA processes']
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey of continuous growth, learning, and delivering exceptional results for clients across diverse industries.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  } ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Year Badge */}
                    <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {exp.year}
                    </div>

                    {/* Position & Company */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">
                      {exp.company}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Add Your Success to My Timeline?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Let's create the next chapter together—where your goals become achievements.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
              Let's Start Working Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
