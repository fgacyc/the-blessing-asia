import React, { useState, useEffect } from 'react';
import Container from '../Layout/Container';
import useResponsive from '../../hooks/useResponsive';

const TicketsSection = () => {
  const { isMobile } = useResponsive();

  // Define end dates for passes
  const [earlyBirdEndDate] = useState(new Date('2025-06-23T23:59:59'));
  const [regularPassEndDate] = useState(new Date('2025-08-21T23:59:59'));

  // State for time left for each pass
  const [earlyBirdTimeLeft, setEarlyBirdTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [regularPassTimeLeft, setRegularPassTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // State for active periods
  const [isEarlyBirdActive, setIsEarlyBirdActive] = useState(false);
  const [isRegularPassActive, setIsRegularPassActive] = useState(false);
  const [areSalesOver, setAreSalesOver] = useState(false);

  const ticketUrl = "https://www.ticket2u.com.my/event/43661_7d063d69f0a4491d841783172b824776";

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const earlyBirdTargetTime = earlyBirdEndDate.getTime();
      const regularPassTargetTime = regularPassEndDate.getTime();

      const currentIsEarlyBirdActive = now < earlyBirdTargetTime;
      const currentIsRegularPassActive = now >= earlyBirdTargetTime && now < regularPassTargetTime;
      const currentAreSalesOver = now >= regularPassTargetTime;

      setIsEarlyBirdActive(currentIsEarlyBirdActive);
      setIsRegularPassActive(currentIsRegularPassActive);
      setAreSalesOver(currentAreSalesOver);

      if (currentIsEarlyBirdActive) {
        const earlyBirdDistance = earlyBirdTargetTime - now;
        setEarlyBirdTimeLeft({
          days: Math.floor(earlyBirdDistance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((earlyBirdDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((earlyBirdDistance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((earlyBirdDistance % (1000 * 60)) / 1000)
        });
        setRegularPassTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else if (currentIsRegularPassActive) {
        const regularPassDistance = regularPassTargetTime - now;
        setEarlyBirdTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setRegularPassTimeLeft({
          days: Math.floor(regularPassDistance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((regularPassDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((regularPassDistance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((regularPassDistance % (1000 * 60)) / 1000)
        });
      } else { // Sales are over
        setEarlyBirdTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setRegularPassTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [earlyBirdEndDate, regularPassEndDate]);

  // Ticket icon component
  const TicketIcon = () => (
    <div className="relative">
      {/* Orange glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 to-amber-500/40 rounded-full blur-xl scale-150"></div>

      {/* Ticket Image */}
      <div className="relative w-32 h-36 lg:w-24 lg:h-28 mx-auto"> {/* Increased size */}
        <img
          src="/Ticket.png"
          alt="Ticket Icon"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );

  // Countdown timer component
  const CountdownTimer = ({ timeLeftData }) => {
    if (!timeLeftData) return null;
    return (
      <div className="flex items-center space-x-1.5 text-white"> {/* Main container for timer segments */}
        {/* Days Segment */}
        <div className="bg-black text-center rounded px-2 py-1">
          <span className="block font-bold text-base leading-none">{String(timeLeftData.days).padStart(2, '0')}</span>
          <span className="block text-xs leading-none opacity-75">days</span>
        </div>
        {/* Hours Segment */}
        <div className="bg-black text-center rounded px-2 py-1">
          <span className="block font-bold text-base leading-none">{String(timeLeftData.hours).padStart(2, '0')}</span>
          <span className="block text-xs leading-none opacity-75">hr</span>
        </div>
        {/* Minutes Segment */}
        <div className="bg-black text-center rounded px-2 py-1">
          <span className="block font-bold text-base leading-none">{String(timeLeftData.minutes).padStart(2, '0')}</span>
          <span className="block text-xs leading-none opacity-75">min</span>
        </div>
      </div>
    );
  };

  return (
    <section id="tickets" className="py-16 lg:py-20 relative overflow-hidden bg-black">
      {/* Pure Black Background - No glow effects */}

      <Container>
        {/* Black Container */}
        <div className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-b from-white/5 to-white/15 backdrop-blur-[24px] border border-gray-700/50">

          <div className="relative z-10">
            {/* Ticket Icon positioned to overlap top right border */}
            <div className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 z-20"> {/* Adjusted position for overlap */}
              <TicketIcon />
            </div>

            {isMobile ? (
              // Mobile Layout: Vertical Stack
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-6">
                  <h2 className="text-3xl font-bold text-white">
                    票价
                  </h2>
                </div>

                {/* Ticket Included */}
                <div className="space-y-4">
                  <h3 className="text-white font-semibold">Ticket Included</h3>
                  <div className="space-y-2 text-white text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Day 01 晚餐</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>Day 02 午餐 + 晚餐</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span>会议包</span>
                    </div>
                  </div>
                </div>

                {/* Early Pass */}
                {isEarlyBirdActive ? (
                  <a
                    href={ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl p-6 space-y-4 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <h3 className="text-white font-bold text-lg">Early Pass</h3>
                      <CountdownTimer timeLeftData={earlyBirdTimeLeft} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-white text-3xl font-bold">RM368</span>
                        <span className="text-orange-100 text-sm line-through">RM418</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white">
                        <span>Register Now</span>
                        <img src="/Tap.png" alt="Tap here" className="w-5 h-5 inline-block" />
                        <span className="ml-auto">→</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    className="rounded-xl p-6 space-y-4 transition-all duration-300 bg-black/50 border border-gray-700/50 cursor-default text-gray-400"
                  >
                    <h3 className="font-bold text-lg">Early Pass - Ended</h3>
                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold">RM368</span>
                        <span className="text-sm line-through">RM418</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>Register Now</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Regular Pass */}
                {!isEarlyBirdActive && (
                  isRegularPassActive ? (
                    <a
                      href={ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl p-6 space-y-4 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <h3 className="text-white font-bold text-lg">Regular Pass</h3>
                        {isRegularPassActive && <CountdownTimer timeLeftData={regularPassTimeLeft} />}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-white text-3xl font-bold">RM418</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                          <span>Register Now</span>
                          <img src="/Tap.png" alt="Tap here" className="w-5 h-5 inline-block" />
                          <span className="ml-auto">→</span>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="rounded-xl p-6 space-y-4 transition-all duration-300 bg-black/50 border border-orange-500/30 cursor-default"
                    >
                      <div className="flex items-center space-x-3">
                        <h3 className="text-white font-bold text-lg">Regular Pass</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-white text-3xl font-bold">RM418</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white opacity-50">
                          <span>{areSalesOver ? "Sales Ended" : "Register Now"}</span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              // Webview Layout: Full width content
              <div className="space-y-8">
                {/* Header */}
                <h2 className="text-4xl font-bold text-white text-center">
                  票价
                </h2>

                {/* New Grid Layout: Ticket Included | Pass Cards */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Ticket Included */}
                  <div className="lg:col-span-1 space-y-3">
                    <h3 className="text-white font-semibold text-lg">Ticket Included</h3>
                    <div className="space-y-2 text-white text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span>Day 01 晚餐</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span>Day 02 午餐 + 晚餐</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400">✓</span>
                        <span>会议包</span>
                      </div>
                    </div>
                  </div>

                  {/* Ticket Options - Side by Side (now nested) */}
                  <div className="lg:col-span-1 grid grid-cols-1 gap-6">
                    {/* Early Pass Slot */}
                    <div>
                      {isEarlyBirdActive ? (
                        <a
                          href={ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-xl p-6 space-y-4 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 cursor-pointer"
                        >
                          <div className="flex items-center space-x-3">
                            <h3 className="text-white font-bold text-lg">Early Pass</h3>
                            <CountdownTimer timeLeftData={earlyBirdTimeLeft} />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-baseline space-x-2">
                              <span className="text-white text-2xl font-bold">RM368</span>
                              <span className="text-orange-100 text-sm line-through">RM418</span>
                            </div>
                            <div className="flex items-center justify-between w-full text-white">
                              <div className="flex items-center space-x-2">
                                <span>Register Now</span>
                                <img src="/Tap.png" alt="Tap here" className="w-5 h-5 inline-block" />
                              </div>
                              <span>→</span>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div
                          className="rounded-xl p-6 space-y-4 transition-all duration-300 bg-black/50 border border-gray-700/50 cursor-default text-gray-400"
                        >
                          <h3 className="font-bold text-lg">Early Pass - Ended</h3>
                          <div className="space-y-2">
                            <div className="flex items-baseline space-x-2">
                              <span className="text-2xl font-bold">RM368</span>
                              <span className="text-sm line-through">RM418</span>
                            </div>
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center space-x-2">
                                <span>Register Now</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Regular Pass Slot */}
                    <div>
                      {!isEarlyBirdActive && (
                        isRegularPassActive ? (
                          <a
                            href={ticketUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-xl p-6 space-y-4 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 cursor-pointer"
                          >
                            <div className="flex items-center space-x-3">
                              <h3 className="text-white font-bold text-lg">Regular Pass</h3>
                              <CountdownTimer timeLeftData={regularPassTimeLeft} />
                            </div>
                            <div className="space-y-2">
                              <div className="text-white text-2xl font-bold">RM418</div>
                              <div className="flex items-center justify-between w-full text-white">
                                <div className="flex items-center space-x-2">
                                  <span>Register Now</span>
                                  <img src="/Tap.png" alt="Tap here" className="w-5 h-5 inline-block" />
                                </div>
                                <span>→</span>
                              </div>
                            </div>
                          </a>
                        ) : (
                          <div
                            className="rounded-xl p-6 space-y-4 transition-all duration-300 bg-black/50 border border-orange-500/30 cursor-default"
                          >
                            <div className="flex items-center space-x-3">
                              <h3 className="text-white font-bold text-lg">Regular Pass</h3>
                            </div>
                            <div className="space-y-2">
                              <div className="text-white text-2xl font-bold">RM418</div>
                              <div className="flex items-center justify-start w-full text-white opacity-50">
                                <div className="flex items-center space-x-2">
                                  <span>{areSalesOver ? "Sales Ended" : "Register Now"}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div> {/* End of lg:col-span-2 grid */}
                </div> {/* End of lg:grid-cols-3 */}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TicketsSection;
