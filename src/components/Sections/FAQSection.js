import React, { useState } from 'react';
import Container from '../Layout/Container';
import Card from '../UI/Card';
import useResponsive from '../../hooks/useResponsive';

const FAQSection = () => {
  const { isMobile } = useResponsive();
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'What is The Blessing Asia conference about?',
      answer: 'The Blessing Asia is a premier workplace conference focused on creating blessed, productive, and meaningful work environments across Asia. It brings together industry leaders, entrepreneurs, and professionals to share insights on workplace transformation, leadership, and creating value in the modern economy.'
    },
    {
      id: 2,
      question: 'Who should attend this conference?',
      answer: 'This conference is ideal for business leaders, entrepreneurs, HR professionals, team managers, startup founders, and anyone interested in workplace transformation and creating positive impact in their professional environment.'
    },
    {
      id: 3,
      question: 'What is included in the ticket price?',
      answer: 'Your ticket includes access to all main conference sessions, networking breaks, welcome kit with materials, refreshments throughout both days, and access to the conference app with speaker resources and networking features.'
    },
    {
      id: 4,
      question: 'Are the masterclass sessions included in the main ticket?',
      answer: 'No, masterclass sessions require separate registration and payment. These are intensive 90-minute workshops with limited capacity to ensure quality interaction and hands-on learning experience.'
    },
    {
      id: 5,
      question: 'What languages will be used during the conference?',
      answer: 'The main conference sessions will be conducted in English with Chinese translation available for key sessions. All materials and resources will be provided in English.'
    },
    {
      id: 6,
      question: 'Is there a dress code for the event?',
      answer: 'We recommend business casual attire. The venue is air-conditioned, so please dress comfortably for a full day of sessions and networking.'
    },
    {
      id: 7,
      question: 'Can I get a refund if I cannot attend?',
      answer: 'Tickets are non-refundable but are transferable to another person. Please contact our support team at least 48 hours before the event to arrange ticket transfers.'
    },
    {
      id: 8,
      question: 'Will there be networking opportunities?',
      answer: 'Yes! We have dedicated networking sessions, coffee breaks, lunch periods, and evening networking events. The conference app will also help you connect with other attendees before and during the event.'
    },
    {
      id: 9,
      question: 'Is parking available at the venue?',
      answer: 'Yes, Hyatt Regency Kota Kinabalu provides parking facilities. However, spaces may be limited during peak times. We recommend carpooling or using ride-sharing services when possible.'
    },
    {
      id: 10,
      question: 'Will sessions be recorded?',
      answer: 'Selected main stage sessions will be recorded and made available to ticket holders after the event. Masterclass sessions and networking activities will not be recorded to maintain privacy and encourage open discussion.'
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="min-h-screen bg-gray-900 py-16 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl lg:text-5xl'} font-bold mb-4 text-white`}>
            Frequently Asked Questions
          </h2>
          <p className={`${isMobile ? 'text-base' : 'text-lg'} text-gray-300 mb-6 max-w-3xl mx-auto`}>
            Find answers to common questions about The Blessing Asia conference. Can't find what you're looking for? Contact our support team.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <Card key={faq.id} variant="glass" className="overflow-hidden">
                <button
                  className="w-full text-left focus:outline-none"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <div className="flex items-center justify-between p-2">
                    <h3 className="text-white font-semibold text-lg pr-4">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-300 ${openFAQ === faq.id ? 'rotate-180' : ''} flex-shrink-0`}>
                      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-2 pb-4 pt-2 border-t border-gray-700/30">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 lg:mt-16">
          <Card variant="glass" className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you with any additional questions about the conference.
            </p>
            
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-6`}>
              <div className="text-center">
                <div className="text-orange-300 font-semibold mb-2">Email Support</div>
                <a href="mailto:support@theblessingasia.com" className="text-gray-300 hover:text-white transition-colors">
                  support@theblessingasia.com
                </a>
              </div>
              
              <div className="text-center">
                <div className="text-orange-300 font-semibold mb-2">Phone Support</div>
                <a href="tel:+60123456789" className="text-gray-300 hover:text-white transition-colors">
                  +60 12-345-6789
                </a>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-700/30">
              <p className="text-gray-400 text-sm">
                Support hours: Monday - Friday, 9:00 AM - 6:00 PM (GMT+8)
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
