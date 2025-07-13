import React from "react";
// import IceCreamIcon from "./IceCreamIcon"; // optional separate SVG or import if using image
import art1 from "../img/art1.png"; // replace with your image path
import art2 from "../img/art2.png"; // replace with your image path

const Message = () => {
  return (
    <section className="relative  py-20 px-4 md:px-12 overflow-hidden">
     
      {/* 🍦 Background animation - optional image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src={art1}
          alt="ice cream floating"
          className="absolute animate-float-fast w-60 opacity-60 top-0 left-10"
        />
        <img
          src={art2}
          alt="ice cream floating"
          className="absolute animate-float-reverse w-60 opacity-60 bottom-0 right-16"
        />
      </div>

      {/* 💬 Message Text */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-[#06253a] font-bold tracking-widest leading-relaxed uppercase">
          At Mr. Whippy we believe that ice cream brings people together.
          <br />
          So grab the people you cherish most, a cup or cone of one of our
          delicious flavors, and get ready; cause you’re in for a real treat!
        </p>
      </div>
    </section>
  );
};

export default Message;
