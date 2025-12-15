import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface MeteorProps {
  delay: number;
  duration: number;
  top: number;
  repeatDelay: number;
}

// Meteor Component: Dark trail on White background
const Meteor: React.FC<MeteorProps> = ({ delay, duration, top, repeatDelay }) => {
  return (
    <motion.div
      initial={{ x: -600, opacity: 0 }} // Start well off-screen left
      animate={{ 
        x: "150vw", // Move across to the right
        opacity: [0, 1, 1, 0] 
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatDelay: repeatDelay, // Add pause between loops
        ease: "linear",
      }}
      style={{ top: `${top}%` }}
      className="absolute left-0 h-[1px] md:h-[2px] w-[300px] md:w-[600px] z-0"
    >
      {/* The trail - Dark Gradient */}
      <div className="w-full h-full bg-gradient-to-r from-transparent via-neutral-400/80 to-transparent opacity-60" />
      
      {/* The 'head' - Dark Dot */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full shadow-[0_0_5px_1px_rgba(0,0,0,0.3)]" />
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  
  const [meteors, setMeteors] = useState<Array<{id: number, delay: number, duration: number, top: number, repeatDelay: number}>>([]);

  useEffect(() => {
    // 6 meteors
    const count = 6; 
    const generatedMeteors = Array.from({ length: count }).map((_, i) => {
      const zoneSize = 100 / count;
      const zoneStart = i * zoneSize;
      const zoneOffset = Math.random() * (zoneSize - 5); 

      return {
        id: i,
        delay: Math.random() * 10, 
        duration: Math.random() * 6 + 6, 
        repeatDelay: Math.random() * 6 + 2,
        top: zoneStart + zoneOffset, 
      };
    });
    setMeteors(generatedMeteors);
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center overflow-hidden bg-white perspective-1000">
      
      {/* 1. Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-white">
        {/* Subtle base gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white z-0" />
        
        {/* Render Dark Meteors */}
        {meteors.map((m) => (
          <Meteor 
            key={m.id} 
            delay={m.delay} 
            duration={m.duration} 
            top={m.top} 
            repeatDelay={m.repeatDelay}
          />
        ))}
        
        {/* Noise Texture (Lighter) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat z-0 mix-blend-multiply" />
      </div>

      {/* 2. Content Layer */}
      <div className="z-10 px-6 flex flex-col items-center relative w-full max-w-7xl mx-auto">
        
        {/* Floating Icon Orb - Inverted Colors */}
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          className="mb-8 md:mb-12 relative"
        >
          {/* Subtle dark glow behind */}
          <div className="absolute inset-0 bg-black/5 blur-3xl rounded-full" />
          
          <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-full border border-black/10 bg-white shadow-xl group flex items-center justify-center overflow-hidden p-3 md:p-5">
            {/* Custom SVG Logo - Inverted Fills */}
            <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              {/* Main background rect: White (or transparent) */}
              <rect width="300" height="300" rx="150" fill="#FFFFFF"/>
              {/* Inner card: Black */}
              <rect x="45" y="87" width="210" height="126" rx="63" fill="#000000"/>
              
              {/* Dots: Inverted logic (White dots on black card) */}
              <circle cx="99.5" cy="150" r="17.5" fill="#FFFFFF"/>
              <circle cx="149.5" cy="150" r="17.5" fill="#CCCCCC"/>
              <circle cx="199.5" cy="150" r="17.5" fill="#888888"/>
            </svg>
            
            <motion.div 
              className="absolute top-2 right-2 md:top-4 md:right-4 z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={16} className="text-black fill-black/20" />
            </motion.div>
          </div>
        </motion.div>

        {/* Tagline Badge - Black text on light */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-black/10 bg-white/80 backdrop-blur-md text-[10px] md:text-sm font-medium tracking-[0.3em] text-neutral-500 shadow-sm uppercase">
            세상에서 가장 저렴한 대량 문자 발송
          </span>
        </motion.div>

        {/* Main Title - Solid Black */}
        <motion.div
          style={{ y: y1 }}
          className="relative mb-6 md:mb-8"
        >
          <motion.h1 
            className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] font-bold leading-none uppercase text-black tracking-tighter"
            initial={{ opacity: 0, letterSpacing: "0.1em", filter: "blur(20px)" }}
            animate={{ opacity: 1, letterSpacing: "-0.05em", filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            BONEYOU
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-base sm:text-lg md:text-2xl text-neutral-600 max-w-xs sm:max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="text-black font-bold">
            Beyond Messaging.
          </span>
          <br />
          SMS, LMS, MMS 모든 메시징의 새로운 기준.
        </motion.p>
        
        {/* Buttons - Single Primary Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row gap-4 justify-center items-center w-full md:w-auto px-6"
        >
          <a
            href="https://walla.my/a/boneyou"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-auto px-8 py-3 md:px-12 md:py-5 bg-black text-white text-xs md:text-sm font-bold tracking-widest uppercase rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-xl inline-flex items-center justify-center"
          >
            <span className="relative z-10">사전예약 하기</span>
            <div className="absolute inset-0 bg-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          {/* Secondary 'Pricing' button removed */}
        </motion.div>
      </div>
    </div>
  );
};