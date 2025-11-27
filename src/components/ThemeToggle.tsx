import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs sm:text-sm text-gray-400">Theme:</span>
      <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1 border border-gray-700">
        <button
          onClick={() => setTheme('ice')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 ${
            theme === 'ice'
              ? 'bg-cyan-400 text-black shadow-lg'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Ice
        </button>
        <button
          onClick={() => setTheme('fire')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 ${
            theme === 'fire'
              ? 'bg-red-500 text-white shadow-lg'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Fire
        </button>
      </div>
    </div>
  );
}

