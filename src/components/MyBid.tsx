import { TrendingUp } from 'lucide-react';

export function MyBid() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
        <h2 className="text-lg sm:text-xl font-semibold">My Bid</h2>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <div>
          <label className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2 block">Budget Allocation</label>
          <div className="relative">
            <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base">$</span>
            <input
              type="text"
              placeholder="0.00"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 pl-7 sm:pl-8 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2 block">Maximum Price Limit</label>
          <div className="relative">
            <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm sm:text-base">$</span>
            <input
              type="text"
              placeholder="0.00"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 pl-7 sm:pl-8 text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        <button className="w-full bg-cyan-400 text-black font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-cyan-300 transition-colors text-sm sm:text-base">
          Place Bid
        </button>
      </div>
    </div>
  );
}

