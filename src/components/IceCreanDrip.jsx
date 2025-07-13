import React from "react";

const IceCreamDrip = ({ color = "#f472b6", height = 120, className = "" }) => {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Drip Shape */}
      <svg
        viewBox="0 0 1440 100"
        className="w-full"
        height={height}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="dripGloss" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff88" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
          <filter id="dripShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#00000022" />
          </filter>
        </defs>
        <path
          d="
            M0,0 
            L0,20 
            Q30,60 60,20 
            Q90,0 120,20 
            Q150,70 180,20 
            Q210,-10 240,20 
            Q270,50 300,20 
            Q330,0 360,20 
            Q390,60 420,20 
            Q450,0 480,20 
            Q510,70 540,20 
            Q570,-10 600,20 
            Q630,50 660,20 
            Q690,0 720,20 
            Q750,60 780,20 
            Q810,0 840,20 
            Q870,70 900,20 
            Q930,-10 960,20 
            Q990,50 1020,20 
            Q1050,0 1080,20 
            Q1110,60 1140,20 
            Q1170,0 1200,20 
            Q1230,70 1260,20 
            Q1290,-10 1320,20 
            Q1350,50 1380,20 
            Q1410,0 1440,20 
            L1440,0 Z"
          fill="url(#dripGloss)"
          filter="url(#dripShadow)"
        />
      </svg>

      {/* Sprinkles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className={`absolute w-1 h-1.5 rounded-sm ${
              sprinkleColors[i % sprinkleColors.length]
            } animate-fall`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              top: "-10px",
            }}
          />
        ))}
      </div>

      {/* Sprinkle Animation */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100px) rotate(180deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

const sprinkleColors = [
  "bg-yellow-300",
  "bg-blue-400",
  "bg-pink-500",
  "bg-green-400",
  "bg-orange-300",
  "bg-purple-400",
  "bg-teal-400",
];

export default IceCreamDrip;
