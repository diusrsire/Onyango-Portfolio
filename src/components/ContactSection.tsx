import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';
const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const {
    toast
  } = useToast();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      // For production, you'd integrate with your preferred form service
      // For now, we'll simulate success and provide contact information
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Message Received!",
        description: "Thanks for reaching out! I'll get back to you within 24 hours via email or phone."
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Start Working Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to reclaim your time and supercharge your productivity? Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{
          animationDelay: '0.2s'
        }}>
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200" placeholder="Enter your full name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 resize-none" placeholder="Tell me about your needs and how I can help..." />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold transition-colors duration-200">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information & CTAs */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{
          animationDelay: '0.4s'
        }}>
            {/* Quick Contact */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:claraonyango8@gmail.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      claraonyango8@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+447440536885" className="text-green-600 hover:text-green-700 transition-colors">
                      +44 7440 536885
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-purple-600">Remote - Global Service</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a href="https://wa.me/447440536885" target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center">
                  Message on WhatsApp
                </a>
                <a href="mailto:claraonyango8@gmail.com" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center">
                  Send Email
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-blue-600 text-white rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Quick Response Guarantee
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⚡</span>
                  <span>24-hour email response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💬</span>
                  <span>Same-day WhatsApp replies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📞</span>
                  <span>Flexible call scheduling</span>
                </div>
              </div>
            </div>

            {/* Availability */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;