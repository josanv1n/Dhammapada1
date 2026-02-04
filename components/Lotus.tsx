
import React from 'react';

export const Lotus: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path 
        d="M50 10 C60 30 90 40 90 60 C90 80 70 90 50 90 C30 90 10 80 10 60 C10 40 40 30 50 10" 
        fill="currentColor" 
        className="opacity-20"
      />
      <path 
        d="M50 30 C55 45 75 50 75 65 C75 75 65 80 50 80 C35 80 25 75 25 65 C25 50 45 45 50 30" 
        fill="currentColor" 
        className="opacity-40"
      />
      <circle cx="50" cy="65" r="5" fill="currentColor" className="opacity-60" />
    </svg>
  );
};
