import React from "react";
import MagicButton from "./MagicButton";
import Bar from "@/components/Bar"

const Footer = () => {
  return (
    <footer className="w-full" id="contact">
      <div className="w-full absolute left-0 flex -mt-32  justify-center  min-h-96 bg-black-100 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-70"
        />
        <div className="flex space-y-7 absolute lg:top-[50%] top-[25%] p-7 text-center flex-col items-center">
          <h1 className="heading lg:max-w-[55vw]  max-w-[90vw] ">
            Ready to take <span className="text-purple">Your</span> Digital
            Presence to the next Level?
          </h1>
          <p className="lg:max-w-[55vw]  max-w-[90vw] ">
            Reach out to me today and let&apos;s discuss how can i help you
            achieve your goals{" "}
          </p>
          <a className="pb-16" href="mailto:abdulrehan0317@gmail.com">
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
