import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  darker?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`py-12 px-4 md:px-8 lg:px-16 w-full ${darker ? 'bg-brand-surfaceHighlight' : 'bg-brand-surface'} ${className}`}
    >
      <div className="max-w-5xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};