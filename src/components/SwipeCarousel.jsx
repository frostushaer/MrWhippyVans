import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import IceCreamDrip from "./IceCreanDrip";
import Drip from "./Drip";
import hero1 from "../img/hero-1.png";
import hero2 from "../img/hero-2.png";  
import hero3 from "../img/hero-3.png";

const imgs = [
  hero1,
  hero2,
  hero3,
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 1,
  stiffness: 300,
  damping: 30,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const controls = useAnimation();
  const dragX = useMotionValue(0);

  const goToSlide = (index) => {
    setImgIndex(index);
    controls.start({ x: `-${index * 100}%`, transition: SPRING_OPTIONS });
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;

    if (offset < -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      goToSlide(imgIndex + 1);
    } else if (offset > DRAG_BUFFER && imgIndex > 0) {
      goToSlide(imgIndex - 1);
    } else {
      goToSlide(imgIndex); // snap back
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => {
        const newIndex = (prev + 1) % imgs.length;
        controls.start({ x: `-${newIndex * 100}%`, transition: SPRING_OPTIONS });
        return newIndex;
      });
    }, AUTO_DELAY);

    return () => clearInterval(interval);
  }, []);

  return (

    

    <div className="relative overflow-hidden w-full h-[700px]">

    {/* <IceCreamDrip position="top" /> */}

      <motion.div
        className="flex h-full w-full"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ x: dragX }}
      >
        {imgs.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Slide ${idx + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </motion.div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {imgs.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-3 w-3 rounded-full ${
              i === imgIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
      
    </div>
  );
};
