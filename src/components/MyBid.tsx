import { TrendingUp } from 'lucide-react';

export function MyBid() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-cyan-400" />
        <h2 className="text-xl font-semibold">My Bid</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-400 mb-2 block">Budget Allocation</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="text"
              placeholder="0.00"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pl-8 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400 mb-2 block">Maximum Price Limit</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="text"
              placeholder="0.00"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pl-8 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        <button className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors">
          Place Bid
        </button>
      </div>
    </div>
  );
}

