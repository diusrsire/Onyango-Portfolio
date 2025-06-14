
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
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

  return (
    <section className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Clara's Portrait */}
          <div className={`relative ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src="/lovable-uploads/b9214170-4170-414a-8c4d-ef8baf2514c0.png" 
                alt="Clara Onyango - Virtual Assistant Expert" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">✨</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet Clara Onyango
              </h2>
              <div className="w-24 h-1 bg-blue-600 mb-6"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm Clara, a dedicated Virtual Assistant with a passion for helping ambitious professionals 
                and entrepreneurs achieve their goals without getting bogged down by administrative tasks.
              </p>

              <p>
                With years of experience in customer service, operations management, and remote support, 
                I understand what it takes to keep businesses running smoothly behind the scenes. My approach 
                is simple: <span className="text-blue-600 font-semibold">anticipate needs, deliver excellence, and exceed expectations.</span>
              </p>

              <p>
                When you work with me, you're not just hiring a virtual assistant—you're gaining a strategic 
                partner who genuinely cares about your success. I take pride in being the reliable backbone 
                that allows visionaries like you to focus on what matters most: growing your impact.
              </p>
            </div>

            {/* Key Traits */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { trait: 'Proactive Mindset', icon: '🎯' },
                { trait: 'Detail-Oriented', icon: '🔍' },
                { trait: 'Tech-Savvy', icon: '💻' },
                { trait: 'Communication Expert', icon: '💬' }
              ].map((item, index) => (
                <div key={item.trait} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-gray-800">{item.trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {[
            { number: '500+', label: 'Tasks Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '24/7', label: 'Availability' },
            { number: '100%', label: 'Satisfaction Rate' }
          ].map((stat) => (
            <div key={stat.label} className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
