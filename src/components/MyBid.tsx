import { HandCoins } from 'lucide-react';
import { useTilt } from '../hooks/useTilt';
import { useThemeClasses } from '../hooks/useThemeClasses';

interface Bid {
  id: string;
  budget: number;
  maxPrice: number;
}

interface MyBidProps {
  activeBids?: Bid[];
}

function ActiveBids({ 
  activeBids = []
}: { activeBids?: Bid[] }) {
  const themeClasses = useThemeClasses();
  const tiltRef = useTilt({ maxTilt: 5, scale: 1.02 });

  return (
    <div ref={tiltRef} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6" style={{ transformStyle: 'preserve-3d' }}>
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <HandCoins className={`w-4 h-4 sm:w-5 sm:h-5 ${themeClasses.textAccent}`} />
        <h2 className="text-lg sm:text-xl font-semibold">Active Bids</h2>
        {activeBids.length > 0 && (
          <span className="text-xs sm:text-sm text-gray-400">({activeBids.length})</span>
        )}
      </div>

      {activeBids.length === 0 ? (
        <div className="text-xs sm:text-sm text-gray-500 text-center py-4">
          No active bids
        </div>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {activeBids.map((bid, index) => (
            <div key={bid.id || index} className="flex justify-between items-center gap-4 pb-3 border-b border-gray-700 last:border-0 last:pb-0">
              <div>
                <label className="text-xs sm:text-sm text-gray-400 mb-1 block">Budget</label>
                <div className="text-sm sm:text-base font-semibold">
                  ${bid.budget.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
              <div>
                <label className="text-xs sm:text-sm text-gray-400 mb-1 block">Max. Price</label>
                <div className="text-sm sm:text-base font-semibold">
                  ${bid.maxPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function MyBid({ 
  activeBids = []
}: MyBidProps) {
  const themeClasses = useThemeClasses();
  const tiltRef = useTilt({ maxTilt: 5, scale: 1.02 });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
      <div ref={tiltRef} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-4 sm:p-5 md:p-6" style={{ transformStyle: 'preserve-3d' }}>
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <HandCoins className={`w-4 h-4 sm:w-5 sm:h-5 ${themeClasses.textAccent}`} />
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
                className={`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 pl-7 sm:pl-8 text-sm sm:text-base focus:outline-none ${themeClasses.focusBorderAccent} transition-colors`}
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
                className={`w-full bg-gray-800 border border-gray-700 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 pl-7 sm:pl-8 text-sm sm:text-base focus:outline-none ${themeClasses.focusBorderAccent} transition-colors`}
              />
            </div>
          </div>

          <button className={`w-full ${themeClasses.bgAccent} ${themeClasses.textAccentHover} font-semibold py-2.5 sm:py-3 rounded-lg ${themeClasses.hoverBgAccentHover} transition-colors text-sm sm:text-base`}>
            Place Bid
          </button>
        </div>
      </div>

      <ActiveBids 
        activeBids={activeBids}
      />
    </div>
  );
}

