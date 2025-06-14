
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-100 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Your{' '}
                <span className="gradient-text">Billion-Dollar</span>
                <br />
                Virtual Assistant Partner
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Helping visionaries focus while I manage the details.
                <br />
                <span className="text-blue-600 font-semibold">Proactive. Reliable. Results-driven.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                >
                  Let's Work Together
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200"
                >
                  View My Resume
                </Button>
              </div>
            </div>

            {/* Floating Keywords */}
            <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
              {['Proactive', 'Reliable', 'Calm under pressure', 'Results-driven'].map((keyword, index) => (
                <span
                  key={keyword}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-blue-700 font-medium shadow-lg animate-bounce-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="animate-fade-in-right">
              <div className="relative w-full max-w-md mx-auto">
                <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-blue-800">
                    <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">CO</span>
                    </div>
                    <p className="text-lg font-semibold">Clara Onyango</p>
                    <p className="text-sm opacity-80">Virtual Assistant Expert</p>
                  </div>
                </div>
                
                {/* Floating Tool Icons */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">📅</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce-in" style={{ animationDelay: '0.7s' }}>
                  <span className="text-2xl">💬</span>
                </div>
                <div className="absolute top-1/2 -left-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce-in" style={{ animationDelay: '0.9s' }}>
                  <span className="text-lg">📊</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-blue-600" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
