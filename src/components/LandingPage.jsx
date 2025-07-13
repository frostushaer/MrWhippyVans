import { motion } from 'framer-motion';
import React from 'react';
import { IoIceCream } from "react-icons/io5";

function LandingPage() {
  return (
    <div data-scroll data-scroll-speed = '-.3' className="w-full h-screen pt-1 bg-[#F72C5B] bg-no-repeat bg-cover">
      <div className=' main w-full flex'>
      <div className='textstructure mt-40 px-20 w-full'>
        <div className='masker'>
          <h1 className="text-8xl uppercase font-extrabold leading-none font-['gilroy'] text-zinc-100">
            IceCreams
          </h1>
        </div>
        <div className='masker flex items-center gap-1'>
            <motion.div initial={{width:0}} 
            animate={{width: "110px"}} 
            transition={{ease: [0.76,0,0.24,1], duration:1}} 
            className="h-[90px] w-[110px] bg-[url('https://static.toiimg.com/thumb/msid-112019658,width-1280,height-720,resizemode-4/112019658.jpg')] bg-cover rounded-md"></motion.div>
          <h1 className="text-8xl uppercase font-extrabold leading-none font-['gilroy'] text-zinc-100">
            Created with
          </h1>
        </div>
        <div className='masker'>
          <h1 className="text-8xl uppercase font-extrabold leading-none font-['gilroy'] text-zinc-100">
            Love and fun
          </h1>
        </div>
      </div>
      </div>
      <div className='border-t-[1px] border-pink-300 mt-20 flex justify-between items-center py-5 px-20 text-zinc-100'>
        {["Mouth Watering Flavours", "Get the Scoop"].map((item, index) => (
          <p key={index} className='text-md'>{item}</p>
        ))}

        <div className='start flex items-center gap-4'>
          <button className='px-5 py-2 border-2 rounded-full border-pink-400'>
            Explore Sundae Shop
          </button>
          <div className='w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center'>
            <IoIceCream className='text-white text-2xl'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;