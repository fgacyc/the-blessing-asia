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
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-orange-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <Header />
      <HeroSection />
      <BibleVerseSection />
      <SpeakersSection />
      <TicketsSection />
      <SchedulesSection />
      <MasterclassSection />
      <FAQSection />

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-8 w-2 h-16 bg-gradient-to-b from-transparent via-orange-400/50 to-transparent rotate-45"></div>
      <div className="absolute top-1/2 right-8 w-2 h-20 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent -rotate-45"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-12 bg-gradient-to-b from-transparent via-orange-300/50 to-transparent rotate-12"></div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-amber-300 rounded-full opacity-40 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-orange-300 rounded-full opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-amber-400 rounded-full opacity-60 animate-pulse delay-300"></div>
      </div>
    </div>
  );
};

export default BlessingAsiaLanding;