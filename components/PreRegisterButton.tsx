import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// No longer needs activeSection props for coloring
export const PreRegisterButton: React.FC = () => {
  return (
    <motion.a
      href="https://walla.my/a/boneyou"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-6 right-6 z-50 px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase flex items-center gap-2 transition-all duration-300 shadow-lg bg-black text-white hover:bg-neutral-800 hover:scale-105"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>사전예약 하기</span>
      <ArrowUpRight size={14} className="md:w-4 md:h-4" />
    </motion.a>
  );
};