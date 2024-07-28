import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

const MagicButton = ({ title }: { title: string }) => {
  return (
    <div className=" z-[5000] w-[100vw] flex justify-center ">
      <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] active:ring-black active:ring-[0.5px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex  h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-7 py-1 text-sm font-medium text-black backdrop-blur-3xl">
          {title}
          <FaLocationArrow className="ml-2" />
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
