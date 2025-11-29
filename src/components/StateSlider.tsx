import { useThemeClasses } from '../hooks/useThemeClasses';

interface StateSliderProps {
  value: 'pre-auction' | 'auction-live' | 'post-auction';
  onChange: (value: 'pre-auction' | 'auction-live' | 'post-auction') => void;
}

const states: Array<'pre-auction' | 'auction-live' | 'post-auction'> = ['pre-auction', 'auction-live', 'post-auction'];
const stateLabels = {
  'pre-auction': 'Pre-Auction',
  'auction-live': 'Auction Live',
  'post-auction': 'Post-Auction',
};

export function StateSlider({ value, onChange }: StateSliderProps) {
  const themeClasses = useThemeClasses();
  const handleClick = (index: number) => {
    onChange(states[index]);
  };

  return (
    <div className="flex items-center gap-1.5">
      <span className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">Auction State:</span>
      <div className="flex items-center gap-1 bg-gray-800 rounded-md p-0.5 border border-gray-700">
        {states.map((state, index) => (
          <button
            key={state}
            onClick={() => handleClick(index)}
            className={`px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-sm transition-all duration-200 whitespace-nowrap ${
              value === state
                ? `${themeClasses.bgAccent} ${themeClasses.textAccentHover} shadow-lg`
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {stateLabels[state]}
          </button>
        ))}
      </div>
    </div>
  );
}

