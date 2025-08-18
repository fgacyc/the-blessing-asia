import React from "react";
import Header from "./Layout/Header";
import TheBlessingLocationContent from "./Sections/TheBlessingLocationContent";
// import BibleVerseSection from './Sections/BibleVerseSection';

const TheBlessingLocationPage = () => {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      {/* Pure Black Background - No gradient effects */}

      <Header />
      <TheBlessingLocationContent />
      {/* Minimal Decorative Elements - Pure Black Background */}
    </div>
  );
};

export default TheBlessingLocationPage;
