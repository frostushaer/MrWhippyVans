import React from "react";
import menuImage from "../img/menu-1.png"
import ice from "../img/thankyou.png"; 
import ice2 from "../img/test.png";
import IceCreamDrip from "./IceCreanDrip";
import Drip from "./Drip";

const Menu = () => {
  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* Left: Ice Cream Van Image */}
      <div className="md:w-1/2 w-full h-[500px] md:h-auto">
        <img
          src={menuImage}
          alt="Ice Cream Van"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Ice Cream Menu */}
      <div className="md:w-1/2 w-full bg-[#f48da4] text-white relative flex flex-col items-center justify-between py-8 px-4 md:px-8 font-serif">
        {/* Dripping top (decorative using pseudo effect) */}
        {/* <IceCreamDrip position="top" /> */}
        {/* <Drip /> */}
        <div className="absolute top-0 left-0 right-0 h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')] " />
      

        {/* Ice Cream Cone Top Left */}
        <img
          src={ice}
          alt="cone-top"
          className="w-40 absolute top-4 left-4"
        />

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl italic text-white mb-1">Explore</h2>
          <h1 className="text-4xl font-bold text-white drop-shadow-sm mb-4">
            ICE CREAM
          </h1>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-light w-full max-w-2xl">
          <div>
            <h3 className="font-semibold">Single Scoop Soft Serve..........................$4</h3>
            <p>Small cone of vanilla</p>
          </div>
          <div>
            <h3 className="font-semibold">Soft Serve with KitKat or Flakes..................$6</h3>
            <p>Small cone of vanilla with KitKat or Flakes.</p>
          </div>
          <div>
            <h3 className="font-semibold">Single Scoop Soft Serve..........................$7</h3>
            <p>Served with any one topping: dip, sprinkles, Sherbet, KitKat, etc.</p>
          </div>
          <div>
            <h3 className="font-semibold">Single Scoop Sundae with Wafer...............$4</h3>
            <p>Includes chocolate dip, sprinkles, and Sherbet.</p>
          </div>
          <div>
            <h3 className="font-semibold">Milkshake Large......................................$8</h3>
            <p>Flavors: Chocolate, Strawberry, Banana, Caramel</p>
          </div>
          <div>
            <h3 className="font-semibold">Choc Flake Shake.................................$13</h3>
            <p>Chocolate milkshake with flakes</p>
          </div>
          <div>
            <h3 className="font-semibold">Fruit Smoothies.....................................$13</h3>
            <p>Delicious antioxidant-rich smoothies</p>
          </div>
          <div>
            <h3 className="font-semibold">Snow Cones..........................................$4</h3>
            <p>Different Sorbet flavors</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-8 bg-white text-pink-500 font-bold py-2 px-4 rounded shadow hover:bg-pink-100 transition">
          View More
        </button>

        {/* Ice Cream Cone Bottom Right */}
        <img
          src={ice2}
          alt="cone-bottom"
          className="w-40 absolute bottom-4 right-4 "
        />

        {/* Dripping bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[url('https://www.transparenttextures.com/patterns/ice-cream.png')] bg-repeat-x" />
      </div>
    </section>
  );
};

export default Menu;
