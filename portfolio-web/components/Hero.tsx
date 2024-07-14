import React from "react";
import { Spotlight } from "./ui/Spotlight";
import GridBackgroundDemo from "./bg";
import { TextGenerateEffect } from "./TextGenEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-18 flex flex-col items-center">
      <div className="pb-1 pt-36 flex flex-col items-center">
        <div className="pb-20 pt-36 w-full flex flex-col items-center">
          <Spotlight
            className="-top-12 w-[70vw] left-4 md:-left-22 md:-top-20 h-full"
            fill="#a6a6a6"
          />
          <Spotlight
            className="-top-7 left-[60%]  md:left-[60%] md:-top-20 md:h-[60vh]  h-[30vh] w-[100vw]"
            fill="#a6a6a6"
          />
        </div>

        <GridBackgroundDemo />

        <div className="absolute my-10 z-10 flex w-[100vw] justify-center">
          <div className="max-w-[100vw] md:max-w-2xl lg:max-w-[90vw] flex flex-col justify-center items-center">
            <h2 className="text-xs md:text-base uppercase tracking-widest text-center text-blue-100">
              Dynamic web magic with next.js
            </h2>

            <TextGenerateEffect
              className="text-center text-[1.3rem] md:text-4xl lg:text-7xl "
              words="Transforming Concepts Into Seamless Experiences"
            />

            <p className="text-center text-xs md:text-xl mt-2">
              Hi, I&apos;m Rehan, a Website Developer from Pakistan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
