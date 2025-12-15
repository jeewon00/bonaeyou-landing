import React from 'react';

interface NavigationProps {
  activeSection: number;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const sections = ['Hero', 'Why', 'SMS', 'LMS', 'MMS', 'Contact'];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {sections.map((_, index) => {
        return (
          <div 
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index 
                ? 'scale-150' 
                : 'opacity-20 scale-100' // Increased opacity slightly for visibility
            }`}
          >
            {/* Always black dots since background is white */}
            <div 
               className="w-full h-full rounded-full bg-black transition-colors duration-300" 
            />
          </div>
        );
      })}
    </div>
  );
};