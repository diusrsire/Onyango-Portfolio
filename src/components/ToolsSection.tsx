
import { useState, useEffect, useRef } from 'react';

const ToolsSection = () => {
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

  const tools = [
    { name: 'Google Workspace', category: 'Productivity', icon: '📧' },
    { name: 'Microsoft Office', category: 'Office Suite', icon: '📄' },
    { name: 'HubSpot', category: 'CRM', icon: '🔗' },
    { name: 'Trello', category: 'Project Management', icon: '📋' },
    { name: 'Slack', category: 'Communication', icon: '💬' },
    { name: 'Zoom', category: 'Video Conferencing', icon: '📹' },
    { name: 'WhatsApp', category: 'Messaging', icon: '📱' },
    { name: 'Calendly', category: 'Scheduling', icon: '🗓️' },
    { name: 'Notion', category: 'Documentation', icon: '📝' },
    { name: 'Canva', category: 'Design', icon: '🎨' },
    { name: 'Asana', category: 'Task Management', icon: '✅' },
    { name: 'Mailchimp', category: 'Email Marketing', icon: '📮' }
  ];

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tools I Master
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proficient in industry-leading tools and platforms to deliver seamless, efficient solutions for your business needs.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-200 hover:scale-102 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-105 transition-transform duration-200 text-center">
                {tool.icon}
              </div>

              {/* Tool Name */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors duration-200">
                {tool.name}
              </h3>

              {/* Category */}
              <p className="text-sm text-gray-500 text-center">
                {tool.category}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Always Learning, Always Adapting
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Technology evolves fast, and so do I. If there's a tool that can make your workflow better, I'll master it. 
              Your success isn't limited by my current toolkit—it's accelerated by my ability to quickly adopt new solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Quick Learner', 'Tech Adaptable', 'Process Optimizer', 'Efficiency Expert'].map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-white rounded-full text-blue-700 font-semibold shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
