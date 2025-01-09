import { ArrowDown } from 'lucide-react';
import FadeIn from './animations/FadeIn';
import radhika from '../assets/img/radhika.jpeg';

const Hero = () => {
  return (
      <section id="hero" className="min-h-screen flex items-center relative bg-gray-950">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-emerald-500/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col lg:flex-row items-center lg:items-stretch w-full">
          {/* Left Section: Image */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <FadeIn delay={200}>
              <img
                  src={radhika}
                  alt="Your Name"
                  className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg transform transition-transform duration-1000 ease-out motion-safe:animate-fade-in-left"
              />
            </FadeIn>
          </div>

          {/* Right Section: Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left space-y-8">
            <FadeIn delay={400}>
              <h1 className="text-4xl sm:text-6xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-emerald-400 text-transparent bg-clip-text">
                Full Stack Developer
              </span>
              </h1>
            </FadeIn>
            <FadeIn delay={600}>
              <p className="text-xl sm:text-2xl text-gray-300">
                Building modern web applications with passion and precision
              </p>
            </FadeIn>
            <FadeIn delay={800}>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                    href="#contact"
                    className="px-8 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                    href="#projects"
                    className="px-8 py-3 border border-emerald-500 text-emerald-400 rounded-full hover:bg-emerald-500/10 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </section>
  );
};

export default Hero;
