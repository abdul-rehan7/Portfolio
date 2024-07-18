import React from "react";

const MagicButton = ({ title }: { title: string }) => {
  return (
    <div className="bg-green-500 z-[5000] w-[100vw] flex justify-center ">
      <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] active:ring-white active:ring-[0.5px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {title}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
