import React from "react";
import useResponsive from "../../hooks/useResponsive";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TheBlessingLocation from "@/pages/theBlessingLocation";

const TheBlessingLocationContent = () => {
  console.log({ useResponsive, motion, useInView });

  const { isMobile } = useResponsive();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const imageBaseClasses = "object-contain";
  const extraBoldHeaderBlackFontClass = "font-bold text-black";

  return (
    <section className={`relative z-10  `}>
      <div className="relative w-full aspect-video ">
        {" "}
        {/* Container with aspect ratio */}
        <video autoPlay muted loop id="myVideo" className={`${isMobile ? "" : ""}`}>
          {isMobile ? (
            <source src="/locations/location-section-1-video-mobile-1.mp4" type="video/mp4" />
          ) : (
            <source src="/locations/location-section-1-video.mp4" type="video/mp4" />
          )}
          {/* <source src="/locations/location-section-1-video.mp4" type="video/mp4" /> */}
          Your browser does not support HTML5 video.
        </video>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2  ${isMobile ? "w-48 h-48 -translate-y-1/3" : "w-1/2 -translate-y-2/3"}`}>
          <img src="/locations/location-section-1-text.png" alt="TB" className={imageBaseClasses} />
        </div>{" "}
      </div>
    </section>
  );
};

export default TheBlessingLocationContent;
