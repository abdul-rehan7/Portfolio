import React from "react";
import MagicButton from "./MagicButton";
import Bar from "@/components/Bar"

const Footer = () => {
  return (
    <footer className="max-w-[100vw] overflow-x-hidden bg-black-100" id="contact">
      <div className="w-[100vw] absolute left-0 flex -mt-20  justify-center  min-h-96 bg-black-100 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100"
        />
        <div className="flex  absolute lg:top-[45%] top-[28%]  text-center flex-col items-center">
          <h1 className="heading lg:max-w-[55vw] py-3 max-w-[90vw] ">
            Ready to take <span className="text-black-300">Your</span> Digital
            Presence to the next Level?
          </h1>
          <p className="lg:max-w-[55vw] py-3 lg:pb-7 max-w-[90vw] ">
            Reach out to me today and let&apos;s discuss how can i help you
            achieve your goals{" "}
          </p>
          <a className="pb-4 lg:pb-7" href="mailto:abdulrehan0317@gmail.com">
            <MagicButton
              title="Let's Get In Touch"
            />
          </a>
          <Bar/>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
