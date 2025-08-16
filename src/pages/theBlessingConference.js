import React from "react";
import Header from "../components/Layout/Header";
import HeroSection from "../components/Sections/HeroSection";
// import BibleVerseSection from './Sections/BibleVerseSection';
import SpeakersSection from "../components/Sections/SpeakersSection";
import TicketsSection from "../components/Sections/TicketsSection";
import SchedulesSection from "../components/Sections/SchedulesSection";
import MasterclassSection from "../components/Sections/MasterclassSection";
import FAQSection from "../components/Sections/FAQSection";

const TheBlessingConference = () => {
  return (
    <div className="min-h-screen bg-white  relative overflow-hidden">
      {/* Pure Black Background - No gradient effects */}

      <Header />
      <HeroSection />
      {/* <BibleVerseSection /> */}
      <SpeakersSection />
      <TicketsSection />
      <SchedulesSection />
      <MasterclassSection />
      <FAQSection />

      {/* Minimal Decorative Elements - Pure Black Background */}
    </div>
  );
};

export default TheBlessingConference;
