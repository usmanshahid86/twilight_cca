import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[10px] sm:text-xs text-gray-400">Theme:</span>
      <div className="flex items-center gap-1 bg-gray-800 rounded-md p-0.5 border border-gray-700">
        <button
          onClick={() => setTheme('ice')}
          className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-sm transition-all duration-200 ${
            theme === 'ice'
              ? 'bg-cyan-400 text-black shadow-lg'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Ice
        </button>
        <button
          onClick={() => setTheme('fire')}
          className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-sm transition-all duration-200 ${
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

