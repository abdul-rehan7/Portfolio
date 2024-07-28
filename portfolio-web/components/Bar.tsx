import { socialMedia } from "@/Data";
import React from "react";


const Bar = () => {
  return (
    <div className="w-[100%] lg:mt-[9%] mt-0 space-y-3 bg-black-100  flex justify-around flex-col lg:flex-row z-50 h-[10rem]">
      <div className="flex items-center justify-center">
        <p>Copyright &copy; 2024 Abdul Rehan</p>
      </div>
      <div className="flex items-center md:gap-3 pb-3 gap-6 justify-center">
        {socialMedia.map((profile) => (
          <a
            key={profile.id}
            href={profile.link}
            target="_blank"
            className="w-10 border border-[#bbbbbb] bg-[#bbbbbb37] h-10 cursor-pointer flex justify-center rounded-md  items-center backdrop-filter backdrop-blur-lg saturate-180 "
          >
            <img src={profile.img} alt="" width={20} height={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Bar;
