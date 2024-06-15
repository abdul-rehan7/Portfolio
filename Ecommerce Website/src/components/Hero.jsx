import React from "react";

import { FaArrowRight } from "react-icons/fa";

const Hero = (props) => {
  return (
    <div className="Hero flex justify-between flex-col md:flex-row bg-green-200 p-[7%]">
      <div className="hero-left space-y-2">
        <h2 className="text-xs font-medium">NEW ARRIVALS ONLY</h2>
        <div>
       
          <p className="text-4xl md:w-[30vw]  w-[90%] md:text-6xl md:font-semibold font-bold">
       
           {props.line}
          </p>
        </div>
        <div className="latest-btn">
          <button className="flex mt-7 md:pl-5 text-white items-center active:bg-orange-600 cursor-pointer bg-orange-500 px-3 py-2 rounded-full md:w-[12vw] w-[40vw]">
            Check Now<FaArrowRight className="ml-2 md:ml-[15%] " />
          </button>
        </div>
      </div>
      <div className="hero-right flex justify-between">
        <div></div>
        <img src={props.image} className=" md:my-0 my-7 md:w-[70%] w-[100%]" alt="" />
      </div>
    </div>
  );
};

export default Hero;
