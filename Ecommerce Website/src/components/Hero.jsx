import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="Hero flex justify-between flex-col md:flex-row bg-green-200 p-[7%]">
      <div className="hero-left space-y-2">
        <h2 className="text-xs font-medium">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon">
            <p className="text-4xl md:text-6xl  md:font-semibold font-bold flex ">New<FaHandHoldingHeart /></p>
     
          </div>
          <p className="text-4xl md:text-6xl md:font-semibold font-bold">Collections</p>
          <p className="text-4xl md:text-6xl md:font-semibold font-bold">for Everyone</p>
        </div>
        <div className="latest-btn">
          <button className="flex mt-7 md:pl-5 text-white items-center active:bg-orange-600 cursor-pointer bg-orange-500 px-3 py-2 rounded-full md:w-[15vw] w-[52vw]">Latest Collection <FaArrowRight className="ml-2 md:ml-[15%] " /></button>
      
        </div>
      </div>
      <div className="hero-right flex justify-between">
        <div></div>
        <img src="/images/hero.png" className=" md:w-[80%] w-[100%]" alt="" />
      </div>
    </div>
  );
};

export default Hero;
