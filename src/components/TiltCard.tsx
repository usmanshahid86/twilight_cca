import { ReactNode } from 'react';
import { useTilt } from '../hooks/useTilt';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
}

export function TiltCard({ 
  children, 
  className = '',
  maxTilt = 5,
  scale = 1.02
}: TiltCardProps) {
  const tiltRef = useTilt({ maxTilt, scale });

  return (
    <div
      ref={tiltRef}
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

