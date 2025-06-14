
const ToolsSection = () => {
  const tools = [
    { name: 'Google Workspace', category: 'Productivity', logo: '/logos/Googleworkspace.png' },
    { name: 'Microsoft Office', category: 'Office Suite', logo: '/logos/microsoft 365.png' },
    { name: 'HubSpot', category: 'CRM', logo: '/logos/hubspot.png' },
    { name: 'Trello', category: 'Project Management', logo: '/logos/Trello.png' },
    { name: 'Slack', category: 'Communication', logo: '/logos/slack.png' },
    { name: 'Zoom', category: 'Video Conferencing', logo: '/logos/zoom.jpeg' },
    { name: 'WhatsApp', category: 'Messaging', logo: '/logos/whatsapp.jpeg' },
    { name: 'Calendly', category: 'Scheduling', logo: '/logos/calendly.png' },
    { name: 'Notion', category: 'Documentation', logo: '/logos/notion.png' },
    { name: 'Canva', category: 'Design', logo: '/logos/canva.jpeg' },
    { name: 'Asana', category: 'Task Management', logo: '/logos/asana.jpeg' },
    { name: 'Mailchimp', category: 'Email Marketing', logo: '/logos/mailchimp.png' }
  ];
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tools I've Mastered
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
              className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-200 hover:scale-102 cursor-pointer"
            >
              {/* Logo */}
              <div className="h-16 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <img 
                  src={tool.logo} 
                  alt={`${tool.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
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
        <div className="text-center">
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
