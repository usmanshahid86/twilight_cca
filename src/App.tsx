import { Wallet, Circle, Users, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Swap } from './components/Swap';
import { MyPosition } from './components/MyPosition';
import { Auction } from './components/Auction';
import { MyBid } from './components/MyBid';

function App() {
  const [countdown1, setCountdown1] = useState({ hours: 2, minutes: 15, seconds: 34 });
  const [countdown2, setCountdown2] = useState({ hours: 4, minutes: 45, seconds: 22 });
  const [endAuction, setEndAuction] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown1(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });

      setCountdown2(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: { hours: number; minutes: number; seconds: number }) => {
    return `${String(time.hours).padStart(2, '0')}:${String(time.minutes).padStart(2, '0')}:${String(time.seconds).padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Circle className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-semibold">TWILIGHT ICO</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">How to ICO</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Twilight Docs</a>
            <button className="flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-colors">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Twilight Token Auction</h1>
          <p className="text-xl text-gray-400">Privacy Perpetual DEX</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Total Bids</div>
            <div className="text-4xl font-bold text-cyan-400">1,427</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Active Bidders</div>
            <div className="text-4xl font-bold text-cyan-400">892</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Total Value Locked</div>
            <div className="text-4xl font-bold text-cyan-400">$14,250,000</div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <label className="flex items-center gap-3 cursor-pointer">
            <span className="text-sm text-gray-400">End Auction</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={endAuction}
                onChange={(e) => setEndAuction(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-14 h-7 rounded-full transition-colors duration-200 ${
                  endAuction ? 'bg-cyan-400' : 'bg-gray-700'
                }`}
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
                    endAuction ? 'translate-x-7' : 'translate-x-1'
                  } mt-0.5`}
                />
              </div>
            </div>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-6 items-stretch">
          <div className="flex flex-col h-full">
            {endAuction ? <Swap /> : <Auction countdown1={countdown1} countdown2={countdown2} formatTime={formatTime} />}
          </div>
          <div className="flex flex-col gap-6 h-full">
            {!endAuction && <MyBid />}
            <MyPosition />
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 mt-12 py-6 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">© 2024 Twilight Protocol. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Governance</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Users className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <DollarSign className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
