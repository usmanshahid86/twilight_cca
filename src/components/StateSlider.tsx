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
  const handleClick = (index: number) => {
    onChange(states[index]);
  };

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">Auction State:</span>
      <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-1 border border-gray-700">
        {states.map((state, index) => (
          <button
            key={state}
            onClick={() => handleClick(index)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-200 ${
              value === state
                ? 'bg-cyan-400 text-black shadow-lg'
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

