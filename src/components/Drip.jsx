// components/GlossyDripTop.jsx
import React from "react";

const Drip = () => {
  return (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 1440 150"
        className="w-full h-auto"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="glossyGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ff4e9b" />
            <stop offset="50%" stopColor="#e53e8f" />
            <stop offset="100%" stopColor="#d12770" />
          </linearGradient>
          <filter id="gloss" x="0" y="0">
            <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur" />
            <feOffset in="blur" dx="0" dy="4" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M0,0 C360,100 300,10 500,70 C700,130 800,0 1000,90 C1200,150 1320,40 1440,80 L1440,0 L0,0 Z"
          fill="url(#glossyGradient)"
          filter="url(#gloss)"
        />
      </svg>
    </div>
  );
};

export default Drip;
