import React from 'react';
import useResponsive from '../../hooks/useResponsive';

const HeroSection = () => {
  const { isMobile } = useResponsive();

  return (
    <section className={`relative z-10 ${isMobile ? 'h-screen' : 'min-h-screen'} flex items-center justify-center overflow-hidden`}>
      {/* Hero Image - Full Section */}
      <div className={`relative w-full ${isMobile ? 'h-screen' : 'h-screen'} flex items-center justify-center`}>
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
        {/* Optional subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;
