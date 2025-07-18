import React from 'react';
import { motion } from 'framer-motion';

const IceCreamBorder = ({ 
  children, 
  flavor = 'strawberry',
  intensity = 'medium',
  animated = true,
  className = '',
  borderWidth = 8,
  showSprinkles = true 
}) => {
  // Define ice cream flavor color schemes
  const flavors = {
    strawberry: {
      primary: 'from-pink-400 via-pink-500 to-pink-600',
      secondary: 'from-pink-300 to-pink-500',
      accent: '#ec4899',
      shadow: 'shadow-pink-500/30',
      glow: 'shadow-pink-400/20'
    },
    chocolate: {
      primary: 'from-amber-600 via-amber-700 to-amber-800',
      secondary: 'from-amber-500 to-amber-700',
      accent: '#b45309',
      shadow: 'shadow-amber-600/30',
      glow: 'shadow-amber-500/20'
    },
    vanilla: {
      primary: 'from-yellow-200 via-yellow-300 to-yellow-400',
      secondary: 'from-yellow-100 to-yellow-300',
      accent: '#fbbf24',
      shadow: 'shadow-yellow-400/30',
      glow: 'shadow-yellow-300/20'
    },
    mint: {
      primary: 'from-green-300 via-green-400 to-green-500',
      secondary: 'from-green-200 to-green-400',
      accent: '#10b981',
      shadow: 'shadow-green-400/30',
      glow: 'shadow-green-300/20'
    },
    blueberry: {
      primary: 'from-blue-400 via-blue-500 to-blue-600',
      secondary: 'from-blue-300 to-blue-500',
      accent: '#3b82f6',
      shadow: 'shadow-blue-500/30',
      glow: 'shadow-blue-400/20'
    }
  };

  const currentFlavor = flavors[flavor] || flavors.strawberry;
  
  // Animation variants
  const dripVariants = {
    initial: { 
      y: -10,
      scale: 0.95,
      opacity: 0.8
    },
    animate: { 
      y: [0, 3, 0],
      scale: [1, 1.02, 1],
      opacity: [1, 0.9, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sprinkleVariants = {
    initial: { y: -20, opacity: 0, rotate: 0 },
    animate: { 
      y: [0, 100], 
      opacity: [1, 0], 
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
        stagger: 0.2
      }
    }
  };

  // Generate drip paths for different intensities
  const getDripPath = (intensity) => {
    const paths = {
      light: "M0,0 C120,15 240,5 360,20 C480,35 600,10 720,25 C840,40 960,15 1080,30 C1200,45 1320,20 1440,35 L1440,0 Z",
      medium: "M0,0 C90,25 180,10 270,35 C360,60 450,15 540,40 C630,65 720,20 810,45 C900,70 990,25 1080,50 C1170,75 1260,30 1350,55 C1410,70 1440,45 1440,60 L1440,0 Z",
      heavy: "M0,0 C72,40 144,15 216,50 C288,85 360,25 432,60 C504,95 576,35 648,70 C720,105 792,45 864,80 C936,115 1008,55 1080,90 C1152,125 1224,65 1296,100 C1368,135 1440,75 1440,110 L1440,0 Z"
    };
    return paths[intensity] || paths.medium;
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main container with 3D border effect */}
      <div className={`relative bg-gradient-to-br ${currentFlavor.primary} p-${borderWidth} rounded-3xl ${currentFlavor.shadow} shadow-2xl transform perspective-1000`}>
        
        {/* Inner glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentFlavor.secondary} rounded-3xl opacity-60 blur-sm`}></div>
        
        {/* 3D depth layers */}
        <div className="absolute inset-0 rounded-3xl">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-gradient-to-br ${currentFlavor.primary} rounded-3xl opacity-${30 - i * 10} blur-${i + 1}`}
              style={{
                transform: `translateZ(${-i * 2}px) translateY(${i * 1}px)`,
                filter: `blur(${i * 2}px)`
              }}
            ></div>
          ))}
        </div>

        {/* Dripping effect on top */}
        <motion.div 
          className="absolute -top-4 left-0 right-0 z-10"
          variants={animated ? dripVariants : {}}
          initial="initial"
          animate={animated ? "animate" : "initial"}
        >
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-16"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`dripGradient-${flavor}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="30%" stopColor={currentFlavor.accent} />
                <stop offset="100%" stopColor={currentFlavor.accent} />
              </linearGradient>
              <filter id={`dripGlow-${flavor}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path
              d={getDripPath(intensity)}
              fill={`url(#dripGradient-${flavor})`}
              filter={`url(#dripGlow-${flavor})`}
              className="drop-shadow-lg"
            />
          </svg>
        </motion.div>

        {/* Bottom dripping effect */}
        <motion.div 
          className="absolute -bottom-4 left-0 right-0 z-10 rotate-180"
          variants={animated ? dripVariants : {}}
          initial="initial"
          animate={animated ? "animate" : "initial"}
        >
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-16"
            preserveAspectRatio="none"
          >
            <path
              d={getDripPath(intensity)}
              fill={`url(#dripGradient-${flavor})`}
              filter={`url(#dripGlow-${flavor})`}
              className="drop-shadow-lg"
            />
          </svg>
        </motion.div>

        {/* Sprinkles animation */}
        {showSprinkles && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1.5 h-3 ${[
                  'bg-yellow-400',
                  'bg-red-400', 
                  'bg-blue-400',
                  'bg-green-400',
                  'bg-purple-400',
                  'bg-orange-400'
                ][i % 6]} rounded-full`}
                style={{
                  left: `${10 + (i * 7)}%`,
                  top: '-8px'
                }}
                variants={sprinkleVariants}
                initial="initial"
                animate={animated ? "animate" : "initial"}
                transition={{
                  delay: i * 0.3,
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity
                }}
              />
            ))}
          </div>
        )}

        {/* Highlight effect */}
        <div className="absolute top-2 left-2 right-2 h-8 bg-gradient-to-r from-white/40 via-white/20 to-transparent rounded-2xl blur-sm"></div>
        
        {/* Content area */}
        <div className={`relative bg-white rounded-2xl ${currentFlavor.glow} shadow-inner`}>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceCreamBorder;