
import { Button } from './ui/button';
import { ArrowDown, Mail, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Your Virtual Assistant Partner
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Helping visionaries focus while I manage the details.
                <br />
                <span className="text-blue-600 font-semibold">Proactive. Reliable. Results-driven.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-colors duration-200">
                    Let's Work Together
                  </Button>
                </a>
                <a href="mailto:claraonyango8@gmail.com">
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-colors duration-200">
                    Get in Touch
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-gray-600">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:claraonyango8@gmail.com" className="hover:text-blue-600 transition-colors">
                  claraonyango8@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📱</span>
                <a href="tel:+447440536885" className="hover:text-blue-600 transition-colors">
                  +44 7440 536885
                </a>              </div>
            </div>
          </div>          {/* Right Content - Clara's Professional Image */}
          <div className="relative">
            <div className="animate-fade-in-right">
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-100 p-1"><div className="overflow-hidden rounded-3xl bg-white">                    <img 
                      src="/Clara-new-profile.jpg" 
                      alt="Clara Onyango - Professional Virtual Assistant" 
                      className="w-full h-auto object-cover object-center"
                      loading="eager"
                    />
                  </div>
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-3xl"></div>
                </div>
                
                {/* Floating Tool Icons */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-100 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">📅</span>
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-100 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">💬</span>
                </div>
                <div className="absolute top-1/3 -left-10 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-100 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="absolute top-2/3 -right-10 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-100 transform hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✉️</span>
                </div>
                  {/* Professional Badge */}
                <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Your Virtual Assistant Partner
                </div>
              </div>
            </div>          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
