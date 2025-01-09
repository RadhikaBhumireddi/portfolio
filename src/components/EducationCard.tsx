interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
  courses: string[];
  isVisible: boolean;
  delay: number;
}

const EducationCard = ({
  degree,
  institution,
  period,
  description,
  courses,
  isVisible,
  delay
}: EducationCardProps) => {
  return (
    <div
      className={`bg-gray-800 rounded-lg p-6 transform transition-all duration-700 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-wrap justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{degree}</h3>
          <p className="text-purple-400">{institution}</p>
        </div>
        <span className="text-emerald-400">{period}</span>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {courses.map((course, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
          >
            {course}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;
