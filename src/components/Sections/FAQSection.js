import React, { useState } from 'react';
import Container from '../Layout/Container';
import Card from '../UI/Card';
import useResponsive from '../../hooks/useResponsive';

const FAQSection = () => {
  const { isMobile } = useResponsive();
  const [openCategory, setOpenCategory] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ data organized by categories
  const faqCategories = [
    {
      id: 'conference-info',
      title: '特会资讯',
      questions: [
        {
          id: 1,
          question: '什么是Blessing Conference Asia 亚洲职场蒙福特会?',
          answer: '不仅仅是一场聚会，更是一个机会，让你在这两天的特会中与神面对面，重新对齐方向、再次被点燃。\n\n 我们一起敬拜、聆听神的话语、彼此建造，在个人生命、教会、职场与城市中，看见新的格局、新的价值、新的使命感。\n\n你不会想错过这两天。\n\n因为在基督里，我们不只是被呼召来跟随，更是被差派去建造未来、释放影响、成为造局者。'
        },
        {
          id: 2,
          question: 'Blessing Conference Asia 亚洲职场蒙福特会，举办的时间和地点？',
          answer: '特会将在 22/08/2025 - 23/08/2025 在马来西亚沙巴州 Kota Kinabalu 的 Hilton Kota Kinabalu 进行。\n\n地址：Jalan Tunku Abdul Rahman, Asia City, 88000 Kota Kinabalu, Sabah.\n\nGoogle: https://g.co/kgs/u1W9c6H'
        },
        {
          id: 3,
          question: '对于这场特会，我可以期待什么？',
          answer: '一个重新与神对齐、被点燃异象的时刻。\n\n在敬拜、信息与连结中，看见自己的角色、使命与可能性，\n\n并预备自己成为职场与城市中的影响者——一个真正的造局者。'
        },
        {
          id: 4,
          question: '这场特会适合谁参加？',
          answer: '我们盼望可以在特会中特别让东马的弟兄姐妹们，马来西亚甚至是亚洲每个城市愿意回应神呼召的人能够参与在我们当中！'
        },
        {
          id: 5,
          question: '特会包程什么呢？',
          answer: '更详细的资讯我们将尽快与你分享。\n\n为方便你的行程安排, 我们的特会是在 22/08/2025 星期五下午开始, 23/08/2025 晚上结束。'
        }
      ]
    },
    {
      id: 'tickets',
      title: '购票相关',
      questions: [
        {
          id: 6,
          question: '请问我要如何购票?',
          answer: '可以到这个 链接 进行购票' // Assuming "链接" will be a hyperlink later or is clear in context
        },
        {
          id: 7,
          question: '请问我可以为他人购票吗?',
          answer: '可以但是在购票的时候请记得填写出席者的资料。\n\n例如：我为朋友 A 和朋友 B 一起购票，购票时需要填写我自己、朋友 A 以及朋友 B 三位不同的个人资讯（包含不重复的手机号码）。'
        },
        {
          id: 8,
          question: '除了 Ticket2U 之外, 还有其他方式购票吗?',
          answer: 'Ticket2U 为本次特会活动的唯一购票管道，恕不接受其他方式购票。'
        },
        {
          id: 'tickets-4', // New ID for new question
          question: '我买的特会票有包含膳食和住宿的吗?',
          answer: '所有票种皆不包含交通和住宿，但会包含第一日的晚餐，第二日的午餐和晚餐。'
        },
        {
          id: 'tickets-5', // New ID
          question: '请问有单日票或者单一场次票可以购买的吗?',
          answer: '我们的特会票都是全部场次参与, 没有单日或单场售票。'
        },
        {
          id: 'tickets-6', // New ID
          question: '购票后如果无法出席, 可否申请退票?',
          answer: '目前无法提供退票或退款，可是可以选择转让给他人。'
        },
        {
          id: 'tickets-7', // New ID
          question: '我要如何更改我的购票资讯 / 报名资讯?',
          answer: '购票者可以自己通知 Ticket2U 平台，可是会有额外平台服务收费。'
        },
        {
          id: 'tickets-8', // New ID
          question: '我需要在什么日期前完成购票手续 / 报名手续呢?',
          answer: '特会票名额有限, 售完为止。恳请尽早购票并且预留参与特会的时间, 预备心一起来经历神 ♥️'
        },
        {
          id: 'tickets-9', // New ID
          question: '我找不到我的确认购票 Email, 我应该怎么办?',
          answer: '你可以检查一下垃圾邮件夹，看看我们的邮件有没有被你的电邮系统挡住。\n为了避免邮件被挡或收不到，我们建议你在填写会员注册电邮时，尽量不要使用 Yahoo 或 Hotmail 的信箱，以免收不到购票确认Email。'
        }
      ]
    },
    {
      id: 'logistics',
      title: '交通/住宿/膳食相关',
      questions: [
        {
          id: 9,
          question: '特会有配合的停车场吗？会场本身有停车位吗？',
          answer: '本次特会将于 Hilton Kota Kinabalu（亚庇希尔顿酒店） 举行。\n参加者可直接使用酒店提供的停车位。\n\n停车费为每小时 RM4，或每日最高 RM15（以酒店政策为准）\n\n停车位数量有限，建议提早抵达以确保顺利停车\n\n若有特会专属折扣或免费停车安排，我们将另行公告，敬请留意最新通知'
        },
        {
          id: 'logistics-2', // New ID for new question
          question: '抵达会场的交通方式有哪些？',
          answer: '自驾前往\nHilton Kota Kinabalu 设有宾客停车位，数量有限，建议尽早出发以确保有位停车。\n\n搭乘电召车或计程车\n可使用 Grab 或其他电召车服务，直接设定「Hilton Kota Kinabalu」为目的地，即可顺利抵达。\n\n搭乘公共交通 / 巴士\n可搭乘前往亚庇市中心的巴士，抵达后步行至酒店。Hilton 位于市中心，交通便利。\n\n从机场出发\n从亚庇国际机场（KKIA）出发，车程约 15–20 分钟。建议搭乘 Grab、电召车或使用酒店接送服务。'
        },
        {
          id: 10,
          question: '推荐的住宿选择？',
          answer: '除了 Hilton Kota Kinabalu 之外，参加者可以考虑 Holiday Inn Express Kota Kinabalu 或 Cititel Express Kota Kinabalu。'
        }
      ]
    },
    {
      id: 'venue',
      title: '场内/座位相关',
      questions: [
        {
          id: 12, // Updated ID
          question: '特会的座位是固定的吗？',
          answer: '本次特会期间，除了有行动不便或需要轮椅通道的会众之外，恕不提供预留座位。\n如果你希望坐在前排位置，欢迎你提早到场排队入场喔！'
        },
        {
          id: 13, // New ID
          question: '我可以在场内录影、录音吗？',
          answer: '请不要携带相机、摄像机、DV、录音机等设备入场。未经主办单位同意，禁止拍照、录影或录音。'
        },
        {
          id: 14, // New ID
          question: '行动不便需要申请轮椅通道，可以怎么提出特殊协助需求呢？',
          answer: '在报名及购买特会门票时，请务必在询问“您是否需要特别协助？”的题目上勾选“Wheelchair access / 轮椅通道”。\n\n之后，我们会为你安排轮椅通道区的座位，或者你可以在“其他”选项中填写更多特殊协助需求的详细信息。'
        }
      ]
    },
    {
      id: 'services',
      title: '特会服事伙伴',
      questions: [
        {
          id: 15, // Updated ID from 14
          question: '如何索取特会包？',
          answer: '每位出席者将在第一日登记时，于登记处领取特会包。\n请准备好 Ticket2U 的 QR 码，出示给服事同工扫码登记出席。\n特会包内容包括：\nConference Tag（出入识别证）\n大会手册\n大会精心准备的周边\n\n\n请妥善保管你的特会包物品，部分内容将于会场中使用。'
        },
        {
          id: 16, // Updated ID from 15
          question: '有哪些服事岗位？',
          answer: '服事岗位包括：\n• 接待和引导\n• 技术支持\n• 敬拜团队\n• 翻译服务\n• 儿童照顾\n• 后勤支持'
        }
      ]
    },
    {
      id: 'children',
      title: '儿童相关',
      questions: [
        {
          id: 16,
          question: '可以带孩子参加吗？',
          answer: '我们欢迎家庭参与！特会期间提供专业的儿童照顾服务，让父母可以专心参与聚会。'
        },
        {
          id: 17,
          question: '儿童照顾服务详情？',
          answer: '儿童照顾服务：\n• 适合3-12岁儿童\n• 专业儿童工作者照顾\n• 有趣的活动和游戏\n• 需要提前预约\n• 额外费用：RM 50/天'
        }
      ]
    }
  ];

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
    setOpenFAQ(null); // Close any open FAQ when switching categories
  };

  const toggleFAQ = (questionId) => {
    setOpenFAQ(openFAQ === questionId ? null : questionId);
  };

  // Helper function to render formatted answers (e.g., with bold text or links)
  const renderFormattedAnswer = (currentQuestion) => {
    const ticketUrl = "https://www.ticket2u.com.my/event/43661_7d063d69f0a4491d841783172b824776";

    if (currentQuestion.id === 3) {
      const answerText = currentQuestion.answer;
      const targetWord = '造局者';
      const parts = answerText.split(targetWord);
      if (parts.length === 2) {
        return (
          <>
            {parts[0]}
            <strong>{targetWord}</strong>
            {parts[1]}
          </>
        );
      }
    } else if (currentQuestion.id === 6) {
      const answerText = currentQuestion.answer;
      const linkWord = '链接';
      const parts = answerText.split(linkWord);
      if (parts.length === 2) {
        return (
          <>
            {parts[0]}
            <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
              {linkWord}
            </a>
            {parts[1]}
          </>
        );
      }
    }
    return currentQuestion.answer; // Return original answer if no special formatting is needed
  };
  // Filter out the "儿童相关" and "特会服事伙伴" categories
  const filteredFaqCategories = faqCategories.filter(category => category.id !== 'children' && category.id !== 'services');

  return (
    <section id="faq" className="min-h-screen bg-gray-900 py-20">
      <Container>
        {/* This new div will be the gradient container, similar to TicketsSection.js */}
        <div className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-b from-white/5 to-white/15 backdrop-blur-[24px] border border-gray-700/50">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold mb-4 text-white`}>
              FAQs
            </h2>
          </div>

          {/* Mobile Layout - Vertical Categories */}
          {isMobile && (
            <div className="space-y-4">
              {filteredFaqCategories.map((category) => (
                <Card key={category.id} variant="glass" className="overflow-hidden bg-gradient-to-b from-white/5 to-white/15 backdrop-blur-[24px] border border-gray-700/50">
                  {/* Category Header */}
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center justify-between p-4">
                      <h3 className="text-orange-400 font-semibold text-lg">
                        {category.title}
                      </h3>
                      <div className={`transform transition-transform duration-300 ${openCategory === category.id ? 'rotate-180' : ''} flex-shrink-0`}>
                        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Category Questions */}
                  <div className={`transition-all duration-300 ease-in-out ${openCategory === category.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="border-t border-gray-700/30">
                      {category.questions.map((question) => (
                        <div key={question.id} className="border-b border-gray-700/20 last:border-b-0">
                          <button
                            className="w-full text-left focus:outline-none"
                            onClick={() => toggleFAQ(question.id)}
                          >
                            <div className="flex items-center justify-between p-4">
                              <h4 className="text-white font-medium text-sm pr-4">
                                {question.question}
                              </h4>
                              <div className={`transform transition-transform duration-300 ${openFAQ === question.id ? 'rotate-180' : ''} flex-shrink-0`}>
                                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                              </div>
                            </div>
                          </button>

                          <div className={`transition-all duration-300 ease-in-out ${openFAQ === question.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                            <div className="px-4 pb-4">
                              <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                {renderFormattedAnswer(question)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Desktop Layout - Single Column with Categories */}
          {!isMobile && (
            <div className="max-w-6xl mx-auto space-y-4">
              {filteredFaqCategories.map((category, categoryIndex) => (
                <Card key={category.id} variant="glass" className="overflow-hidden bg-gradient-to-b from-white/5 to-white/15 backdrop-blur-[24px] border border-gray-700/50">
                  {/* Category Header */}
                  <button
                    className="w-full text-left focus:outline-none"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center justify-between p-4 border-b border-gray-700/30">
                      <h3 className="text-orange-400 font-semibold text-lg">
                        {category.title}
                      </h3>
                      <div className="flex-shrink-0">
                        {/* Show minus (-) when expanded, plus (+) when collapsed */}
                        {(openCategory === category.id || (openCategory === null && categoryIndex === 0)) ? (
                          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Category Questions - Grid Layout */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    openCategory === category.id || (openCategory === null && categoryIndex === 0)
                      ? 'max-h-screen opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="p-4">
                      {category.questions.length > 0 && (
                        <div className="grid grid-cols-2 gap-4">
                          {category.questions.map((question) => (
                            <Card key={question.id} variant="default" className="overflow-hidden bg-gradient-to-b from-white/5 to-white/15 backdrop-blur-[24px] border border-gray-700/50">
                                <button
                                  className="w-full text-left focus:outline-none"
                                  onClick={() => toggleFAQ(question.id)}
                                >
                                  <div className="flex items-center justify-between p-4">
                                    <h4 className="text-white font-medium text-base pr-4">
                                      {question.question}
                                    </h4>
                                    <div className="flex-shrink-0">
                                      {/* Show minus (-) when expanded, plus (+) when collapsed */}
                                      {openFAQ === question.id ? (
                                        <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                      ) : (
                                        <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                      )}
                                    </div>
                                  </div>
                                </button>

                                <div className={`transition-all duration-300 ease-in-out ${
                                  openFAQ === question.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                } overflow-hidden`}>
                                  <div className="px-4 pb-4 border-t border-gray-700/30 pt-4">
                                    <div className="pt-4">
                                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                        {renderFormattedAnswer(question)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            ))}
                            </div>
                          )} { /* This closes the "category.questions.length > 0 && (" conditional */ }
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
