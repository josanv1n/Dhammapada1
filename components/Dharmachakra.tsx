
import React from 'react';

export const Dharmachakra: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full animate-spin-slow text-amber-400 opacity-80 filter drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]"
      >
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        
        {/* 8 Spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="40"
            x2="50"
            y2="5"
            stroke="currentColor"
            strokeWidth="3"
            transform={`rotate(${angle}, 50, 50)`}
          />
        ))}
        
        {/* Decorative elements */}
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
      </svg>
    </div>
  );
};
