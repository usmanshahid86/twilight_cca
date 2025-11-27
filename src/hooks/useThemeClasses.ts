import { useTheme } from '../contexts/ThemeContext';

export function useThemeClasses() {
  const { theme } = useTheme();

  return {
    textAccent: theme === 'ice' ? 'text-cyan-400' : 'text-red-500',
    bgAccent: theme === 'ice' ? 'bg-cyan-400' : 'bg-red-500',
    borderAccent: theme === 'ice' ? 'border-cyan-400' : 'border-red-500',
    hoverBorderAccent: theme === 'ice' ? 'hover:border-cyan-400' : 'hover:border-red-500',
    hoverBgAccent: theme === 'ice' ? 'hover:bg-cyan-400' : 'hover:bg-red-500',
    bgAccentHover: theme === 'ice' ? 'bg-cyan-300' : 'bg-red-600',
    hoverBgAccentHover: theme === 'ice' ? 'hover:bg-cyan-300' : 'hover:bg-red-600',
    textAccentHover: theme === 'ice' ? 'text-black' : 'text-white',
    bgGradient: theme === 'ice' 
      ? 'bg-gradient-to-r from-cyan-400/20 via-cyan-400/10 to-cyan-400/20 border-b border-cyan-400/30'
      : 'bg-gradient-to-r from-red-500/20 via-red-500/10 to-red-500/20 border-b border-red-500/30',
    focusBorderAccent: theme === 'ice' ? 'focus:border-cyan-400' : 'focus:border-red-500',
    mainBackground: theme === 'ice' 
      ? 'bg-gradient-to-b from-black to-gray-950'
      : 'bg-gradient-to-b from-gray-900 to-gray-950',
    headerBackground: theme === 'ice' ? 'bg-black' : 'bg-gray-900',
  };
}
