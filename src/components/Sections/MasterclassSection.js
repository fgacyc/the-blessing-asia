import React from 'react';
import Container from '../Layout/Container';
import useResponsive from '../../hooks/useResponsive';

const MasterclassSection = () => {
  const { isMobile } = useResponsive();

  return (
    <section id="masterclass" className="min-h-screen bg-black py-16 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold mb-4 text-white`}>
            Master Class
          </h2>
        </div>

        {/* Content Pending Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/90 backdrop-blur-sm rounded-lg p-12 border border-gray-700/50 text-center">
            <h3 className="text-white text-2xl font-bold">
              Content Pending
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MasterclassSection;
