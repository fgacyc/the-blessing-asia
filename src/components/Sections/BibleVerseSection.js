import React from 'react';
import Container from '../Layout/Container';
import useResponsive from '../../hooks/useResponsive';

const BibleVerseSection = () => {
  const { isMobile } = useResponsive();

  // Ticket icon component
  const TicketIcon = () => (
    <div className="relative">
      {/* Pure Black Background - No glow effect */}

      {/* Ticket Image */}
      <div className="relative w-16 h-20 lg:w-20 lg:h-24 mx-auto">
        <img
          src="/Verse.png"
          alt="Verse"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-black">
      {/* Pure Black Background - No glow effects */}

      <Container>
        {/* Black Container */}
        <div className="relative p-8 lg:p-12 rounded-2xl bg-black border border-gray-700/50">
          {/* Pure Black Background */}

          <div className="relative z-10">
            {isMobile ? (
              // Mobile Layout: Vertical Stack
              <div className="text-center space-y-8">
                {/* Ticket Icon */}
                <div className="flex justify-center">
                  <TicketIcon />
                </div>

                {/* Bible Verse Text */}
                <div className="space-y-6">
                  {/* Chinese Text */}
                  <p className="text-white text-lg lg:text-xl leading-relaxed font-medium">
                    "看哪，我要做一件新事，如今要发现；你们岂不知道吗？"
                  </p>

                  {/* English Text */}
                  <p className="text-white text-base lg:text-lg leading-relaxed">
                    Behold, I will do a new thing; now it shall spring forth; shall ye not know it?
                  </p>

                  {/* Bible Reference */}
                  <p className="text-gray-400 text-sm lg:text-base">
                    以赛亚书 43:19 | Isaiah 43:19
                  </p>
                </div>
              </div>
            ) : (
              // Webview Layout: Horizontal with icon positioned to the left
              <div className="flex items-center space-x-8 lg:space-x-12">
                {/* Ticket Icon - positioned more to the left */}
                <div className="flex-shrink-0 mr-4">
                  <TicketIcon />
                </div>

                {/* Bible Verse Text */}
                <div className="flex-1 space-y-4">
                  {/* Chinese Text */}
                  <p className="text-white text-xl lg:text-2xl leading-relaxed font-medium">
                    "看哪，我要做一件新事，如今要发现；你们岂不知道吗？"
                  </p>

                  {/* English Text */}
                  <p className="text-white text-lg lg:text-xl leading-relaxed">
                    Behold, I will do a new thing; now it shall spring forth; shall ye not know it?
                  </p>

                  {/* Bible Reference */}
                  <p className="text-gray-400 text-base lg:text-lg">
                    以赛亚书 43:19 | Isaiah 43:19
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BibleVerseSection;
