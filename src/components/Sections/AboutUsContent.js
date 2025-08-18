import React from "react";
import { useRef } from "react";

import useResponsive from "../../hooks/useResponsive";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "primeicons/primeicons.css";

const AboutUsContent = () => {
  console.log({ useResponsive, motion, useInView });

  const { isMobile } = useResponsive();
  const containerRef = useRef();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: secondImg, inView: secondImgView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: thirdSection, inView: thirdSectionView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: vmaMotion, inView: vmaView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: vmaMotion1, inView: vmaMotion1View } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: vmaMotion2, inView: vmaView2 } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: yearMemory2020, inView: yearMemory2020View } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: yearMemory2022, inView: yearMemory2022View } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: yearMemory2023, inView: yearMemory2023View } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: yearMemory20237, inView: yearMemory20237View } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: yearMemory2024, inView: yearMemory2024View } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: yearMemory202410, inView: yearMemory202410View } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: yearMemory202412, inView: yearMemory202412View } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: yearMemory20253, inView: yearMemory20253View } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: yearMemory20255, inView: yearMemory20255View } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: yearMemory20257, inView: yearMemory20257View } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const { ref: theBlessingImg, inView: theBlessingImgView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const imageBaseClasses = "object-contain";
  const extraBoldHeaderBlackFontClass = "font-bold text-black";

  return (
    <section className={`relative z-10  `}>
      {/* Logo */}
      {/* FIRST SECTION */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 180 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex relative justify-center">
        <div className={`h-11/12`}>
          <img src="/aboutUs/aboutUs-topSection-2.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2  ${isMobile ? "w-72 h-72 -translate-y-3/10" : "w-2/3 -translate-y-1/2"}`}>
          <img src="/aboutUs/aboutUs-topSection-pigeon.png" alt="TB" className={imageBaseClasses} />
        </div>
      </motion.div>
      {/* 2ND SECTION */}
      <motion.div
        ref={secondImg}
        initial={{ opacity: 0, x: -180 }}
        animate={secondImgView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex relative justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-topSection-3-right-img.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/3 ${isMobile ? "w-52 h-52" : "w-1/3"}`}>
          <img src="/aboutUs/aboutUs-topSection-3-text.png" alt="TB" className={imageBaseClasses} />
        </div>
      </motion.div>
      {/* 3RD SECTION */}
      <div className="flex justify-center">
        <motion.div
          ref={thirdSection}
          initial={{ opacity: 0, x: -180 }}
          animate={thirdSectionView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex relative justify-center">
          <div className={``}>
            <img src="/aboutUs/aboutUs-section-3.1-img.png" alt="TB" className={`${imageBaseClasses} opacity-60`} />
          </div>
          <div className={`absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2 ${isMobile ? "w-52 h-52" : "w-1/2"}`}>
            <img src="/aboutUs/aboutUs-section-3-text-1.png" alt="TB" className={imageBaseClasses} />
          </div>
        </motion.div>
      </div>
      {/* 4TH SECTION */}
      {/* {!isMobile ? ( */}

      {/* MISSION VISION ACTION */}
      <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-3"}  bg-[#fffcf8] py-22 space-y-10 `}>
        <motion.div
          ref={vmaMotion}
          initial={{ opacity: 0, scale: 0 }}
          animate={vmaView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center col-span-1 items-center">
          <img src="/aboutUs/aboutUs-section-4-1-vision.png" alt="vision" className={`${isMobile ? "w-1/2 h-2/3" : "w-3/4 h-3/4"} `} />
        </motion.div>
        <motion.div
          ref={vmaMotion}
          initial={{ opacity: 0, scale: 0 }}
          animate={vmaView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center col-span-1 items-center">
          <img src="/aboutUs/aboutUs-section-4-2-mission.png" alt="mission" className={`${isMobile ? "w-1/2 h-2/3" : "w-3/4 h-3/4"} `} />
        </motion.div>
        <motion.div
          ref={vmaMotion}
          initial={{ opacity: 0, scale: 0 }}
          animate={vmaView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="flex justify-center col-span-1 items-center -translate-y-3">
          <img src="/aboutUs/aboutUs-section-4-3-action.png" alt="action" className={`${isMobile ? "w-1/2 h-2/3" : "w-3/4 h-3/4"} `} />
        </motion.div>
      </div>
      {/* ) : (
        <div className="grid grid-cols-2 bg-neutral-100 py-10 space-y-5">
          <div className={`col-span-1 justify-items-center `}>
            <div className="text-center  tracking-wider ">
              <h2 className={`${extraBoldHeaderBlackFontClass} text-xl `}> 我们的愿景</h2>
              <h2 className="text-xl font-bold text-amber-300 py-3"> Vision</h2>
               <h2> Vision</h2> 
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
               <h2> Vision</h2> 
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
               <h2> Vision</h2> 
              <h2 className="text-black text-md font-bold py-3">
                {" "}
                小组，聚点，训练，实践，
                <br /> 建立真实关系。{" "}
              </h2>
            </div>
          </div>
        </div>
      )} */}
      {/* THE BLESSING JOURNEY NOTE*/}

      <div className="flex py-22 space-y-10 justify-center bg-white ">
        <div className={`${isMobile ? "" : " py-10`"} text-center`}>
          <h1 className={` ${!isMobile ? "text-[2rem]" : "text-xl"} text-black font-bold  tracking-wider`}> The Blessing 的旅程</h1>
          <h3 className={`${!isMobile ? "text-[2rem]" : "text-md"} text-black  tracking-wider pt-10`}>
            {" "}
            从线上小组开始，到多个城市的聚点成立， {isMobile ? <br /> : <></>} The Blessing 的每一步的成长都见证{" "}
          </h3>
          <h3 className={`${!isMobile ? "text-[2rem]" : "text-md"} text-black  tracking-wider`}>
            {" "}
            着神的带领与人们的回应。这是我们的故事，也是你可以加入的旅程{" "}
          </h3>
        </div>
      </div>

      {/* THE BLESSING TIMELINE  */}
      {/* 2020 */}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-2020.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="">
            <h2 className={`${isMobile ? "text-lg text-center" : "text-[3rem] tracking-wider"}  font-bold text-black animate-pulse`}>
              {" "}
              2020{" "}
            </h2>
            <h3 className={`${isMobile ? "text-[0.6rem] text-center" : "text-[1.5rem] tracking-wider"}   font-bold text-black mt-2`}>
              {" "}
              在疫情中回应神的启示，我们开始 <br /> 线上聚会（ E P S & 小组），为教会 <br /> 预备属灵的粮仓。
            </h3>
          </div>
        </div>
      </div>

      {/* 2022 */}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-2022.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="">
            <h2 className={`${isMobile ? "text-lg text-center" : "text-[3rem] tracking-wider"}  font-bold text-black animate-pulse`}>
              {" "}
              2022{" "}
            </h2>
            <h3 className={`${isMobile ? "text-[0.6rem] text-center" : "text-[1.5rem] tracking-wider"}   font-bold text-black mt-2`}>
              {" "}
              第一间 The Blessing 在 Puchong <br /> 正式诞生，踏出职场祝福的第一步
            </h3>
          </div>
        </div>
      </div>

      {/* 2023 */}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-2023.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="">
            <h2 className={`${isMobile ? "text-lg text-center" : "text-[3rem] tracking-wider"}  font-bold text-black animate-pulse`}>
              {" "}
              2023{" "}
            </h2>
            <h3 className={`${isMobile ? "text-[0.6rem] text-center" : "text-[1.5rem] tracking-wider"}   font-bold text-black mt-2`}>
              {" "}
              The Blessing Sri Petaling <br /> 聚点成立，扩展属灵家庭的触角
            </h3>
          </div>
        </div>
      </div>
      {/* 2023.7 */}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-2023.7.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="">
            <h2 className={`${isMobile ? "text-lg text-center" : "text-[3rem] tracking-wider"}  font-bold text-black animate-pulse`}>
              {" "}
              2023.7{" "}
            </h2>
            <h3 className={`${isMobile ? "text-[0.6rem] text-center" : "text-[1.5rem] tracking-wider"}   font-bold text-black mt-2`}>
              {" "}
              举办第一次《遇见神营会》，
              <br /> 当天有18人决志信主，生命被翻转{" "}
            </h3>
          </div>
        </div>
      </div>
      {/* 2024 */}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-2024.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="">
            <h2 className={`${isMobile ? "text-lg text-center" : "text-[3rem] tracking-wider"}  font-bold text-black animate-pulse`}>
              {" "}
              2024{" "}
            </h2>
            <h3 className={`${isMobile ? "text-[0.6rem] text-center" : "text-[1.5rem] tracking-wider"}   font-bold text-black mt-2`}>
              {" "}
              The Blessing Sungai Wang <br /> 成立，走入城市中心，触及更多职 <br /> 场人
            </h3>
          </div>
        </div>
      </div>
      {/* 2024.10 */}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-2024.10.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="">
            <h2 className={`${isMobile ? "text-lg text-center" : "text-[3rem] tracking-wider"}  font-bold text-black animate-pulse`}>
              {" "}
              2024.10{" "}
            </h2>
            <h3 className={`${isMobile ? "text-[0.6rem] text-center" : "text-[1.5rem] tracking-wider"}   font-bold text-black mt-2`}>
              {" "}
              首届 The Blessing Conference 举办 <br />
              超过500 人参与，领受异象与装备{" "}
            </h3>
          </div>
        </div>
      </div>
      {/* 2024.12 */}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-2024.12.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="">
            <h2 className={`${isMobile ? "text-lg text-center" : "text-[3rem] tracking-wider"}  font-bold text-black animate-pulse`}>
              {" "}
              2024.12{" "}
            </h2>
            <h3 className={`${isMobile ? "text-[0.6rem] text-center" : "text-[1.5rem] tracking-wider"}   font-bold text-black mt-2`}>
              {" "}
              The Blessing Singapore 正式成立 <br />
              异象跨出国界，延伸至国 际
            </h3>
          </div>
        </div>
      </div>
      {/* 2025.3*/}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-2025.3.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="">
            <h2 className={`${isMobile ? "text-lg text-center" : "text-[3rem] tracking-wider"}  font-bold text-black animate-pulse`}>
              {" "}
              2025.3
            </h2>
            <h3 className={`${isMobile ? "text-[0.6rem] text-center" : "text-[1.5rem] tracking-wider"}   font-bold text-black mt-2`}>
              {" "}
              The Blessing Sibu 正式启动， <br /> 扩展到东马土地
            </h3>
          </div>
        </div>
      </div>
      {/* 2025.5*/}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-2025.5.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="">
            <h2 className={`${isMobile ? "text-lg text-center" : "text-[3rem] tracking-wider"}  font-bold text-black animate-pulse`}>
              {" "}
              2025.5
            </h2>
            <h3 className={`${isMobile ? "text-[0.6rem] text-center" : "text-[1.5rem] tracking-wider"}   font-bold text-black mt-2`}>
              {" "}
              the Blessing Muar 正式启动 <br />
              在更地广人稀的地区建立灯塔{" "}
            </h3>
          </div>
        </div>
      </div>
      {/* 2025.7*/}
      <div className="grid grid-cols-2 justify-center">
        <div className={``}>
          <img src="/aboutUs/aboutUs-2025.7.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div className="flex flex-col justify-center items-center bg-white">
          <div className="">
            <h2 className={`${isMobile ? "text-lg text-center" : "text-[3rem] tracking-wider"}  font-bold text-black animate-pulse`}>
              {" "}
              2025.7
            </h2>
            <h3 className={`${isMobile ? "text-[0.6rem] text-center" : "text-[1.5rem] tracking-wider"}   font-bold text-black mt-2`}>
              The Blessing Hong Kong 正式成立
              <br /> 信心跨越海岸，迈向更广 阔的场域
            </h3>
          </div>
        </div>
      </div>
      {/* 神在各个地点兴起 Section */}
      <div className="flex relative justify-center">
        <div className={`h-11/12`}>
          <img src="/aboutUs/aboutUs-section-6-img.png" alt="TB" className={imageBaseClasses} />
        </div>
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2  ${isMobile ? "w-46 h-46 -translate-y-1/3" : "w-1/2 -translate-y-1/2"}`}>
          <img src="/aboutUs/aboutUs-section-6-text.png" alt="TB" className={imageBaseClasses} />
        </div>
      </div>

      {/* 加入我们 Section */}
      <div className={`${isMobile ? "" : "my-10"} flex bg-black justify-center py-15 `}>
        <div className="text-white ">
          {" "}
          <h2 className="text-center text-[1.2rem] font-bold tracking-wider"> 你的参与，可以带来真实祝福 </h2>
          <div className={`${isMobile ? "flex flex-col space-y-10  justify-center" : "space-x-15 w-full "}  mt-10 justify-center`}>
            <button className=" bg-black text-white text-lg font-semibold py-4 px-10 rounded-md hover:bg-gray-200 hover:text-black border border-white-100 transition cursor-pointer group">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP7juQ2s9_cftvJo3BRDEqSDSrU9wpyayteKl1Jr1vTS_wkQ/viewform">
                {" "}
                我想加入一个 Blessing 小组{" "}
              </a>
              <i className="pi pi-users ml-1 transition-all font-bold durantion-400 group-hover:-translate-y-2 group-hover:text-blue-900 animate-bounce" />
            </button>
            <button className="bg-black text-white text-lg font-semibold py-4 px-10 rounded-md hover:bg-gray-200 hover:text-black border border-white-100 transition cursor-pointer group">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP7juQ2s9_cftvJo3BRDEqSDSrU9wpyayteKl1Jr1vTS_wkQ/viewform">
                我想在我的职场开始聚点{" "}
              </a>
              <i className="pi pi-map-marker ml-1 transition-all font-bold durantion-400 group-hover:-translate-y-2 group-hover:text-blue-900 animate-bounce" />
            </button>
            <button className="bg-black text-white text-lg font-semibold py-4 px-10 rounded-md hover:bg-gray-200 hover:text-black group border border-white-100 transition cursor-pointer">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP7juQ2s9_cftvJo3BRDEqSDSrU9wpyayteKl1Jr1vTS_wkQ/viewform">
                我想了解更多 / 一起合作{" "}
              </a>
              <i className="pi pi-users ml-1 transition-all font-bold durantion-400 group-hover:-translate-y-2 group-hover:text-blue-900 animate-bounce" />
            </button>
            {/* <button className="bg-white text-black text-lg font-semibold py-3 px-6 rounded-md hover:bg-gray-200 transition">
              联系我们
            </button> */}
          </div>
          <div className="flex justify-center  mt-10">
            <button
              className={`${
                isMobile ? "w-full" : "translate-x-5"
              } bg-amber-200 text-black text-lg font-black cursor-pointer py-4 px-20 rounded-md hover:bg-amber-500 transition group`}>
              <p>
                联系我们
                <i className="pi pi-phone ml-3 transition-all font-bold durantion-400 group-hover:-translate-y-2 group-hover:text-blue-900 animate-bounce" />
              </p>
            </button>
          </div>
        </div>
      </div>
      {/* 
          ref={theBlessingImg}
          initial={{ opacity: 0, scale: 0 }}
          animate={theBlessingImgView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }} */}
      <div className="relative justify-center ">
        <div>
          <img src="/aboutUs/aboutUs-last-section-img-2.jpg" alt="TB" className={`${imageBaseClasses} opacity-50`} />
        </div>
        <div className={`${isMobile ? "w-3/4 mt-4 -translate-x-3/5" : "-translate-x-1/2 "} absolute top-1/2 left-1/2  -translate-y-1/2`}>
          <h2 className={`${isMobile ? " text-[1.3rem] mt-5" : " text-[3.5rem] my-20"} font-extrabold tracking-wider `}>
            {" "}
            Blessed to be <br /> The Blessings
          </h2>

          <div className={`${isMobile ? "flex space-x-4 mt-5 min-w-max" : "flex space-x-10 mt-5 w-full "}`}>
            <button
              className={`${isMobile ? "w-18 h-12 text-xs " : "w-52 h-16 "} bg-white text-black  font-bold px-2
              `}>
              <a href="#" className="">
                {" "}
                关于我们{" "}
              </a>
            </button>
            <button
              className={`${isMobile ? "w-18 h-12 text-xs " : "w-52 h-16 "} bg-white text-black  font-bold px-2
              `}>
              {" "}
              <a href="#" className="">
                {" "}
                Vision{" "}
              </a>
            </button>
            <button
              className={`${isMobile ? "w-18 h-12 text-xs " : "w-52 h-16 "} bg-white text-black  font-bold px-2
              `}>
              {" "}
              <a href="#"> 加入聚点 </a>
            </button>
            <button
              className={`${isMobile ? "w-18 h-12 text-xs " : "w-52 h-16 "} bg-white text-black  font-bold px-2
              `}>
              {" "}
              <a href="#"> 联系我们 </a>
            </button>{" "}
          </div>

          {/* COMMUNITY CONNECTION */}
          <div
            className={`${
              isMobile
                ? "flex space-x-5 justify-center mt-3 min-w-max mb-5"
                : "flex justify-center font-bold mt-8 space-x-10 text-lg w-full "
            }`}>
            <a
              href="https://www.instagram.com/fgatheblessing"
              className={`${
                isMobile ? "text-[2.3rem]" : "text-[3rem]"
              } pi pi-instagram  transform duration-300 ease-out hover:scale-105 hover:text-red-700 hover:bg-white rounded-lg p-3`}></a>
            <a
              href="http://facebook.com/fgatheblessing"
              className={`${
                isMobile ? "text-[2.3rem]" : "text-[3rem]"
              } pi pi-facebook  transform duration-300 ease-out hover:scale-105 hover:text-red-700 hover:bg-white rounded-lg p-3`}></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContent;
