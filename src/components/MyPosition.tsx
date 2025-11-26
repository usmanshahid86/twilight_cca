import { Circle } from 'lucide-react';

export function MyPosition() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6 h-fit">
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
        <h2 className="text-lg sm:text-xl font-semibold">My Position</h2>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div>
          <div className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Token Balance</div>
          <div className="text-2xl sm:text-3xl font-bold">
            <span className="text-cyan-400">25.4</span>
            <span className="text-lg sm:text-xl text-gray-400 ml-1 sm:ml-2">mBTC</span>
          </div>
        </div>

        <div>
          <div className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">Average Entry Price</div>
          <div className="text-xl sm:text-2xl font-bold">$562.89</div>
        </div>
      </div>
    </div>
  );
}

