import { Code2, Server, Palette } from 'lucide-react';
import ServiceCard from './ServiceCard';
import FadeIn from './animations/FadeIn';

const services = [
  {
    icon: <Code2 className="w-12 h-12 text-purple-400" />,
    title: 'Frontend Development',
    description: 'Crafting responsive and intuitive user interfaces using modern frameworks and best practices.',
  },
  {
    icon: <Server className="w-12 h-12 text-emerald-400" />,
    title: 'Backend Development',
    description: 'Building scalable server-side applications and RESTful APIs with efficient database management.',
  },
  {
    icon: <Palette className="w-12 h-12 text-purple-400" />,
    title: 'UI/UX Design',
    description: 'Creating beautiful and functional designs that enhance user experience and engagement.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            About Me
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
