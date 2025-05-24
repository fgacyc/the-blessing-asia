import React from 'react';
import Container from '../Layout/Container';
import useResponsive from '../../hooks/useResponsive';

const SpeakersSection = () => {
  const { isMobile } = useResponsive();

  // Speaker data matching the design
  const speakers = [
    {
      id: 1,
      name: '廖文华',
      title: '牧师',
      image: '/api/placeholder/400/400',
      bio: 'Lorem ipsum quis facilisis tristique purus fermentum ac in elit venenatis eu turpis sodales elit risus et sit nascetur luctus id massa elit vitae pretium.'
    },
    {
      id: 2,
      name: '罗伯寿',
      title: '牧师',
      image: '/api/placeholder/400/400',
      bio: 'Lorem ipsum quis facilisis tristique purus fermentum ac in elit venenatis eu turpis sodales elit risus et sit nascetur luctus id massa elit vitae pretium.'
    },
    {
      id: 3,
      name: 'Mary Chen',
      title: '',
      image: '/api/placeholder/400/400',
      bio: 'Lorem ipsum quis facilisis tristique purus fermentum ac in elit venenatis eu turpis sodales elit risus et sit nascetur luctus id massa elit vitae pretium.'
    },
    {
      id: 4,
      name: '南华哥',
      title: '',
      image: '/api/placeholder/400/400',
      bio: 'Lorem ipsum quis facilisis tristique purus fermentum ac in elit venenatis eu turpis sodales elit risus et sit nascetur luctus id massa elit vitae pretium.'
    },
  ];

  // Speaker Card Component
  const SpeakerCard = ({ speaker }) => (
    <div className={`${isMobile ? 'flex flex-col items-center text-center space-y-6' : 'flex items-start space-x-6'} mb-12 lg:mb-16`}>
      {/* Speaker Image - Pure Black Background */}
      <div className="relative flex-shrink-0">
        {/* Pure Black Background - No glow effect */}
        <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-2 border-orange-400/50">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Orange underline */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
      </div>

      {/* Speaker Info */}
      <div className={`${isMobile ? 'text-center' : 'flex-1'}`}>
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          {speaker.name} {speaker.title && <span className="text-orange-300">{speaker.title}</span>}
        </h3>
        <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-md">
          {speaker.bio}
        </p>
      </div>
    </div>
  );

  return (
    <section id="speakers" className="min-h-screen bg-black py-16 lg:py-24 relative overflow-hidden">
      {/* Pure Black Background - No glow effects */}

      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Speakers & Guests
          </h2>
        </div>

        {/* Speakers Layout */}
        {isMobile ? (
          // Mobile: Single Column Layout
          <div className="space-y-12">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        ) : (
          // Webview: Two Column Grid Layout
          <div className="grid grid-cols-2 gap-x-12 gap-y-16">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default SpeakersSection;
