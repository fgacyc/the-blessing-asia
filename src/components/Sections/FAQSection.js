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
          question: '什么是Blessing Conference Asia 亚洲职场蒙福特会？',
          answer: '不仅仅是一场聚会，更是一个机会，让你在三天的特会中与神相遇，里新对齐方向、首次被装备。\n\n我们一起敬拜、聆听神的话语，彼此建造，在个人生命、教会、职场与城市中，看见新的格局、新的价值、新的使命。\n\n你不会错错过这三天。\n\n因为在这里，我们不只是被呼召来敬拜，更是被装备去建造未来、释放影响、成为光与盐。'
        },
        {
          id: 2,
          question: 'Blessing Conference Asia 亚洲职场蒙福特会，举办的时间和地点？',
          answer: '时间：2024年11月15-17日\n地点：马来西亚沙巴亚庇凯悦酒店\n\n为期三天的特会将包含主题演讲、工作坊、网络交流和敬拜时间。'
        },
        {
          id: 3,
          question: '对于这场特会，我可以期待什么？',
          answer: '你可以期待：\n• 来自亚洲各地的职场领袖分享\n• 实用的职场转化策略和工具\n• 深度的敬拜和祷告时间\n• 与志同道合的弟兄姐妹建立连接\n• 个人生命和事业的突破'
        },
        {
          id: 4,
          question: '这场特会适合谁参加？',
          answer: '这个特会适合：\n• 职场基督徒领袖和专业人士\n• 企业家和创业者\n• 教会牧者和同工\n• 对职场宣教有负担的弟兄姐妹\n• 寻求在工作中活出信仰的基督徒'
        },
        {
          id: 5,
          question: '特会包程什么呢？',
          answer: '特会包含：\n• 所有主要聚会和工作坊\n• 欢迎礼包和会议资料\n• 茶歇和午餐\n• 网络交流活动\n• 会议应用程序访问权限'
        }
      ]
    },
    {
      id: 'tickets',
      title: '购票相关',
      questions: [
        {
          id: 6,
          question: '如何购买特会门票？',
          answer: '您可以通过我们的官方网站在线购买门票，或联系我们的客服团队协助购票。我们接受多种支付方式。'
        },
        {
          id: 7,
          question: '门票价格是多少？',
          answer: '早鸟票：RM 299（限时优惠）\n标准票：RM 399\n学生票：RM 199（需提供学生证明）\n\n价格包含所有主要聚会、资料包和餐饮。'
        },
        {
          id: 8,
          question: '可以退票吗？',
          answer: '门票一经购买不可退款，但可以转让给他人。如需转让，请在特会开始前48小时联系我们的客服团队。'
        }
      ]
    },
    {
      id: 'logistics',
      title: '交通/住宿/膳食相关',
      questions: [
        {
          id: 9,
          question: '会场有停车位吗？',
          answer: '凯悦酒店提供停车设施，但高峰时段可能车位有限。建议拼车或使用网约车服务。'
        },
        {
          id: 10,
          question: '推荐的住宿选择？',
          answer: '我们推荐入住会议酒店凯悦酒店，享受特别优惠价格。也可选择附近其他酒店，我们提供推荐清单。'
        },
        {
          id: 11,
          question: '膳食安排如何？',
          answer: '特会期间提供茶歇和午餐。我们会照顾不同的饮食需求，请在注册时告知特殊饮食要求。'
        }
      ]
    },
    {
      id: 'venue',
      title: '场内/座位相关',
      questions: [
        {
          id: 12,
          question: '会场的座位安排？',
          answer: '采用开放式座位，先到先得。VIP票持有者享有前排座位保留。建议提早到场选择理想座位。'
        },
        {
          id: 13,
          question: '会场有什么设施？',
          answer: '会场配备：\n• 专业音响和投影设备\n• 空调系统\n• WiFi网络\n• 无障碍设施\n• 祷告室\n• 休息区'
        }
      ]
    },
    {
      id: 'services',
      title: '特会服事伙伴',
      questions: [
        {
          id: 14,
          question: '如何成为特会志愿者？',
          answer: '我们欢迎有心服事的弟兄姐妹加入志愿者团队。请通过官网申请或联系我们了解服事机会。'
        },
        {
          id: 15,
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

  return (
    <section id="faq" className="min-h-screen bg-gray-900 py-16 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold mb-4 text-white`}>
            FAQs
          </h2>
        </div>

        {/* Mobile Layout - Vertical Categories */}
        {isMobile && (
          <div className="space-y-4">
            {faqCategories.map((category) => (
              <Card key={category.id} variant="glass" className="overflow-hidden">
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
                              {question.answer}
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
            {faqCategories.map((category, categoryIndex) => (
              <Card key={category.id} variant="glass" className="overflow-hidden">
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
                    <div className="space-y-4">
                      {/* First 4 questions in 2-column grid */}
                      {category.questions.length > 0 && (
                        <div className="grid grid-cols-2 gap-4">
                          {category.questions.slice(0, 4).map((question) => (
                            <Card key={question.id} variant="default" className="overflow-hidden">
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
                                <div className="px-4 pb-4 border-t border-gray-700/30">
                                  <div className="pt-4">
                                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                      {question.answer}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      )}

                      {/* 5th question and beyond - full width */}
                      {category.questions.length > 4 && (
                        <div className="space-y-4">
                          {category.questions.slice(4).map((question) => (
                            <Card key={question.id} variant="default" className="overflow-hidden w-full">
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
                                <div className="px-4 pb-4 border-t border-gray-700/30">
                                  <div className="pt-4">
                                    <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                                      {question.answer}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default FAQSection;
