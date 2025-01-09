import React from 'react';
import ScaleIn from './animations/ScaleIn';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <ScaleIn delay={delay}>
      <div className="p-6 bg-gray-800 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </ScaleIn>
  );
};

export default ServiceCard;