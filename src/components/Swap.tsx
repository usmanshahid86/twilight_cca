import { Circle } from 'lucide-react';

export function Swap() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 h-full">
      <div className="flex items-center gap-2 mb-6">
        <Circle className="w-5 h-5 text-cyan-400" />
        <h2 className="text-xl font-semibold">Swap</h2>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="0.0"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-4 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-sm text-gray-400">
            <Circle className="w-4 h-4" />
            USDC
          </span>
        </div>

        <div className="flex justify-center">
          <button className="bg-gray-800 p-2 rounded-lg border border-gray-700 hover:border-cyan-400 transition-colors">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="0.0"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-4 focus:outline-none focus:border-cyan-400 transition-colors"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-sm text-gray-400">
            <Circle className="w-4 h-4" />
            mBTC
          </span>
        </div>

        <button className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors">
          Connect Wallet to Swap
        </button>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
          <div>
            <div className="text-sm text-gray-400 mb-1">Pool Depth</div>
            <div className="text-sm font-semibold">$8,542,000</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">Maximum Price (USD)</div>
            <div className="text-sm font-semibold">$87.32</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">Slippage</div>
            <div className="text-sm font-semibold">0.3%</div>
          </div>
          <div>
            <div className="text-sm text-gray-400 mb-1">24h Volume</div>
            <div className="text-sm font-semibold">$1,254,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

