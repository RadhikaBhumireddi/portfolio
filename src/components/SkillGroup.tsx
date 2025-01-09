import React from 'react';
import SkillItem from './SkillItem';
import ScaleIn from './animations/ScaleIn';

interface SkillGroupProps {
  category: string;
  icon: React.ReactNode;
  items: string[];
  delay?: number;
}

const SkillGroup = ({ category, icon, items, delay = 0 }: SkillGroupProps) => {
  return (
    <ScaleIn delay={delay}>
      <div className="p-6 bg-gray-900 rounded-lg transform transition-all duration-300 hover:scale-105">
        <div className="flex items-center space-x-3 mb-4">
          {icon}
          <h3 className="text-xl font-semibold text-white">
            {category}
          </h3>
        </div>
        <ul className="space-y-3">
          {items.map((skill, index) => (
            <SkillItem
              key={skill}
              skill={skill}
              delay={delay + (index * 100)}
            />
          ))}
        </ul>
      </div>
    </ScaleIn>
  );
};

export default SkillGroup;
