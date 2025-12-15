import React from 'react';
import { motion } from 'framer-motion';
// ArrowRight import removed since button is removed
import { MessageMockup, MessageType } from './MessageMockup';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  theme: 'dark' | 'light';
  index: number;
  type: MessageType; // Add type prop for rendering the correct mockup
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  detail, 
  theme,
  index,
  type
}) => {
  const isDark = theme === 'dark';
  
  return (
    // Reduced py-20 to py-6 for mobile to save vertical space
    <div className={`container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-16 h-full py-6 md:py-20`}>
      
      {/* Left Column: Text Content */}
      <div className="flex-1 w-full flex flex-col justify-center items-start z-10 order-1 md:order-1 max-w-xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* Reduced Title Size */}
          <span className={`text-3xl sm:text-5xl md:text-7xl font-bold leading-none tracking-tighter opacity-100 ${isDark ? 'text-white' : 'text-black'}`}>
            {title}
          </span>
          <div className={`h-1 w-10 md:w-16 mt-2 md:mt-4 ${isDark ? 'bg-white' : 'bg-black'}`} />
          
          <h3 className={`mt-2 md:mt-4 text-[10px] md:text-sm font-light tracking-widest uppercase ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {subtitle}
          </h3>

          <div className={`mt-4 md:mt-8 relative pl-4 md:pl-6 border-l ${isDark ? 'border-white/20' : 'border-black/20'}`}>
             {/* Reduced Description Size */}
            <p className={`text-base md:text-xl font-medium leading-snug mb-2 md:mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
              "{description}"
            </p>
            <p className={`text-[11px] md:text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {detail}
            </p>
            
            {/* 'Learn More' Button Removed */}
          </div>
        </motion.div>
      </div>

      {/* Right Column: Phone Mockup */}
      <div className="flex-1 w-full flex justify-center md:justify-end items-center z-10 order-2 md:order-2">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
            className="relative"
        >
            <MessageMockup type={type} theme={theme} />
            
            {/* Decorative blob behind phone */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] blur-3xl -z-10 rounded-full opacity-20 ${isDark ? 'bg-white' : 'bg-black'}`} />
        </motion.div>
      </div>
      
      {/* Decorative Background Element */}
      <div className={`absolute -bottom-2 right-1/2 translate-x-1/2 md:translate-x-0 md:right-12 text-[4rem] md:text-[8rem] font-bold opacity-5 pointer-events-none select-none z-0 ${isDark ? 'text-white' : 'text-black'}`}>
        0{index}
      </div>
    </div>
  );
};