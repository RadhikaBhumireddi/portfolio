import SkillGroup from './SkillGroup';
import FadeIn from './animations/FadeIn';
import { Code2, Server, Cloud, Wrench } from 'lucide-react';

const skillGroups = [
  {
    category: 'Frontend',
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'JavaScript'],
  },
  {
    category: 'Backend',
    icon: <Server className="w-6 h-6 text-emerald-400" />,
    items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'Java', 'Spring Boot'],
  },
  {
    category: 'DevOps',
    icon: <Cloud className="w-6 h-6 text-purple-400" />,
    items: ['Docker', 'AWS', 'CI/CD', 'Git', 'Jenkins', 'Linux'],
  },
  {
    category: 'Tools',
    icon: <Wrench className="w-6 h-6 text-emerald-400" />,
    items: ['VS Code', 'Figma', 'Postman', 'Jira', 'Confluence', 'Slack'],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Skills & Technologies
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.category}
              {...group}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
