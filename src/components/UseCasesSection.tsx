
import { useState, useEffect, useRef } from 'react';

const UseCasesSection = () => {
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

  const useCases = [
    {
      title: 'Coaches & Wellness Experts',
      subtitle: 'Focus on healing while I handle the rest',
      description: 'I handle your calendar, bookings, follow-ups so you can stay focused on healing and transforming lives.',
      image: '🧘‍♀️',
      services: ['Client scheduling', 'Follow-up sequences', 'Payment processing', 'Content management'],
      testimonial: '"Clara transformed my practice. I can focus entirely on my clients while she keeps everything running smoothly."'
    },
    {
      title: 'Founders & CEOs',
      subtitle: 'Scale your vision, delegate the execution',
      description: 'Inbox, calls, and support systems—done, so you can lead your company to the next level.',
      image: '👨‍💼',
      services: ['Executive assistance', 'Meeting coordination', 'Email management', 'Travel planning'],
      testimonial: '"Having Clara as my virtual assistant is like having a COO for administrative tasks. Invaluable."'
    },
    {
      title: 'Remote Teams',
      subtitle: 'Seamless operations across time zones',
      description: 'I keep your backend clean so your team runs smoothly, no matter where they are in the world.',
      image: '🌍',
      services: ['Team coordination', 'Document management', 'Process optimization', 'Communication systems'],
      testimonial: '"Clara bridges our entire remote operation. She\'s the glue that keeps us connected and efficient."'
    }
  ];

  return (
    <section className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how I've helped professionals across different industries streamline their operations and focus on what matters most.
          </p>
        </div>

        {/* Use Cases */}
        <div className="space-y-24">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} ${
                isVisible 
                  ? index % 2 === 0 
                    ? 'animate-fade-in-left' 
                    : 'animate-fade-in-right'
                  : 'opacity-0'
              }`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mb-6">
                    {useCase.subtitle}
                  </p>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Services */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Services:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {useCase.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700">
                    {useCase.testimonial}
                  </blockquote>
                </div>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} ${
                isVisible 
                  ? index % 2 === 0 
                    ? 'animate-fade-in-right' 
                    : 'animate-fade-in-left'
                  : 'opacity-0'
              }`} style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{useCase.image}</div>
                      <div className="text-blue-800 font-semibold text-lg">
                        {useCase.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="bg-blue-600 text-white rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join the ranks of successful professionals who've reclaimed their time and scaled their impact.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-200 shadow-lg">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
