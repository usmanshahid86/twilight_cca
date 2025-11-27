interface AnnouncementBannerProps {
  state: 'pre-auction' | 'auction-live' | 'post-auction';
}

const messages = {
  'pre-auction': "Don't miss the only chance to get allocation for untraceable bitcoin privacy token",
  'auction-live': 'Twilight Token Auction is Live!',
  'post-auction': 'Auction has ended. Twilight tokens are now tradeable!',
};

export function AnnouncementBanner({ state }: AnnouncementBannerProps) {
  const message = messages[state];
  // Single message instance - only one copy visible at a time
  const messageWithSpacing = `${message}        •        `;

  return (
    <div className="bg-gradient-to-r from-cyan-400/20 via-cyan-400/10 to-cyan-400/20 border-b border-cyan-400/30 overflow-hidden py-2">
      <div className="relative w-full">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-sm sm:text-base text-cyan-400 font-medium px-4 inline-block">
            {messageWithSpacing}
          </span>
          <span className="text-sm sm:text-base text-cyan-400 font-medium px-4 inline-block ml-[100vw]">
            {messageWithSpacing}
          </span>
        </div>
      </div>
    </div>
  );
}

