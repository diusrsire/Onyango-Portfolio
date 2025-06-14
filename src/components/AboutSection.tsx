
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About Clara
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p className="leading-relaxed">
                With over <span className="font-semibold text-blue-600">5+ years</span> of experience in virtual assistance and customer service, I specialize in helping high-performing individuals and teams stay organized, efficient, and focused on their core business.
              </p>
              
              <p className="leading-relaxed">
                My background spans from working with <span className="font-semibold text-blue-600">wellness coaches</span> and <span className="font-semibold text-blue-600">CEOs</span> to managing complex operations for remote teams. I understand that your time is your most valuable asset.
              </p>
              
              <p className="leading-relaxed">
                I don't just complete tasks—I anticipate needs, solve problems before they arise, and create systems that scale with your growth. When you work with me, you get a partner who cares about your success as much as you do.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Keywords */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Why Clients Choose Me
                </h3>
                
                <div className="space-y-4">
                  {[
                    { trait: 'Proactive', desc: 'I anticipate needs before they become urgent' },
                    { trait: 'Reliable', desc: 'Consistent quality, every single time' },
                    { trait: 'Calm Under Pressure', desc: 'Grace and efficiency in high-stress situations' },
                    { trait: 'Results-Driven', desc: 'Your success metrics are my success metrics' },
                    { trait: 'Detail-Oriented', desc: 'Nothing falls through the cracks' },
                    { trait: 'Communication Expert', desc: 'Clear, timely, and professional always' }
                  ].map((item, index) => (
                    <div
                      key={item.trait}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-200 cursor-pointer group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {item.trait}
                        </h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
