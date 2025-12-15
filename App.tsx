import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from './components/Section';
import { Hero } from './components/Hero';
import { FeatureCard } from './components/FeatureCard';
import { WhyUseSection } from './components/WhyUseSection';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Navigation } from './components/Navigation';
import { SERVICE_DATA } from './constants';
import { Zap, ArrowUpRight } from 'lucide-react';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop;
        const windowHeight = window.innerHeight;
        const index = Math.round(scrollPosition / windowHeight);
        setActiveSection(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      <Navigation activeSection={activeSection} />
      {/* PreRegisterButton removed as requested */}

      {/* 
        Main Scroll Container 
        h-screen + snap-y + snap-mandatory creates the pure CSS full page scroll effect.
      */}
      <div 
        ref={containerRef}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        
        {/* SECTION 1: HERO (White) */}
        <Section className="bg-white relative">
          <Hero />
          <ScrollIndicator color="black" />
        </Section>

        {/* SECTION 2: Why Use (White) */}
        <Section className="bg-white relative">
          <WhyUseSection />
          <ScrollIndicator color="black" />
        </Section>

        {/* SECTION 3: SMS (White) */}
        <Section className="bg-white relative">
          <FeatureCard 
            title={SERVICE_DATA.sms.title}
            subtitle={SERVICE_DATA.sms.subtitle}
            description={SERVICE_DATA.sms.description}
            detail={SERVICE_DATA.sms.detail}
            theme="light"
            index={1}
            type="sms"
          />
          <ScrollIndicator color="black" />
        </Section>

        {/* SECTION 4: LMS (White) */}
        <Section className="bg-white relative">
          <FeatureCard 
            title={SERVICE_DATA.lms.title}
            subtitle={SERVICE_DATA.lms.subtitle}
            description={SERVICE_DATA.lms.description}
            detail={SERVICE_DATA.lms.detail}
            theme="light"
            index={2}
            type="lms"
          />
          <ScrollIndicator color="black" />
        </Section>

        {/* SECTION 5: MMS (White) */}
        <Section className="bg-white relative">
          <FeatureCard 
            title={SERVICE_DATA.mms.title}
            subtitle={SERVICE_DATA.mms.subtitle}
            description={SERVICE_DATA.mms.description}
            detail={SERVICE_DATA.mms.detail}
            theme="light"
            index={3}
            type="mms"
          />
          <ScrollIndicator color="black" />
        </Section>

        {/* SECTION 6: CTA / Footer (White) */}
        <Section className="bg-white text-black relative flex-col">
          <div className="container mx-auto px-6 text-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <Zap size={64} className="mx-auto mb-8 text-black" />
              <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight break-keep">
                오픈 알림을<br className="md:hidden" /> 놓치지 마세요
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-xl mx-auto break-keep leading-relaxed">
                지금 사전예약을 신청하시면<br/>
                서비스 오픈 시 가장 먼저 알림을 보내드립니다.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <button className="group relative px-8 py-4 bg-black text-white font-bold uppercase tracking-widest overflow-hidden min-w-[240px]" onClick={() => window.alert("사전예약 신청 완료!")}>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    사전예약 신청하기 <ArrowUpRight size={18} />
                  </span>
                  <div className="absolute inset-0 bg-neutral-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </button>
                {/* Secondary 'Inquire' button removed to reduce choices */}
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 w-full p-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 uppercase tracking-widest">
            <span>© 2024 BONEYOU Service. All rights reserved.</span>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
              <a href="#" className="hover:text-black transition-colors">Support</a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default App;