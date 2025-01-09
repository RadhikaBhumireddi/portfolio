import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex items-center space-x-4">
      <a href="https://github.com" className="text-gray-300 hover:text-purple-400 transition-colors">
        <Github size={20} />
      </a>
      <a href="https://www.linkedin.com/in/radhika-bhumireddi/" className="text-gray-300 hover:text-purple-400 transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="mailto:radhikabhumireddi@gmail.com" className="text-gray-300 hover:text-purple-400 transition-colors">
        <Mail size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
