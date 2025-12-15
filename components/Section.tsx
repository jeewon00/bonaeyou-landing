import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section 
      id={id}
      className={`h-screen w-full snap-start snap-always relative overflow-hidden flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
};