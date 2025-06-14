
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Clara Onyango
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your premium virtual assistant partner. Helping visionaries focus while I manage the details with professionalism, reliability, and results-driven excellence.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:claraonyango8@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 group"
                title="Email"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                  📧
                </span>
              </a>
              <a
                href="https://wa.me/447440536885"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200 group"
                title="WhatsApp"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                  📱
                </span>
              </a>
              <a
                href="tel:+447440536885"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 group"
                title="Phone"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                  📞
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Experience', href: '#experience' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Calendar Management',
                'Email Support',
                'Client Relations',
                'CRM Management',
                'Administrative Tasks',
                'Project Coordination'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg font-semibold text-white">Clara Onyango</p>
              <p className="text-gray-300">Premium Virtual Assistant</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300">
                📧 <a href="mailto:claraonyango8@gmail.com" className="hover:text-white transition-colors">claraonyango8@gmail.com</a>
              </p>
              <p className="text-gray-300">
                📱 <a href="tel:+447440536885" className="hover:text-white transition-colors">+44 7440 536885</a>
              </p>
              <p className="text-gray-300">🌍 Remote - Global Service</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Clara Onyango. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
