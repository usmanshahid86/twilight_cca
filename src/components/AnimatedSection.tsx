import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in';
}

export function AnimatedSection({ 
  children, 
  delay = 0, 
  className = '',
  animation = 'fade-in-up'
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClass = animation === 'fade-in-up' ? 'animate-fade-in-up' : 'animate-fade-in';

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

