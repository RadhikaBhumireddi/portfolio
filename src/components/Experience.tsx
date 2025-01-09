const Experience = () => {
  const experiences = [
    {
      company: 'Infosys pvt Ltd',
      role: 'Full Stack Developer',
      period: '2021 - 2023',
      description: [
        'Front-End Development: Developed new front-end features for web applications using React, implementing responsive and intuitive user interfaces that improved site engagement by 15%.',
        'Back-End Development: Built scalable back-end systems and microservices using Python and MongoDB, enabling support for 50% traffic growth year-over-year.',
        'Performance Optimization: Optimized load times by 35% through indexing and querying optimizations, enhancing overall site performance and user experience.',
        'Full-Stack Development: Designed and implemented new functionality based on business requirements, acting as full-stack developer on features from conception to launch.',
        'REST API: Spearheaded the development and maintenance of RESTful APIs using Spring Boot, resulting in a 20% increase in API performance. Implemented CRUD operations, managing over 100,000 database records efficiently with Hibernate ORM.',
        'REST API Security: Enhanced API security by integrating Spring Security, reducing security vulnerabilities by 30%.',
        'REST API Optimization: Optimized API response times by 40% through the implementation of caching mechanisms and database indexing strategies.',
        'REST API Testing: Conducted 200+ unit tests using JUnit and Mockito, ensuring 95% test coverage and robust API functionality.',
        'Bug Diagnosis and Resolution: Diagnosed and debugged defects and performance issues using ElasticSearch and Kibana, resolving over 100 tickets per quarter.',
        'Collaboration: Collaborated with cross-functional product and design teams to conceptualize solutions, actively contributing to agile development processes.'
      ],
    },
  ];

  return (
      <section id="experience" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-400"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-400 -translate-x-[7px]" />
                  <div className="bg-slate-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                      <span className="text-blue-400 italic">{exp.period}</span>
                    </div>
                    <div className="text-lg text-gray-300 mb-4 font-medium">{exp.role}</div>
                    <ul className="text-gray-400 list-disc list-inside space-y-2 pl-4">
                      {exp.description.map((item, i) => (
                          <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Experience;
