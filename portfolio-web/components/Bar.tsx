import { socialMedia } from "@/Data";
import React from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Bar = () => {
  return (
    <div className="w-[100%] mt-[9%] space-y-3  flex justify-around flex-col lg:flex-row pb-7 z-50 h-[5rem]">
      <div className="flex items-center justify-center">
        <p>Copyright &copy; 2024 Abdul Rehan</p>
      </div>
      <div className="flex items-center md:gap-3 pb-3 gap-6 justify-center">
        {socialMedia.map((profile) => (
          <a
            key={profile.id}
            href={profile.link}
            target="_blank"
            className="w-10 border border-[#ffffff1d] bg-[#ffffff14] h-10 cursor-pointer flex justify-center rounded-md  items-center backdrop-filter backdrop-blur-lg saturate-180 "
          >
            <img src={profile.img} alt="" width={20} height={20} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Bar;
