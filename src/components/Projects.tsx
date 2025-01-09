import { Github, ExternalLink } from 'lucide-react';
import uninav from '../assets/img/uninav.png';
import ecommerce from '../assets/img/ecommerce.png'
import caringplates from '../assets/img/caringplates.png'

const Projects = () => {
  const projects = [
    {
      title: 'Caring Plates',
      description: 'In response to the dual challenges of hunger and food waste, our initiative "Caring Plates" aims to foster collaboration among individuals and organizations. By providing a platform for restaurant owners with surplus food to connect with those in need or NGOs, we facilitate efficient redistribution of excess food. Through our website, restaurant owners can list available surplus food, enabling easy requests for food pickup. We anticipate that "Caring Plates" will significantly enhance the redistribution of excess food, thus helping to alleviate hunger and reduce food waste.',
      image: caringplates,
      tech: ['React', 'Node.js', 'MongoDB', 'Redux', 'Java', 'Spring Boot'],
      github: 'https://github.com/RadhikaBhumireddi/Uninav',
      live: '',
    },
    {
      title: 'E-Commerence Bookstore',
      description: 'This e-commerce platform caters to a bookstore, allowing users to browse and select books for purchase. Constructed using React JS for the front end and Java for the back end, the site enables users to explore books across different genres and conveniently add them to their shopping cart. With meticulous attention to detail, the platform ensures a secure and hassle-free checkout process for a seamless user experience.',
      image: ecommerce,
      tech: ['Java', 'React', 'Html', 'CSS', 'MSSQL'],
      github: 'https://github.com/RadhikaBhumireddi/E-commerce-Bookstore',
      live: '',
    },
    {
      title: 'Uninav - University Navigation',
      description: 'Designed and implemented core features for the UniNav application using React and Spring Boot, ensuring efficient campus navigation and event organization for a large user base. Built real-time event updates and RSVP functionality, improving user engagement and simplifying event coordination.',
      image: uninav,
      tech: ['React', 'Java', 'Springboot', 'MongoDB', 'Typescript', 'Bootstrap'],
      github: 'https://github.com/RadhikaBhumireddi/Uninav',
      live: 'https://uninav-git-development-final-divakar007s-projects.vercel.app/uninav',
    },
  ];

  return (
      <section id="projects" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div
                    key={project.title}
                    className="bg-slate-700 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48 bg-gray-800">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          No Image Available
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed clamp-description">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 items-center">
                      {project.tech.map((tech) => (
                          <span
                              key={tech}
                              className="px-2 py-1 text-sm bg-blue-500/20 text-blue-400 rounded whitespace-nowrap"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                          href={project.github}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                      <a
                          href={project.live}
                          className="text-gray-300 hover:text-blue-400 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;
