import React from "react";
import { Spotlight } from "./ui/Spotlight";
import GridBackgroundDemo from "./bg";
import { TextGenerateEffect } from "./TextGenEffect";
import MagicButton from "./MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 sm:pt-0 max-w-[100vw] overflow-hidden w-full flex flex-col items-center">
      <div className="pb-1 pt-20 md:pt-28 flex flex-col items-center">
        <div className="pb-20  w-[100%] flex  items-center">
          <Spotlight
            className="-top-10 z-50 w-[100%] left-4 md:-left-22 md:-top-20 h-full"
            fill="purple"
          />
          <Spotlight
            className="-top-2 z-50 left-[18rem] md:left-[55vw] md:-top-12 md:h-[60vh]  h-[30vh] w-[50%]"
            fill="purple"
          />
        </div>
        <GridBackgroundDemo />

        <div className="relative md:my-0  z-10 flex w-[100vw] justify-center">
          <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col justify-center items-center">
            <h2 className="text-xs max-w-[90vw] md:text-base uppercase tracking-widest text-center text-black">
              Dynamic web magic with next.js
            </h2>

            <TextGenerateEffect
              className="text-center text-3xl md:text-4xl lg:text-5xl "
              words="Transforming Concepts Into Seamless User Experiences"
            />

            <p className="text-center text-black text-xs md:text-xl mt-2">
              Hi, I&apos;m Rehan, a Website Developer from Pakistan
            </p>
          </div>
        </div>

        <div className="pt-[15%] md:pt-[4%]">
          <MagicButton title="COMING SOON" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
