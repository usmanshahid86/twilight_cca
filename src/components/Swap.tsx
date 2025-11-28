import { ArrowLeftRight, Circle } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';
import { useThemeClasses } from '../hooks/useThemeClasses';

interface SwapProps {
  poolDepth?: number;
  maximumPrice?: number;
  slippage?: number;
  volume24h?: number;
}

export function Swap({
  poolDepth = 8542000,
  maximumPrice = 87.32,
  slippage = 0.3,
  volume24h = 1254000,
}: SwapProps) {
  const themeClasses = useThemeClasses();
  const tiltRef = useTilt({ maxTilt: 5, scale: 1.02 });

  return (
    <div ref={tiltRef} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 h-full" style={{ transformStyle: 'preserve-3d' }}>
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <ArrowLeftRight className={`w-4 h-4 sm:w-5 sm:h-5 ${themeClasses.textAccent}`} />
        <h2 className="text-lg sm:text-xl font-semibold">Swap</h2>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="0.0"
            className={`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none ${themeClasses.focusBorderAccent} transition-colors`}
          />
          <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
            <Circle className="w-3 h-3 sm:w-4 sm:h-4" />
            USDC
          </span>
        </div>

        <div className="flex justify-center">
          <button className={`bg-gray-800 p-1.5 sm:p-2 rounded-lg border border-gray-700 ${themeClasses.hoverBorderAccent} transition-colors`}>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="0.0"
            className={`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none ${themeClasses.focusBorderAccent} transition-colors`}
          />
          <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
            <Circle className="w-3 h-3 sm:w-4 sm:h-4" />
            mBTC
          </span>
        </div>

        <button className={`w-full ${themeClasses.bgAccent} ${themeClasses.textAccentHover} font-semibold py-2.5 sm:py-3 rounded-lg ${themeClasses.hoverBgAccentHover} transition-colors text-sm sm:text-base`}>
          Swap
        </button>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-700">
          <div>
            <div className="text-xs sm:text-sm text-gray-400 mb-1">Pool Depth</div>
            <div className="text-xs sm:text-sm font-semibold">${poolDepth.toLocaleString()}</div>
          </div>
          <div>
            <div className="text-xs sm:text-sm text-gray-400 mb-1">Maximum Price (USD)</div>
            <div className="text-xs sm:text-sm font-semibold">${maximumPrice.toFixed(2)}</div>
          </div>
          <div>
            <div className="text-xs sm:text-sm text-gray-400 mb-1">Slippage</div>
            <div className="text-xs sm:text-sm font-semibold">{slippage}%</div>
          </div>
          <div>
            <div className="text-xs sm:text-sm text-gray-400 mb-1">24h Volume</div>
            <div className="text-xs sm:text-sm font-semibold">${volume24h.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

