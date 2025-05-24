import React, { useState, useEffect } from 'react';
import Container from '../Layout/Container';
import useResponsive from '../../hooks/useResponsive';

const TicketsSection = () => {
  const { isMobile } = useResponsive();

  // Configurable countdown target date (you can change this)
  const [targetDate] = useState(new Date('2025-12-31T23:59:59').getTime());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Ticket icon component
  const TicketIcon = () => (
    <div className="relative">
      {/* Orange glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 to-amber-500/40 rounded-full blur-xl scale-150"></div>

      {/* Ticket Image */}
      <div className="relative w-16 h-20 lg:w-20 lg:h-24 mx-auto">
        <img
          src="/Ticket.png"
          alt="Ticket"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );

  // Countdown timer component
  const CountdownTimer = () => (
    <div className="flex items-center space-x-2 text-white text-sm">
      <div className="bg-orange-600 px-2 py-1 rounded">
        <span className="font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
        <div className="text-xs">days</div>
      </div>
      <div className="bg-orange-600 px-2 py-1 rounded">
        <span className="font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
        <div className="text-xs">hr</div>
      </div>
      <div className="bg-orange-600 px-2 py-1 rounded">
        <span className="font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <div className="text-xs">min</div>
      </div>
    </div>
  );

  return (
    <section id="tickets" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      <Container>
        {/* Gradient Container */}
        <div className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-b from-gray-500/20 via-gray-600/10 to-white/5 border border-gray-500/20">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-400/10 to-white/5 rounded-2xl"></div>

          <div className="relative z-10">
            {/* Chess Icon positioned at top right for both mobile and webview */}
            <div className="absolute top-0 right-0 z-20">
              <TicketIcon />
            </div>

            {isMobile ? (
              // Mobile Layout: Vertical Stack
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-6">
                  <h2 className="text-3xl font-bold text-white">
                    Tickets 票价
                  </h2>
                </div>

                {/* Ticket Included */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold">Ticket Included</h3>
                  <div className="space-y-2 text-white text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Day 01 Lunch + Dinner</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Day 02 Lunch</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>会议包</span>
                    </div>
                  </div>
                </div>

                {/* Early Pass */}
                <div className="bg-black/50 border border-orange-500/30 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:border-orange-500 rounded-xl p-6 space-y-4 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-lg">Early Pass</h3>
                    <CountdownTimer />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-white text-3xl font-bold">RM368</span>
                      <span className="text-gray-300 group-hover:text-orange-200 text-sm transition-colors duration-300">(saved RM50)</span>
                    </div>
                    <button className="flex items-center space-x-2 text-white">
                      <span>Register Now</span>
                      <span className="text-xl">👆</span>
                      <span className="ml-auto">→</span>
                    </button>
                  </div>
                </div>

                {/* Regular Pass */}
                <div className="bg-black/50 border border-orange-500/30 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:border-orange-500 rounded-xl p-6 space-y-4 transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-lg">Regular Pass</h3>
                    <CountdownTimer />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-white text-3xl font-bold">RM418</span>
                    </div>
                    <button className="flex items-center space-x-2 text-white">
                      <span>Register Now</span>
                      <span className="text-xl">👆</span>
                      <span className="ml-auto">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Webview Layout: Full width content
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-white">
                    Tickets 票价
                  </h2>

                  {/* Ticket Included */}
                  <div className="space-y-3">
                    <h3 className="text-white font-semibold">Ticket Included</h3>
                    <div className="space-y-2 text-white text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span>Day 01 Lunch + Dinner</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span>Day 02 Lunch</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span>会议包</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket Options - Side by Side */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Early Pass */}
                  <div className="bg-black/50 border border-orange-500/30 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:border-orange-500 rounded-xl p-6 space-y-4 transition-all duration-300 cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-bold text-lg">Early Pass</h3>
                      <CountdownTimer />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-white text-2xl font-bold">RM368</span>
                        <span className="text-gray-300 group-hover:text-orange-200 text-sm transition-colors duration-300">(saved RM50)</span>
                      </div>
                      <button className="flex items-center justify-between w-full text-white">
                        <div className="flex items-center space-x-2">
                          <span>Register Now</span>
                          <span className="text-lg">👆</span>
                        </div>
                        <span>→</span>
                      </button>
                    </div>
                  </div>

                  {/* Regular Pass */}
                  <div className="bg-black/50 border border-orange-500/30 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:border-orange-500 rounded-xl p-6 space-y-4 transition-all duration-300 cursor-pointer group">
                    <h3 className="text-white font-bold text-lg">Regular Pass</h3>
                    <div className="space-y-2">
                      <div className="text-white text-2xl font-bold">RM418</div>
                      <button className="flex items-center justify-between w-full text-white">
                        <div className="flex items-center space-x-2">
                          <span>Register Now</span>
                          <span className="text-lg">👆</span>
                        </div>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TicketsSection;
