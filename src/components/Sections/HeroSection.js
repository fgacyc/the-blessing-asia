import React from 'react';
import useResponsive from '../../hooks/useResponsive';

const HeroSection = () => {
  const { isMobile } = useResponsive();

  // Common classes for the image styling
  const imageBaseClasses = "w-full h-full object-contain object-center";

  return (
    <section className={`relative z-10 bg-black ${isMobile ? 'h-screen' : 'min-h-screen'} flex items-center justify-center overflow-hidden`}>
      {/* Hero Image Container - This div will be the bounds for the image */}
      <div className={`relative w-full ${isMobile ? 'h-screen' : 'h-screen'} bg-black`}>
        <img
          src={isMobile ? "/BC25_Mobile.png" : "/BC25_Web.png"}
          alt="The Blessing Asia 2025"
          className={
            isMobile
              ? `absolute inset-0 w-full h-full object-contain object-center` // Mobile: Contain image, show all, no crop
              : imageBaseClasses // Desktop: Still uses object-cover from imageBaseClasses
          }
        />
        {/* Pure Black Background - No overlay */}
      </div>
    </section>
  );
};

export default HeroSection;
