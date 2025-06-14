
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand & About */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  Clara Onyango
                </h3>
                <p className="text-blue-400 font-medium text-lg">Your Virtual Assistant Partner</p>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed max-w-lg">
                Empowering businesses and entrepreneurs with premium virtual assistance services. 
                I handle the details so you can focus on what matters most - growing your vision.
              </p>              {/* Enhanced Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <a 
                  href="mailto:claraonyango8@gmail.com"
                  className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                      <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                    </div>                    <div className="flex-1 min-w-0 overflow-hidden">
                      <p className="text-sm text-gray-400 mb-2 font-medium">Email Address</p>
                      <div className="flex flex-col space-y-1">
                        <p className="text-white font-semibold group-hover:text-blue-300 transition-colors text-sm leading-tight truncate md:text-base">
                          claraonyango8@gmail.com
                        </p>
                        <p className="text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
                          Click to send email
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                
                <a 
                  href="tel:+447440536885"
                  className="bg-gradient-to-r from-gray-800/60 to-gray-800/40 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 group transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                      <Phone className="w-6 h-6 text-green-400 group-hover:text-green-300" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">Phone Number</p>
                      <p className="text-white font-medium group-hover:text-green-300 transition-colors">
                        +44 7440 536885
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* WhatsApp Quick Action */}
              <div className="flex justify-center sm:justify-start">
                <a
                  href="https://wa.me/447440536885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                  title="Chat on WhatsApp"
                >
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm">💬</span>
                  </div>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About Me', href: '#about' },
                  { name: 'Services', href: '#services' },
                  { name: 'Use Cases', href: '#use-cases' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Testimonials', href: '#testimonials' },
                  { name: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services & Availability */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Core Services</h4>
              <ul className="space-y-3 mb-8">
                {[
                  'Administrative Support',
                  'Calendar Management',
                  'Email Management',
                  'CRM Administration',
                  'Client Communications',
                  'Project Coordination'
                ].map((service) => (
                  <li key={service} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{service}</span>
                  </li>
                ))}
              </ul>

              {/* Availability */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-medium text-sm">Available Now</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-gray-400 text-sm">Remote • Global Service</span>
                </div>
              </div>
            </div>
          </div>          {/* Bottom Section */}
          <div className="border-t border-gray-700/50 mt-16 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Clara Onyango. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Crafted with precision and professionalism
              </p>
            </div>
          </div>        </div>
      </div>
    </footer>
  );
};

export default Footer;
