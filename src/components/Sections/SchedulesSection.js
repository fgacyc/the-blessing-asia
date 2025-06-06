import React from 'react';
import Container from '../Layout/Container';
import useResponsive from '../../hooks/useResponsive';

const SchedulesSection = () => {
  const { isMobile } = useResponsive();

  const scheduleData = {
    1: {
      date: '22 Aug 2025 | Fri',
      items: [
        {
          time: '12:00PM',
          title: '报到与领取特会包'
        },
        {
          time: '02:00PM',
          title: '聚会（一）'
        },
        {
          time: '03:30PM',
          title: '小休 & 交流'
        },
        {
          time: '04:00PM',
          title: '聚会（二'
        },
        {
          time: '06:00PM',
          title: '晚餐'
        },
        {
          time: '07:00PM',
          title: '聚会（三'
        },
        {
          time: '09:00PM',
          title: 'Blessing 小组分享'
        }
      ]
    },
    2: {
      date: '23 Aug 2025 | Sat',
      items: [
        {
          time: '10:00AM',
          title: ' 聚会（四）'
        },
        {
          time: '11:30AM',
          title: '小休'
        },
        {
          time: '11:45PM',
          title: '聚会（五）'
        },
        {
          time: '01:00PM',
          title: '午餐 & 交流'
        },
        {
          time: '02:00PM',
          title: '自由时间'
        },
        {
          time: '04:00PM',
          title: '大师课'
        },
        {
          time: '06:00PM',
          title: '晚餐'
        },
        {
          time: '07:00PM',
          title: '医治复兴特会'
        }
      ]
    }
  };

  // Component to render a single day's schedule
  const DaySchedule = ({ dayData, dayNumber }) => (
    <div className="bg-gradient-to-b from-white/5 to-white/15 backdrop-blur-[24px] rounded-lg p-6 border border-gray-700/50">
      {/* Day Header */}
      <div className="mb-6 flex flex-row gap-2 items-center">
        <h3 className="text-white text-xl font-bold mb-1">
          Day {dayNumber < 10 ? `0${dayNumber}` : dayNumber}
        </h3>
        <p className="text-gray-400 text-sm ">{dayData.date}</p>
      </div>

      {/* Schedule Items */}
      <div className="space-y-4">
        {dayData.items.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            {/* Orange bullet point */}
            <div className="flex-shrink-0 mt-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>

            {/* Time */}
            <div className="flex-shrink-0 w-16">
              <span className="text-orange-400 text-sm font-medium">{item.time}</span>
            </div>

            {/* Title */}
            <div className="flex-grow">
              <p className="text-white text-sm">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="schedules" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Orange Glow Effect - Left Center */}
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-96 h-96 lg:w-[500px] lg:h-[500px] bg-orange-500/90 rounded-full blur-3xl opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold mb-4 text-white`}>
            日程表
          </h2>
        </div>

        {isMobile ? (
          // Mobile Layout - Both days stacked vertically
          <div className="max-w-md mx-auto space-y-6">
            <DaySchedule dayData={scheduleData[1]} dayNumber={1} />
            <DaySchedule dayData={scheduleData[2]} dayNumber={2} />
          </div>
        ) : (
          // Desktop/Webview Layout - Two columns side by side
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <DaySchedule dayData={scheduleData[1]} dayNumber={1} />
              <DaySchedule dayData={scheduleData[2]} dayNumber={2} />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default SchedulesSection;
