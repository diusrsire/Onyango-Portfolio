
import { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
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

  const services = [
    {
      icon: '🗓️',
      title: 'Calendar Management',
      description: 'Never miss a beat. I organize your time so you don\'t have to.',
      features: ['Scheduling optimization', 'Meeting coordination', 'Time blocking strategies']
    },
    {
      icon: '📧',
      title: 'Email & Communication',
      description: 'Inbox zero achieved. Professional communication maintained.',
      features: ['Email management', 'Response templates', 'Follow-up systems']
    },
    {
      icon: '👥',
      title: 'Client Support',
      description: 'Your clients feel heard, valued, and expertly cared for.',
      features: ['Customer service', 'Support ticket management', 'Client onboarding']
    },
    {
      icon: '📊',
      title: 'CRM & Data Management',
      description: 'Clean data, smart insights, streamlined processes.',
      features: ['Database management', 'Lead tracking', 'Report generation']
    },
    {
      icon: '📋',
      title: 'Administrative Tasks',
      description: 'All the details handled so you can focus on the big picture.',
      features: ['Document preparation', 'Research tasks', 'Process documentation']
    },
    {
      icon: '🚀',
      title: 'Project Coordination',
      description: 'From concept to completion, I keep everything on track.',
      features: ['Timeline management', 'Team coordination', 'Progress tracking']
    }
  ];

  return (
    <section id="services" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What I Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive virtual assistance services designed to scale with your business and amplify your productivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 ${
                isVisible ? 'animate-bounce-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to reclaim your time and supercharge your productivity?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
            Let's Discuss Your Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
