import React from "react";
import Header from "./Layout/Header";
import AboutUsContent from "./Sections/AboutUsContent";
// import BibleVerseSection from './Sections/BibleVerseSection';

const AboutTheBlessingPage = () => {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      {/* Pure Black Background - No gradient effects */}

      <Header />
      <AboutUsContent />
      {/* Minimal Decorative Elements - Pure Black Background */}
    </div>
  );
};

export default AboutTheBlessingPage;
