import FadeIn from './animations/FadeIn';

interface SkillItemProps {
  skill: string;
  delay?: number;
}

const SkillItem = ({ skill, delay = 0 }: SkillItemProps) => {
  return (
    <FadeIn delay={delay} direction="left">
      <li className="flex items-center space-x-2 text-gray-300">
        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full" />
        <span>{skill}</span>
      </li>
    </FadeIn>
  );
};

export default SkillItem;
