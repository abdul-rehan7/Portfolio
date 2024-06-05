import React from "react";
import Swiper from "swiper";
// import Swiper styles

const Hero = () => {
  return (
    <div className="flex justify-center">
      <div className="bg">
        <img
          src="/images/herobg.jpg"
          className="h-[40vh] md:h-[85vh] w-[100vw]"
          alt=""
        />
      </div>
      <div className="cont  flex   justify-around  text-left absolute md:top-[1%] top-[10%] items-center p-[5%] md:justify-between h-auto w-[90vw]  z-30">
        <div className="first text-[7px]  md:text-xl w-[50vw] flex flex-col items-start">
          <h1 className="text-base md:text-7xl font-bold w-[70%] my-2 ">
            70% OFF on all products Sale
          </h1>
          Lorem ipsum dolor, sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis, iste?
          <button className="bg-green-500 py-[3px] px-[7px] md:px-5 my-5 md:py-2 md:mt-2 mt-[2px] rounded-md">
            Buy Now
          </button>
        </div>
        <div className="second">
          <img
            src="/images/122.png"
            className="h-[10rem] w-[7rem] md:h-[30rem] md:w-[20rem] "
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
