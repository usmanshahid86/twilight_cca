import { useTheme } from '../contexts/ThemeContext';
import { colors } from '../utils/design-system';
import { useId, memo } from 'react';

export const BitcoinShield = memo(function BitcoinShield({ className = '', size = 120 }: { className?: string; size?: number }) {
  const { theme } = useTheme();
  const uniqueId = useId().replace(/:/g, '');
  
  // Get accent color based on theme
  const accentColor = theme === 'fire' ? colors.accent.red.base : colors.accent.cyan.base;
  
  const shieldGradientId = `shield-gradient-${uniqueId}`;
  const shieldGlowId = `shield-glow-${uniqueId}`;
  
  // Shield aspect ratio: viewBox is 160x140, so width/height = 160/140 = 1.143
  const aspectRatio = 160 / 140;
  
  return (
    <div className={`relative overflow-visible ${className}`} style={{ aspectRatio: `${aspectRatio}`, paddingLeft: '15%', paddingRight: '15%', paddingBottom: '15%', paddingTop: 0 }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 160 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Gradient for shield fill */}
          <linearGradient id={shieldGradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        
        {/* Shield shape with glow - wider */}
        <path
          d="M80 10 L120 25 L120 65 C120 85 105 100 80 110 C55 100 40 85 40 65 L40 25 Z"
          fill={`url(#${shieldGradientId})`}
          stroke={accentColor}
          strokeWidth="3"
          style={{ 
            filter: `drop-shadow(0 0 6px ${accentColor})`,
            willChange: 'filter'
          }}
        />
        
        {/* Bitcoin Symbol - Official from https://upload.wikimedia.org/wikipedia/commons/b/ba/BitcoinSign.svg */}
        <g transform="translate(80, 62)">
          <g transform="scale(0.18) translate(-136.8, -180)">
            <path 
              d="M217.021,167.042c18.631-9.483,30.288-26.184,27.565-54.007c-3.667-38.023-36.526-50.773-78.006-54.404l-0.008-52.741
              h-32.139l-0.009,51.354c-8.456,0-17.076,0.166-25.657,0.338L108.76,5.897l-32.11-0.003l-0.006,52.728
              c-6.959,0.142-13.793,0.277-20.466,0.277v-0.156l-44.33-0.018l0.006,34.282c0,0,23.734-0.446,23.343-0.013
              c13.013,0.009,17.262,7.559,18.484,14.076l0.01,60.083v84.397c-0.573,4.09-2.984,10.625-12.083,10.637
              c0.414,0.364-23.379-0.004-23.379-0.004l-6.375,38.335h41.817c7.792,0.009,15.448,0.13,22.959,0.19l0.028,53.338l32.102,0.009
              l-0.009-52.779c8.832,0.18,17.357,0.258,25.684,0.247l-0.009,52.532h32.138l0.018-53.249c54.022-3.1,91.842-16.697,96.544-67.385
              C266.916,192.612,247.692,174.396,217.021,167.042z M109.535,95.321c18.126,0,75.132-5.767,75.14,32.064
              c-0.008,36.269-56.996,32.032-75.14,32.032V95.321z M109.521,262.447l0.014-70.672c21.778-0.006,90.085-6.261,90.094,35.32
              C199.638,266.971,131.313,262.431,109.521,262.447z" 
              fill={accentColor}
            />
          </g>
        </g>
      </svg>
      
      {/* Additional outer glow ring - simplified */}
      <div
        className="absolute rounded-full opacity-20 pointer-events-none"
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle, ${accentColor} 0%, transparent 60%)`,
          willChange: 'opacity'
        }}
      />
    </div>
  );
});

