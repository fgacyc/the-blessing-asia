import React from 'react';
import Container from '../Layout/Container';
import useResponsive from '../../hooks/useResponsive';

const SpeakersSection = () => {
  const { isMobile } = useResponsive();

  // Speaker data matching the design
  const speakers = [
    {
      id: 1,
      name: '罗伯寿',
      title: '牧师',
      image: '/罗伯寿牧师.png',
      bio: 'FGA 中文堂',
      occupation: '副主理牧师'
    },
    {
      id: 2,
      name: '廖文华',
      title: '牧师',  
      image: '/廖文华牧师.png',
      bio: '台北真道教会 Truth Church',
      occupation: '主任牧师',
      bioLine2: '梦想之家教育基金会',
      occupation2: '创办人兼董事长'
    },
    {
      id: 3,
      name: '叶果',
      title: '先生',
      image: '/叶果先生.png',
      bio: '以勒企业',
      occupation: '董事长'
    },
    {
      id: 4,
      name: '李绍龄',
      title: '会长',
      image: '/李绍龄会长.png',
      bio: '台湾世界展望会World Vision',
      occupation: '会长'
    },
    {
      id: 5,
      name: '袁明琦',
      title: '医师',
      image: '/袁明琦医师.png',
      bio: '台安医院',
      occupation: '心脏外科主任、行政副院长'
    },
    {
      id: 6,
      name: '陈金莲',
      title: '女士',
      image: '/MaryChen.png',
      bio: '全马最大癌症医院 ｜Beacon Hospital 宝康医院',
      occupation: '创办人'
    },
  ];

  // Speaker Card Component
  const SpeakerCard = ({ speaker }) => (
    <div className={`${isMobile ? 'flex items-center text-center space-x-4' : 'flex items-center text-center space-x-6'} mb-12 lg:mb-16`}>
      {/* Speaker Image - Pure Black Background */}
      <div className="relative flex-shrink-0">
        {/* Pure Black Background - No glow effect, No border */}
        <div className="relative w-32 h-40 lg:w-56 lg:h-56 overflow-hidden">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>

      {/* Speaker Info */}
      <div className="flex-1">
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          {speaker.name} {speaker.title && <span className="text-base lg:text-lg text-white font-medium">{speaker.title}</span>}
        </h3>
        {/* Primary Bio */}
        <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-md">
          {speaker.bio}
        </p>
        {/* Primary Occupation */}
        {speaker.occupation && (
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-md ">{speaker.occupation}</p>
        )}
        {/* Secondary Bio (if exists) */}
        {speaker.bioLine2 && (
          <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-md mt-2">{speaker.bioLine2}</p>
        )}
        {/* Secondary Occupation (if exists) */}
        {speaker.occupation2 && (
          <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-md">{speaker.occupation2}</p>
        )}
      </div>
    </div>
  );

  return (
    <section id="speakers" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Orange Glow Effect - Top Right */}
      <div
        className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-orange-500/90 rounded-full blur-3xl opacity-50 pointer-events-none"
        aria-hidden="true"
      />


      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            讲员阵容
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
