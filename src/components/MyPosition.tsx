import { Circle } from 'lucide-react';

export function MyPosition() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 h-fit">
      <div className="flex items-center gap-2 mb-6">
        <Circle className="w-5 h-5 text-cyan-400" />
        <h2 className="text-xl font-semibold">My Position</h2>
      </div>

      <div className="space-y-6">
        <div>
          <div className="text-sm text-gray-400 mb-2">Token Balance</div>
          <div className="text-3xl font-bold">
            <span className="text-cyan-400">25.4</span>
            <span className="text-xl text-gray-400 ml-2">mBTC</span>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-400 mb-2">Average Entry Price</div>
          <div className="text-2xl font-bold">$562.89</div>
        </div>
      </div>
    </div>
  );
}

