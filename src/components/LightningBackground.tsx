import { memo } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const LightningBackground = memo(function LightningBackground() {
  const { theme } = useTheme();
  
  // Use electric border color #7df9ff for both themes
  const lightningColor = '#7df9ff';
  const glowColor = 'rgba(125, 249, 255, 0.4)';
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="lightning-glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: lightningColor, stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: lightningColor, stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        
        {/* Lightning bolt 1 */}
        <path
          d="M 150 0 L 130 180 L 180 180 L 140 350 L 200 200 L 160 200 L 180 0 Z"
          fill="url(#lightning-gradient)"
          filter="url(#lightning-glow)"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0;0.8;0;0.6;0;0"
            dur="4s"
            repeatCount="indefinite"
            begin="0s"
          />
        </path>
        
        {/* Lightning bolt 2 */}
        <path
          d="M 450 100 L 430 280 L 480 280 L 440 450 L 500 300 L 460 300 L 480 100 Z"
          fill="url(#lightning-gradient)"
          filter="url(#lightning-glow)"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0;0;0.7;0;0.5;0;0"
            dur="5s"
            repeatCount="indefinite"
            begin="1.2s"
          />
        </path>
        
        {/* Lightning bolt 3 */}
        <path
          d="M 750 50 L 730 230 L 780 230 L 740 400 L 800 250 L 760 250 L 780 50 Z"
          fill="url(#lightning-gradient)"
          filter="url(#lightning-glow)"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0.9;0;0.7;0;0;0"
            dur="4.5s"
            repeatCount="indefinite"
            begin="2.5s"
          />
        </path>
        
        {/* Lightning bolt 4 (right side) */}
        <path
          d="M 900 150 L 880 330 L 930 330 L 890 500 L 950 350 L 910 350 L 930 150 Z"
          fill="url(#lightning-gradient)"
          filter="url(#lightning-glow)"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0;0.6;0;0.8;0;0;0"
            dur="5.5s"
            repeatCount="indefinite"
            begin="3.8s"
          />
        </path>
        
        {/* Small lightning bolt 5 */}
        <path
          d="M 300 200 L 290 300 L 320 300 L 295 400 L 335 320 L 310 320 L 315 200 Z"
          fill="url(#lightning-gradient)"
          filter="url(#lightning-glow)"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0;0;0.5;0;0;0"
            dur="3.5s"
            repeatCount="indefinite"
            begin="1.8s"
          />
        </path>
        
        {/* Small lightning bolt 6 */}
        <path
          d="M 600 300 L 590 400 L 620 400 L 595 500 L 635 420 L 610 420 L 615 300 Z"
          fill="url(#lightning-gradient)"
          filter="url(#lightning-glow)"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0.7;0;0;0.9;0;0"
            dur="4.2s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </path>
      </svg>
      
      {/* Atmospheric glow effects */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 20% 30%, ${glowColor} 0%, transparent 40%), 
                       radial-gradient(circle at 50% 20%, ${glowColor} 0%, transparent 35%),
                       radial-gradient(circle at 80% 25%, ${glowColor} 0%, transparent 38%)`,
        }}
      />
    </div>
  );
});

