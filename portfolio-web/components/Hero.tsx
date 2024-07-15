import React from "react";
import { Spotlight } from "./ui/Spotlight";
import GridBackgroundDemo from "./bg";
import { TextGenerateEffect } from "./TextGenEffect";
import MagicButton from "./MagicButton";

const Hero = () => {
  return (
    <div className="pb-20 sm:pt-7 pt-2 overflow-hidden w-[100%] flex flex-col items-center">
      <div className="pb-1 pt-36 flex flex-col items-center">
        <div className="pb-20 pt-36 w-[100%] flex flex-col items-center">
          <Spotlight
            className="-top-10 w-[100%] left-4 md:-left-22 md:-top-20 h-full"
            fill="#a6a6a6"
          />
          <Spotlight
            className="-top-2 left-[12rem]  md:left-[70vw] md:-top-12 md:h-[60vh]  h-[30vh] w-[40%]"
            fill="#a6a6a6"
          />
        </div>
        <GridBackgroundDemo />

        <div className="absolute md:my-0  z-10 flex w-[100vw] justify-center">
          <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[90vw] flex flex-col justify-center items-center">
            <h2 className="text-xs max-w-[90vw] md:text-base uppercase tracking-widest text-center text-blue-100">
              Dynamic web magic with next.js
            </h2>

            <TextGenerateEffect
              className="text-center text-3xl md:text-4xl lg:text-6xl "
              words="Transforming Concepts Into Seamless Experiences"
            />

            <p className="text-center text-xs md:text-xl mt-2">
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
