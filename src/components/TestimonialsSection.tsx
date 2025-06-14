
import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      quote: "Clara is the most reliable person I've worked with. She made my coaching practice so much smoother and I can focus entirely on my clients.",
      author: "Sarah Mitchell",
      position: "Wellness Coach",
      rating: 5
    },
    {
      quote: "Having Clara as my virtual assistant is like having a COO for administrative tasks. She anticipates my needs and delivers beyond expectations.",
      author: "Michael Chen",
      position: "CEO, TechStart Inc.",
      rating: 5
    },
    {
      quote: "Clara bridges our entire remote operation. She's the glue that keeps us connected and efficient across different time zones.",
      author: "Emma Rodriguez",
      position: "Operations Manager",
      rating: 5
    },
    {
      quote: "I was drowning in emails and calendar chaos. Clara organized my entire system and now I actually have time to grow my business.",
      author: "David Thompson",
      position: "Business Consultant",
      rating: 5
    }
  ];
  return (
    <section className="py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don't just take my word for it—hear from the professionals who've experienced the difference firsthand.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl max-w-4xl mx-auto transition-opacity duration-500">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl lg:text-3xl text-gray-800 font-medium mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial 
                    ? 'bg-white' 
                    : 'bg-blue-300 hover:bg-blue-200'
                }`}
              />
            ))}
          </div>
        </div>        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-100">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-blue-100">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5⭐</div>
            <div className="text-blue-100">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
