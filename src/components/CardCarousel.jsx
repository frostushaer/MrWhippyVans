import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";

const data = [
  {
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    title: "5 Dreamy Ice Cream Hacks for Summer",
    description:
      "Summer is here, temperatures are rising, and we are all scrambling for something cold to cool us off...",
  },
  {
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    title: "Cabernet Chocolate Chunk Ice Cream",
    description:
      "Why not make some ice cream yourself at home? It's easier than you think and twice as rewarding...",
  },
  {
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    title: "Fancy Figs? Make this Ice Cream",
    description:
      "Figs and cream – a delightful pairing in this homemade treat that’s fruity, creamy and unforgettable...",
  },
  {
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    title: "Tropical Mango Delight",
    description: "A refreshing and creamy mango ice cream for summer parties.",
  },
];

export default function CardCarousel() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const transitionTime = 500;

  const extendedData = [...data, ...data.slice(0, cardsPerView)];

  const updateResponsive = () => {
    if (window.innerWidth < 640) setCardsPerView(1);
    else if (window.innerWidth < 1024) setCardsPerView(2);
    else setCardsPerView(3);
  };

  useEffect(() => {
    updateResponsive();
    window.addEventListener("resize", updateResponsive);
    return () => window.removeEventListener("resize", updateResponsive);
  }, []);

  // Auto-scroll every 4s
  useEffect(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [cardsPerView, index]);

  const next = () => {
    if (transitioning) return;
    setTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (transitioning) return;
    setTransitioning(true);
    if (index === 0) {
      if (containerRef.current) {
        containerRef.current.style.transition = "none";
        containerRef.current.style.transform = `translateX(-${
          (100 / cardsPerView) * data.length
        }%)`;
      }
      setIndex(data.length - 1);
      setTimeout(() => {
        setTransitioning(false);
      }, 50);
    } else {
      setIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = `transform ${transitionTime}ms ease-in-out`;
      containerRef.current.style.transform = `translateX(-${
        (100 / extendedData.length) * index
      }%)`;
    }

    // Handle infinite loop
    if (index === data.length) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          containerRef.current.style.transform = `translateX(0%)`;
        }
        setIndex(0);
      }, transitionTime);
    }

    const timeout = setTimeout(() => {
      setTransitioning(false);
    }, transitionTime);

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="text-white py-16 px-4 relative overflow-hidden">
      <h2 className="text-4xl font-semibold text-center mb-12 drop-shadow-md">
        🍦 Events
      </h2>

      <div className="relative overflow-hidden w-full">
        <div
          className="flex "
          ref={containerRef}
          style={{
            width: `${(100 / cardsPerView) * extendedData.length}%`,
          }}
        >
          {extendedData.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0"
              style={{
                width: `${100 / extendedData.length}%`,
                padding: "0 0.5rem",
              }}
            >
              <Card {...item} />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-[#1e3a8a] p-3 rounded-full shadow-md hover:scale-110 transition z-10"
        >
          ←
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#1e3a8a] p-3 rounded-full shadow-md hover:scale-110 transition z-10"
        >
          →
        </button>
      </div>
    </div>
  );
}
