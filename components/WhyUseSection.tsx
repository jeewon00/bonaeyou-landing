import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Gift, MonitorSmartphone, Code2 } from 'lucide-react';
import { WHY_USE_DATA } from '../constants';

const icons = {
  Gift: Gift,
  MonitorSmartphone: MonitorSmartphone,
  Code2: Code2,
};

export const WhyUseSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10 py-16 md:py-0">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 md:mb-24 text-center md:text-left flex-shrink-0"
      >
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight whitespace-pre-line text-black">
          {WHY_USE_DATA.title}
        </h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10"
      >
        {WHY_USE_DATA.features.map((feature, index) => {
          const IconComponent = icons[feature.iconName as keyof typeof icons];
          return (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group relative p-4 sm:p-6 md:p-10 border border-neutral-200 bg-white rounded-xl flex flex-col items-center md:items-start text-center md:text-left transition-all duration-500 hover:border-black hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2"
            >
              <div className="mb-2 md:mb-8 p-2 md:p-5 rounded-2xl bg-neutral-50 group-hover:bg-black transition-colors duration-500">
                <IconComponent size={20} className="text-black group-hover:text-white transition-colors duration-500 md:w-8 md:h-8" />
              </div>
              <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] mb-1 md:mb-4 text-neutral-400 group-hover:text-black transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-base sm:text-xl md:text-2xl font-bold mb-1 md:mb-4 whitespace-pre-line leading-tight text-black">
                {feature.description}
              </p>
              <p className="text-xs md:text-base text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-700 transition-colors line-clamp-2 md:line-clamp-none">
                 {feature.detail}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};