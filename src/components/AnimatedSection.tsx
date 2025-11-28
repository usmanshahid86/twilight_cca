import { ReactNode, memo } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in';
}

export const AnimatedSection = memo(function AnimatedSection({ 
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
      className={`overflow-visible ${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
});

