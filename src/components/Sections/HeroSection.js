import React from 'react';
import useResponsive from '../../hooks/useResponsive';

const HeroSection = () => {
  const { isMobile } = useResponsive();

  return (
    <section className={`relative z-10 bg-black ${isMobile ? 'h-screen' : 'min-h-screen'} flex items-center justify-center overflow-hidden`}>
      {/* Hero Image - Full Section */}
      <div className={`relative w-full ${isMobile ? 'h-screen' : 'h-screen'} flex items-center justify-center bg-black`}>
        <img
          src={isMobile ? "/BC25_Mobile.png" : "/BC25_Web.png"}
          alt="The Blessing Asia 2025"
          className={isMobile
            ? "w-full h-full object-cover object-center"
            : "w-full h-full object-cover object-center"
          }
          style={isMobile ? {
            minHeight: '100vh',
            minWidth: '100vw'
          } : {}}
        />
        {/* Pure Black Background - No overlay */}
      </div>
    </section>
  );
};

export default HeroSection;
