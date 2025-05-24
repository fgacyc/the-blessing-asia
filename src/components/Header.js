import React from 'react';
import Header from './Layout/Header';
import HeroSection from './Sections/HeroSection';
import BibleVerseSection from './Sections/BibleVerseSection';
import SpeakersSection from './Sections/SpeakersSection';
import TicketsSection from './Sections/TicketsSection';
import SchedulesSection from './Sections/SchedulesSection';
import MasterclassSection from './Sections/MasterclassSection';
import FAQSection from './Sections/FAQSection';

const BlessingAsiaLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Pure Black Background - No gradient effects */}

      <Header />
      <HeroSection />
      <BibleVerseSection />
      <SpeakersSection />
      <TicketsSection />
      <SchedulesSection />
      <MasterclassSection />
      <FAQSection />

      {/* Minimal Decorative Elements - Pure Black Background */}
    </div>
  );
};

export default BlessingAsiaLanding;