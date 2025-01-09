import React from 'react';
import { useInView } from '../hooks/useInView';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 700,
  className = '' 
}: ScaleInProps) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transform: inView ? 'scale(1)' : 'scale(0.9)',
        opacity: inView ? 1 : 0,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
};

export default ScaleIn;