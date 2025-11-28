import { useState, useEffect, useRef } from 'react';

interface UseAnimatedNumberOptions {
  targetValue: number;
  duration?: number;
  startValue?: number;
  enabled?: boolean;
}

export function useAnimatedNumber({ 
  targetValue, 
  duration = 2000, 
  startValue = 0,
  enabled = true 
}: UseAnimatedNumberOptions): number {
  const [currentValue, setCurrentValue] = useState(startValue);
  const rafRef = useRef<number | null>(null);
  const prevTargetRef = useRef(targetValue);

  useEffect(() => {
    if (!enabled) {
      setCurrentValue(targetValue);
      return;
    }

    // Cancel any ongoing animation
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }

    const startTime = Date.now();
    const startVal = currentValue; // Start from current value for smoother transitions
    const difference = targetValue - startVal;

    // Skip animation if difference is negligible
    if (Math.abs(difference) < 1) {
      setCurrentValue(targetValue);
      return;
    }

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const newValue = Math.floor(startVal + difference * easeOutCubic);
      
      setCurrentValue(newValue);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentValue(targetValue);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    prevTargetRef.current = targetValue;
    
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [targetValue, duration, enabled]); // Removed startValue from deps

  return currentValue;
}

