import EducationCard from './EducationCard';
import { useInView } from './hooks/useInView';

const educationData = [
  {
    degree: "Master's in Computer Science",
    institution: "Virginia Tech",
    period: "2023 - 2025",
    description: "Specialized in Artificial Intelligence and Machine Learning. GPA: 3.93/4.0",
    courses: ["Advanced Algorithms", "Machine Learning", "Distributed Systems", "Web Application Development", "Cloud Computing", "Information security"],
  },
  {
    degree: "Bachelor's in Electronics and Communication Engineering",
    institution: "Raghu Engineering College",
    period: "2017 - 2021",
    description: "Foundation in computer science and software development. GPA: 9.2/10",
    courses: ["Data Structures", "C", "Operating Systems", "Computer Networks", "Database Management Systems"],
  }
];

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Education
        </h2>
        <div
          ref={ref}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              {...edu}
              isVisible={inView}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
