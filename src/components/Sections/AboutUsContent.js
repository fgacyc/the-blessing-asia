import React from "react";
import useResponsive from "../../hooks/useResponsive";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsContent = () => {
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
      {/* Logo */}
      {/* FIRST SECTION */}
      <div className="flex relative justify-center">
        <div className={`h-11/12`}>
          <img src="/aboutUs/aboutUs-topSection-2.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? "w-24 h-24" : "w-1/2"}`}>
          <img src="/aboutUs/aboutUs-topSection-pigeon.png" alt="TB" className={imageBaseClasses} />
        </div>
      </div>
      {/* 2ND SECTION */}
      <div className="flex relative justify-center">
        <div className={`h-11/12`}>
          <img src="/aboutUs/aboutUs-topSection-3.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? "w-24 h-24" : "w-1/2"}`}>
          <img src="/aboutUs/aboutUs-topSection-3-text.png" alt="TB" className={imageBaseClasses} />
        </div>
      </div>
      {/* 3RD SECTION */}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/tb-logo-highRes.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-violet-100">
          <div className={` ${!isMobile ? "text-[4rem] text-left" : "text-md text-center py-6"} tracking-wider`}>
            <h2 className=" font-bold text-amber-400 "> The </h2>
            <h2 className="text-amber-400 font-bold"> Blessings </h2>
            <h3 className={` ${!isMobile ? "text-[1.5rem]" : "text-md"} text-black font-black py-5`}> 是一个聚集职场人的平台。 </h3>

            <br />
            <h2 className={`${!isMobile ? "text-[1.2rem] " : "text-sm"}   text-neutral-800  tracking-wider`}>
              {" "}
              在真实生活中领受祝福，平成为别人的祝福。{" "}
            </h2>
            <h2 className={`${!isMobile ? "text-[1.2rem] " : "text-sm"}  tracking-wider  text-neutral-800`}>
              {" "}
              我们来自不同背景, 却有一个共识:{" "}
            </h2>
            <h2 className={`${!isMobile ? "text-[1.2rem] " : "text-sm"}  tracking-wider  text-neutral-800`}> 信仰可以带来真实改变</h2>
          </div>
        </div>
      </div>

      {/* 4TH SECTION */}

      {!isMobile ? (
        // FOR PC VIEW
        <div className="grid grid-cols-3 bg-neutral-100 py-22 space-y-10">
          <div className={`col-span-1 justify-items-center py-10`}>
            <div className="text-center text-[2rem] tracking-wider ">
              <h2 className={extraBoldHeaderBlackFontClass}> 我们的愿景</h2>
              <h2 className="text-[3rem]  font-bold text-amber-300 py-3"> Vision</h2>
              {/* <h2> Vision</h2> */}
              <h2 className="text-black text-[1.5rem] font-bold  py-3">
                {" "}
                让神的荣耀充满职场，
                <br /> 带来生命转化。{" "}
              </h2>
            </div>
          </div>
          <div className={`col-span-1 justify-items-center  py-10 `}>
            <div className="text-center text-[2rem] tracking-wider ">
              <h2 className={extraBoldHeaderBlackFontClass}> 我们的使命</h2>
              <h2 className="text-[3rem]  font-bold text-amber-300 py-3"> Mission</h2>
              {/* <h2> Vision</h2> */}
              <h2 className="text-black text-[1.5rem] font-bold py-3">
                {" "}
                在教会以外，引导人
                <br /> 经历上帝的真实。{" "}
              </h2>
            </div>
          </div>
          <div className={`col-span-1 justify-items-center  py-10`}>
            <div className="text-center text-[2rem] tracking-wider ">
              <h2 className={extraBoldHeaderBlackFontClass}> 我们的行动方式</h2>
              <h2 className="text-[3rem]  font-bold text-amber-300 py-3"> Actions</h2>
              {/* <h2> Vision</h2> */}
              <h2 className="text-black text-[1.5rem] font-bold">
                {" "}
                小组，聚点，训练，实践，
                <br /> 建立真实关系。{" "}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        // FOR MOBILE VIEW
        <div className="grid grid-cols-2 bg-neutral-100 py-10 space-y-5">
          <div className={`col-span-1 justify-items-center `}>
            <div className="text-center  tracking-wider ">
              <h2 className={`${extraBoldHeaderBlackFontClass} text-xl `}> 我们的愿景</h2>
              <h2 className="text-xl font-bold text-amber-300 py-3"> Vision</h2>
              {/* <h2> Vision</h2> */}
              <h2 className="text-black text-md font-bold py-3">
                {" "}
                让神的荣耀充满职场，
                <br /> 带来生命转化。{" "}
              </h2>
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className={`col-start-2 col-end-2 justify-items-center `}>
            <div className="text-center tracking-wider ">
              <h2 className={`${extraBoldHeaderBlackFontClass} text-xl`}> 我们的使命</h2>
              <h2 className="text-xl font-bold text-amber-300 py-3"> Mission</h2>
              {/* <h2> Vision</h2> */}
              <h2 className="text-black text-md font-bold py-3">
                {" "}
                在教会以外，引导人
                <br /> 经历上帝的真实。{" "}
              </h2>
            </div>
          </div>
          <div className={`col-span-1 justify-items-center `}>
            <div className="text-center tracking-wider ">
              <h2 className={`${extraBoldHeaderBlackFontClass} text-xl`}> 我们的行动方式</h2>
              <h2 className="text-xl font-bold text-amber-300 py-3"> Actions </h2>
              {/* <h2> Vision</h2> */}
              <h2 className="text-black text-md font-bold py-3">
                {" "}
                小组，聚点，训练，实践，
                <br /> 建立真实关系。{" "}
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* */}
      {/*  
                <br /> {" "} */}

      <div className="flex  py-22 space-y-10 justify-center bg-white">
        <div className="text-center">
          <h1 className={` ${!isMobile ? "text-[2rem]" : "text-xl"} text-black font-bold  tracking-wider`}> The Blessing 的旅程</h1>
          <h3 className={`${!isMobile ? "text-[2rem]" : "text-lg"} text-black  tracking-wider pt-10`}>
            {" "}
            从线上小组开始，到多个城市的聚点成立， The Blessing 的每一步的成长都见证{" "}
          </h3>
          <h3 className={`${!isMobile ? "text-[2rem]" : "text-lg"} text-black  tracking-wider`}>
            {" "}
            着神的带领与人们的回应。这是我们的故事，也是你可以加入的旅程{" "}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/tb-logo-highRes.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-violet-100">
          <div className="text-left text-[4rem] ">
            <h2 className="tracking-wider font-bold text-black "> 2020 </h2>
            <h3 className="tracking-wider text-[1.5rem] text-black ">
              {" "}
              在疫情中回应神的启示，我们开始 <br />
              线上聚会（EPS & 小组），为教会 <br /> 预备属灵的粮仓。
            </h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/tb-logo-highRes.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-violet-100">
          <div className="flex flex-col justify-center items-center bg-violet-100">
            <div className="text-left text-[4rem] ">
              <h2 className="tracking-wider font-bold text-black "> 2020 </h2>
              <h3 className="tracking-wider text-[1.5rem] text-black ">
                {" "}
                在疫情中回应神的启示，我们开始 <br />
                线上聚会（EPS & 小组），为教会 <br /> 预备属灵的粮仓。
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative justify-center">
        <div className={`h-11/12`}>
          <img src="/aboutUs/aboutUs-section-6-img.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? "w-24 h-24" : "w-1/2"}`}>
          <img src="/aboutUs/aboutUs-section-6-text.png" alt="TB" className={imageBaseClasses} />
        </div>
      </div>

      <div className="flex relative bg-black justify-center py-15">
        <div className="text-white ">
          {" "}
          <h2 className="text-center text-[1.2rem] font-bold tracking-wider"> 你的参与，可以带来真实祝福 </h2>
          <div className="space-x-15 w-full  mt-10">
            <button className="bg-black text-white text-lg font-semibold py-4 px-10 rounded-md hover:bg-gray-200 hover:text-black border border-white-100 transition cursor-pointer">
              我想加入一个 Blessing 小组
            </button>
            <button className="bg-black text-white text-lg font-semibold py-4 px-10 rounded-md hover:bg-gray-200 hover:text-black border border-white-100 transition cursor-pointer">
              我想在我的职场开始聚点
            </button>
            <button className="bg-black text-white text-lg font-semibold py-4 px-10 rounded-md hover:bg-gray-200 hover:text-black border border-white-100 transition cursor-pointer">
              我想了解更多 / 一起合作
            </button>
            {/* <button className="bg-white text-black text-lg font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition">
              联系我们
            </button> */}
          </div>
          <div className="flex space-x-15  justify-center  mt-10">
            <button className="bg-amber-200 text-black text-lg translate-x-5 font-black cursor-pointer py-4 px-20 rounded-md hover:bg-amber-500 transition">
              <p>联系我们</p>
            </button>
          </div>
        </div>
      </div>
      {/* <div className={`text-center text-white ${isMobile ? "text-sm" : "text-[1.8rem]"}`}>
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 180 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`${isMobile ? "text-md my-4 " : "text-[1.8rem] mb-6 "}`}>
          领受祝福 ，成为祝福
        </motion.h2>

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 140 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`${isMobile ? "text-md my-4 " : "text-[1.8rem] my-8 "}`}>
          Blessed to be The Blessings
        </motion.h2>

        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`${isMobile ? "text-md my-4 " : "text-[1.8rem] my-8 "}`}>
          在职场中活出信念，带出影响力
        </motion.h4>

        <motion.h4
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className={`${isMobile ? "text-md my-4 " : "text-[1.8rem] my-8"}`}>
          “兴起，发光！因为你的光已经来到！” – 以赛亚书 60:1
        </motion.h4>
      </div> */}
      {/* <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-15 flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* Know More About 
        <a
          href="#about"
          className={` rounded-md bg-white text-black font-semibold shadow-lg transform  transition duration-300 ease-in-out  hover:bg-blue-600 hover:text-neutral-100 ${
            isMobile ? "text-md px-3 py-2" : "text-[1.5rem] px-6 py-3"
          } `}>
          了解我们
        </a>

        <a
          href="#join"
          className={` rounded-md bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out hover:bg-neutral-100 hover:text-neutral-900 ${
            isMobile ? "text-md px-3 py-2" : "text-[1.2rem] px-6 py-3"
          }`}>
        </a>
      </motion.div>
      <div className="my-6"></div>
      <div className="my-4 grid  grid-cols-2">
        <div className="col-span-1 flex justify-center">
          <img src="/tb-logo-highRes.png" alt="TB" className={isMobile ? "w-32 h-32" : "w-72 h-72"} />
        </div>
        <div className={` ${isMobile ? "pt-6" : "pt-10"} col-span-1`}>
          <h1 className="text-[1.5rem]">Text </h1>
          <p>Text 2</p>
        </div>
      </div> */}
    </section>
  );
};

export default AboutUsContent;
