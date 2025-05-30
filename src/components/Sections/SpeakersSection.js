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
      name: '叶果先生',
      title: '',
      image: '/叶果先生.png',
      bio: '瑞士海外品牌公司总经理 ',
      occupation: '总经理'
    },
    {
      id: 4,
      name: '李绍龄会长',
      title: '',
      image: '/李绍龄会长.png',
      bio: '台湾世界展望会World Vision',
      occupation: '会长'
    },
    {
      id: 5,
      name: '袁明琦医师',
      title: '',
      image: '/袁明琦医师.png',
      bio: '臺安醫院 ',
      occupation: '心脏外科主任、行政副院長'
    },
    {
      id: 6,
      name: 'Mary Chen',
      title: '',
      image: '/MaryChen.png',
      bio: '全马最大癌症医院 ｜Beacon Hospital 宝康医院',
      occupation: '创办人'
    },
  ];

  // Speaker Card Component
  const SpeakerCard = ({ speaker }) => (
    <div className={`${isMobile ? 'flex flex-col items-center text-center space-y-6' : 'flex items-center text-center space-x-6'} mb-12 lg:mb-16`}>
      {/* Speaker Image - Pure Black Background */}
      <div className="relative flex-shrink-0">
        {/* Pure Black Background - No glow effect, No border */}
        <div className="relative w-64 h-60 lg:w-64 lg:h-64 h-48 lg:w-56 lg:h-56 overflow-hidden">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-contain object-center"
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
    <section id="speakers" className="min-h-screen bg-black py-16 lg:py-24 relative overflow-hidden">
      {/* Orange Glow Effect - Top Right */}
      <div
        className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-orange-500/90 rounded-full blur-3xl opacity-50 pointer-events-none"
        aria-hidden="true"
      />


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
