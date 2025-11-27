import { useEffect, useRef } from 'react';

interface UseTiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  transition?: string;
}

export function useTilt(options: UseTiltOptions = {}) {
  const {
    maxTilt = 5,
    perspective = 1000,
    scale = 1.02,
    transition = 'transform 0.3s ease-out',
  } = options;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      const rotateX = (mouseY / rect.height) * -maxTilt;
      const rotateY = (mouseX / rect.width) * maxTilt;
      
      element.style.transform = `
        perspective(${perspective}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${scale})
      `;
    };

    const handleMouseLeave = () => {
      if (element) {
        element.style.transform = `
          perspective(${perspective}px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `;
      }
    };

    const handleMouseEnter = () => {
      if (element) {
        element.style.transition = transition;
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [maxTilt, perspective, scale, transition]);

  return ref;
}

