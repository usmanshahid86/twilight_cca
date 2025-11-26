import { Circle } from 'lucide-react';

export function Swap() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 h-full">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
        <h2 className="text-lg sm:text-xl font-semibold">Swap</h2>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="0.0"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
            <Circle className="w-3 h-3 sm:w-4 sm:h-4" />
            USDC
          </span>
        </div>

        <div className="flex justify-center">
          <button className="bg-gray-800 p-1.5 sm:p-2 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="0.0"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
            <Circle className="w-3 h-3 sm:w-4 sm:h-4" />
            mBTC
          </span>
        </div>

        <button className="w-full bg-cyan-400 text-black font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-cyan-300 transition-colors text-sm sm:text-base">
          Connect Wallet to Swap
        </button>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-gray-700">
          <div>
            <div className="text-xs sm:text-sm text-gray-400 mb-1">Pool Depth</div>
            <div className="text-xs sm:text-sm font-semibold">$8,542,000</div>
          </div>
          <div>
            <div className="text-xs sm:text-sm text-gray-400 mb-1">Maximum Price (USD)</div>
            <div className="text-xs sm:text-sm font-semibold">$87.32</div>
          </div>
          <div>
            <div className="text-xs sm:text-sm text-gray-400 mb-1">Slippage</div>
            <div className="text-xs sm:text-sm font-semibold">0.3%</div>
          </div>
          <div>
            <div className="text-xs sm:text-sm text-gray-400 mb-1">24h Volume</div>
            <div className="text-xs sm:text-sm font-semibold">$1,254,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

