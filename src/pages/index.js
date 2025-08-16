// src/pages/index.js

import React from "react";
import BlessingAsiaLanding from "../components/Header";
import AboutTheBlessingPage from "@/components/AboutTheBlessingPage";

const Home = () => {
  return (
    <div className=" min-h-screen">
      <AboutTheBlessingPage />
    </div>
  );
};

export default Home;
