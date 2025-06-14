import React from 'react';
import Container from '../Layout/Container';
import useResponsive from '../../hooks/useResponsive';

const MasterclassSection = () => {
  const { isMobile } = useResponsive();

  const masterclassData = [
    {
      id: 'mc1',
      imageSrc: '/MC-1.png',
      imageAlt: 'Masterclass 1 Image',
      title: '布局 × 掌局',
      speaker: '台湾以勒企业董事长 - 叶果先生',
      question: '你是领导者、企业主或组织核心成员？',
      answer: '让资源合一，为神国目的而动',
      description: '带你掌握如何辨识、整合并倍增神赐下的资源、人脉与平台，\n打造一套不靠你也能动、对齐神国的属灵系统。 \n释放自己，也释放神的目的在你手中的组织。'
    },
    {
      id: 'mc2',
      imageSrc: '/MC-2.png',
      imageAlt: 'Masterclass 2 Image',
      title: '破局 × 造局',
      speaker: '台湾世界展望会 - 李绍龄会长',
      question: '你常感到混乱、疲于奔命？',
      answer: '从混乱中脱身，为国度建立可倍增的系统',
      description: '让你学会洞察属灵与组织的盲点，跳脱焦虑型执行循环。 \n在神赐的位份上主动设局，建造不能被偷走的产业与平台。 \n不再只是应付工作，而是带着异象精准出牌。'
    },
    {
      id: 'mc3',
      imageSrc: '/MC-3.png',
      imageAlt: 'Masterclass 3 Image',
      title: '转局 × 立局',
      speaker: '台湾台安医院行政副院长兼心脏外科主任 - 袁明琦医师',
      question: '你渴望对齐呼召、建造属神的事业？',
      answer: '用属天眼光，建立永恒影响力的事业蓝图',
      description: '一起拆解世界定义的成功，回归神的蓝图。 \n学会如何将恩赐、负担与商业结合，打造有使命、有影响、有属灵遗产的企业。 \n不只是赚钱，更要荣耀神、影响时代'
    },
  ];

  return (
    <section
      id="masterclass"
      className="min-h-screen bg-black py-16 lg:py-24"
    >
      <Container>
        {/* Outer grey box now wraps both header and cards */}
        <div className={`bg-gradient-to-b from-white/5 to-white/15 backdrop-blur-[24px] rounded-lg p-6 lg:p-8 border border-gray-700/50 max-w-6xl mx-auto relative overflow-hidden ${
          !isMobile ? "bg-[url('/glow-bg.png')] bg-no-repeat bg-center bg-cover" : ""
        }`}>
          {/* Section Header */}
          <div className="text-center mb-10 lg:mb-14">
            <h3 className="inline-block text-base lg:text-lg font-semibold text-black bg-gradient-to-tr from-orange-500 to-orange-300/30 px-10 py-2 rounded-tl-4xl rounded-br-4xl mb-3">
              三大核心篇章
            </h3>
            <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold mb-4 text-orange-400`}>
              MASTERCLASS 大师课
            </h2>
            <p className="text-lg lg:text-xl mb-3">
              从高效执行者，跃升为系统掌局者
            </p>
            <p className="text-sm lg:text-base max-w-2xl mx-auto whitespace-pre-line">
              不是更拼命，而是更有策略。{'\n'}
              不是更聪明，而是更对齐神的心意。{'\n'}
              将带你从“做事的人”，成为“设局的人”。
            </p>
          </div>

          {/* Masterclass Content Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masterclassData.map((mc) => (
              <div key={mc.id} className="bg-gradient-to-b from-white/5 to-white/15 backdrop-blur-[24px] rounded-lg p-6 border border-gray-700/50 flex flex-col">
                <div className="mb-4 h-40 rounded-md flex items-center justify-start">
                  <img
                    src={mc.imageSrc}
                    alt={mc.imageAlt}
                    className="max-h-full max-w-full object-contain rounded"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-orange-400 via-orange-300 to-white bg-clip-text text-transparent">
                  {mc.title}
                </h3>
                <h4 className="text-white text-xs mt-2 mb-1">
                  {mc.question}
                </h4>
                <p className="text-gray-300 text-sm mb-3 whitespace-pre-line">
                  {mc.answer}
                </p>
                <div className="flex items-center text-orange-400 text-sm mt-3 mb-4">
                  <img src="/Speaker.png" alt="Speaker Icon" className="w-4 h-4 mr-2" />
                  <span>
                    讲员： {mc.speaker}
                  </span>
                </div>
                <p className=" text-xs text-gray-300 italic font-normal pt-2 whitespace-pre-line">
                  {mc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MasterclassSection;
