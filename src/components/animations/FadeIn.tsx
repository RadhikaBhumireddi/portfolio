import React from 'react';
import { useInView } from '../hooks/useInView';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeIn = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 700,
  className = '' 
}: FadeInProps) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translateY(20px)';
      case 'down': return 'translateY(-20px)';
      case 'left': return 'translateX(20px)';
      case 'right': return 'translateX(-20px)';
      default: return 'translateY(20px)';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transform: inView ? 'translate(0)' : getTransform(),
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

export default FadeIn;