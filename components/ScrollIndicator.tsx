import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  color?: 'white' | 'black';
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ color = 'white' }) => {
  return (
    <motion.div 
      className={`absolute bottom-8 left-1/2 hidden md:flex flex-col items-center gap-2 z-20 ${color === 'white' ? 'text-white' : 'text-black'}`}
      style={{ translateX: "-50%" }} // Force perfect centering using Framer Motion style
      initial={{ opacity: 0, y: -20, translateX: "-50%" }}
      animate={{ opacity: 1, y: 0, translateX: "-50%" }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <span className="text-[10px] tracking-[0.2em] uppercase font-light opacity-60 whitespace-nowrap">Scroll Down</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={24} className="opacity-80" />
      </motion.div>
    </motion.div>
  );
};